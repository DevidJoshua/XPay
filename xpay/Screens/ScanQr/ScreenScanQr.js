import React, { Component, Fragment } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions'
import styles from './scanStyle'
import {
  TouchableOpacity,
  StatusBar,
  Linking,
  View,
  ImageBackground,
  Platform
} from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Title,
  Body,
  Right,
  Text,
  Icon,
  Form,
  Item,
  Label,
  Input
} from 'native-base'
import I18n from '../../I18n'

import {
  // Header,
  Colors
} from 'react-native/Libraries/NewAppScreen'
class ScreenScanQr extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scan: false,
      ScanResult: false,
      result: null,
      cameraGranted: false,
      photoLibraryGranted: false
    //   microphoneGranted: false
    }
  }

  componentWillMount () {
    if (Platform.OS === 'ios') {
      check(PERMISSIONS.IOS.CAMERA)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log('camere => This feature is not available (on this device / in this context)')
              break
            case RESULTS.DENIED:
              console.log('camere => The permission has not been requested / is denied but requestable')
              request(PERMISSIONS.IOS.CAMERA).then(result => {
                console.log('result=======>', result)
                this.setState({cameraGranted: true })
              })

              break
            case RESULTS.GRANTED:
              console.log('camere => The permission is granted')
              this.setState({cameraGranted: true })
              break
            case RESULTS.BLOCKED:
              console.log('camere => The permission is denied and not requestable anymore')
              break
          }
        })
        .catch(error => {
          console.log('camere => error=====>', error)
        // …
        })
      check(PERMISSIONS.IOS.MEDIA_LIBRARY)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log('photoLibrary => This feature is not available (on this device / in this context)')
              this.setState({ photoLibraryGranted: true })
              break
            case RESULTS.DENIED:
              console.log('photoLibrary => The permission has not been requested / is denied but requestable')
              request(PERMISSIONS.IOS.MEDIA_LIBRARY).then(result => {
                console.log('photoLibrary =>  result=======>', result)
                this.setState({ photoLibraryGranted: true })
              })

              break
            case RESULTS.GRANTED:
              console.log('photoLibrary => The permission is granted')
              this.setState({photoLibraryGranted: true })
              break
            case RESULTS.BLOCKED:
              console.log('photoLibrary => The permission is denied and not requestable anymore')
              break
          }
        })
        .catch(error => {
          console.log('photoLibrary => error=====>', error)
        })
    } else {
      // this.state.cameraGranted && this.state.photoLibraryGranted
      this.setState({ cameraGranted: true, photoLibraryGranted: true })
    }
    // check(PERMISSIONS.IOS.MICROPHONE)
    //   .then(result => {
    //     switch (result) {
    //       case RESULTS.UNAVAILABLE:
    //         console.log('microphone => This feature is not available (on this device / in this context)')
    //         break
    //       case RESULTS.DENIED:
    //         console.log('microphone => The permission has not been requested / is denied but requestable')
    //         request(PERMISSIONS.IOS.MICROPHONE).then(result => {
    //           console.log('microphone =>  result=======>', result)
    //           this.setState({ microphoneGranted: true })
    //         })

    //         break
    //       case RESULTS.GRANTED:
    //         console.log('microphone => The permission is granted')
    //         this.setState({microphoneGranted: true })
    //         break
    //       case RESULTS.BLOCKED:
    //         console.log('microphone => The permission is denied and not requestable anymore')
    //         break
    //     }
    //   })
    //   .catch(error => {
    //     console.log('microphone => error=====>', error)
    //   // …
    //   })
  }

    handleOnSuccess = (e) => {
      const check = e.data.substring(0, 4)
      console.log('scanned data' + check)
      this.setState({
        result: e,
        scan: false,
        ScanResult: true
      })
      if (check === 'http') {
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err))
      } else {
        this.setState({
          result: e,
          scan: false,
          ScanResult: true
        })
      }
      this.props.navigation.replace('ScreenTransactionConfirmation')
    }



    activeQR = () => {
      this.setState({
        scan: true
      })
    }

    scanAgain = () => {
      this.setState({
        scan: true,
        ScanResult: false
      })
    }

    render () {
      console.log('state=====>', this.state)
      const textMessage = I18n.t
      const { scan, ScanResult, result } = this.state
      const desccription = 'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.'
      return (
        <Container>
          <Header>
            <StatusBar barStyle='light-content' />
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Scan QR</Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
            {(this.state.cameraGranted && this.state.photoLibraryGranted) &&
              <QRCodeScanner
                reactivate
                showMarker
                ref={(node) => { this.scanner = node }}
                onRead={this.handleOnSuccess}
                cameraStyle={{ backgroundColor: 'yellow', height: 300, maxWidth: 300, alignSelf: 'center' }}
              />}
          </Content>
        </Container>

      )
    }
}

export default ScreenScanQr
