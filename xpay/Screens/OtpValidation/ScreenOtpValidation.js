import React, { Component } from 'react'
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
import { ImageBackground, View } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import Footer from '../../Containers/Footer'
import { Images, Metrics, Colors } from '../../Themes'
import FormOtpvalidation from '../../Containers/Otp/FormOtpvalidation'

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenOtpValidation extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <ImageBackground source={Images.backgroundXpay} style={styles.backgroundImg}>
          <Header style={{ backgroundColor: Colors.colorPrimaryDark }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Otp Validation</Title>
            </Body>
            <Right />
          </Header>
          <Content padding contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <FormOtpvalidation
              onSuccessSubmit={() => {
                console.log('onSuccessSubmit=====')
                this.props.navigation.navigate('ScreenSuccessBind')
              }}
            />
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

export default ScreenOtpValidation
