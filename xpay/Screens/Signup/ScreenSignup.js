import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Image, Text, ImageBackground } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialFixedLabelTextbox from '../../Components/InputText/MaterialFixedLabelTextbox'
import MaterialButtonViolet from '../../Components/Button/MaterialButtonViolet'
import { Images, Colors, Metrics } from '../../Themes'
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
              <Text>Success submit</Text>
            )}
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
