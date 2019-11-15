import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text,
  Button
} from 'native-base'
import { ImageBackground, View, StatusBar } from 'react-native'
import { isIphoneX } from '../../Lib/helper/platform'
import StyledStatusBar from '../../Containers/StyledStatusBar'
import CardSwipe from './CardSwipe'
import Footer from '../../Containers/Footer'
import { Images, Metrics, Colors } from '../../Themes'
import UserProfile from './UserProfile'

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenHome extends Component {
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
            <View style={{ height: 300 }}>
              <CardSwipe />
              <Text style={{ alignSelf: 'center', position: 'relative', top: -13 }}>Long Press to view the qr code</Text>
            </View>
          </Content>
        </ImageBackground>
        <Button block dark style={{ backgroundColor: Colors.colorPrimaryDark }} onPress={() => this.props.navigation.navigate('ScreenAddCard')}>
          <Text>Add Card</Text>
        </Button>
        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
