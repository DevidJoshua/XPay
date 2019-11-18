import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Text,
  Spinner,
  Label
} from 'native-base'
import SignupAction, { SignupSelectors } from './redux'
import { Colors } from '../../Themes'

class FormSignup extends Component {
  componentWillMount () {
    this.props.signupPatch({ signupFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' } })
  }

  componentDidUpdate (prevProps) {
    if (!this.props.signupFormSubmitMSG.ir && this.props.signupFormSubmitMSG.rc === '00') {
      this.props.onSuccessSubmit()
    }
  }

  render () {
    return (
      <Form>
        <Text style={{ alignSelf: 'center', marginBottom: 10 }}>Email or Phone Number</Text>
        <Item fixedLabel regular>
          {/* <Label floatingLabel>Email or Phone Number</Label> */}
          <Input style={{ textAlign: 'center' }} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        </Item>
        <Button block style={{ margin: 15, backgroundColor: Colors.colorPrimaryDark }} onPress={() => this.props.signupFormSubmit({})}>
          <Text>Submit</Text>
        </Button>
        {this.props.signupFormSubmitMSG.ir && <Spinner color='green' />}
      </Form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
// const foo = params.get('foo'); // bar
  return {
    signupFormSubmitMSG: SignupSelectors.signupFormSubmitMSG(state.signup)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupFormSubmit: data => dispatch(SignupAction.signupFormSubmit(data)),
    signupPatch: (data) => dispatch(SignupAction.signupPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignup)