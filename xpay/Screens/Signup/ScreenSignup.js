import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../Themes'
import FormSignup from '../../Containers/Signup/FormSignup'

export default class ScreenSingup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {},
      formSent: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (name, value) {
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  handleSubmit () {
    console.log('submit form ', this.state.form)
  }

  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Signup</Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            {
              !this.state.formSent && (
                <FormSignup
                  onSuccessSubmit={() => this.setState({ formSent: true })}
                />
              )
            }
            {this.state.formSent && (
              <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Icon
                  style={{ fontSize: 200, color: 'green' }}
                  type='Ionicons'
                  name='md-checkmark-circle-outline'
                />
                <Text style={{ margin: 10, textAlign: 'center' }}>Check your username and password in your email or message inbox</Text>
                <Button onPress={() => this.props.navigation.replace('ScreenLogin')}><Text>OK</Text></Button>
              </View>
            )}
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
