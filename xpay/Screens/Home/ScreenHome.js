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
      <Container style={{ backgroundColor: '#fff' }}>
        <ImageBackground source={Images.backgroundXpay} style={{ flex: 1, width: '100%' }}>
          <StatusBar barStyle='light-content' backgroundColor='rgba(218,55,49,1)' />
          <Content>
            <UserProfile />
            <CardSwipe style={{ margin: 5 }} />
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
