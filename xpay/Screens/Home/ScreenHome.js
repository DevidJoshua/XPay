import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text
} from 'native-base'
import { ImageBackground, View, StatusBar } from 'react-native'
import { isIphoneX } from '../../Lib/helper/platform'
import StyledStatusBar from '../../Containers/StyledStatusBar'
import { Center } from '@builderx/utils'
import CardSwipe from './CardSwipe'
import Footer from '../../Containers/Footer'
import { Images, Metrics, Colors } from '../../Themes'
import UserProfile from './UserProfile'
import MaterialButtonViolet from '../../Components/Button/MaterialButtonViolet'

export default class ScreenHome extends Component {
  render () {
    return (
      <Container>
        {/* <Header style={{height: 1}}>
          <StatusBar barStyle="light-content"/>
          <Left />
          <Body />
          <Right />
        </Header> */}
        {/* <StatusBar translucent backgroundColor={'#c41f19'} /> */}
        {/* {isIphoneX && <StyledStatusBar
          translucent
          backgroundColor={isIphoneX ? '#c41f19' : '#c41f19'}
          barStyle='light-content'
          StatusBarAnimation='fade'
        />} */}
        <ImageBackground source={Images.backgroundXpay} style={{ flex: 1, width: '100%' }}>
          <Content>
            <View style={{ flex: 1 }}>
              <UserProfile />
            </View>
            <Center horizontal>
              <Text style={styles.text3}>Choose Your Payment Card</Text>
            </Center>
              <View style={styles.logo}>
              <CardSwipe />
            </View>
            <Text style={{ alignSelf: 'center', position: 'relative', top: 0 }}>Long Click to view the qr code</Text>
            <MaterialButtonViolet title='Add Card' onPress={() => this.props.navigation.navigate('ScreenAddCard')} style={styles.ButtonVioletSignUp} />
          </Content>
          
        </ImageBackground>
        <Footer />
      </Container>
    )
  }
}

const styles = {
  container: {
    backgroundColor: "#fff"
  },
  backgroundImg: {
      flex: 1,
      width: Metrics.screenWidth
  },
  text3: {
    top: '48.00%',
    position: 'absolute',
    fontSize: 20
  },
  logo: {
    marginTop: 50,
    height: 200,
    resizeMode: 'contain'
  },
  ButtonVioletSignUp: {
    width: 350,
    height: 59,
    backgroundColor: '#eb1c24',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30
  }
}