import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text,
  Button,
  Icon
} from 'native-base'
import { ImageBackground, View, StatusBar, Platform } from 'react-native'
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
          {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(218,55,49,1)' />}
          {Platform.OS === 'ios' &&
            <StyledStatusBar
              translucent
              backgroundColor='rgba(218,55,49,1)'
              barStyle='light-content'
              StatusBarAnimation='fade'
            />}
          <Content>
            <UserProfile/>
            <CardSwipe style={{ margin: 5 }} />
            <Button rounded success style={{ marginBottom:10,width: 120, alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('ScreenAddCard')}>
              <Icon name='add' style={{ marginRight: 0 }} />
              <Text style={{ paddingLeft: 0, marginLeft: 10 }}>Add Card</Text>
            </Button>
          </Content>
        </ImageBackground>
        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
