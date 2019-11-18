
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  DatePicker,
  Spinner
} from 'native-base';
import _ from 'lodash'
import SessionAction, { SessionSelectors } from '../../Redux/SessionRedux'
import { Colors } from '../../Themes'
import {withNavigation} from 'react-navigation'

class FormPinValidation extends Component {
  componentWillMount () {
    // this.props.otpvalidationPatch({ otpvalidationFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' } })
  }

  componentDidUpdate (prevProps) {
    // if (!this.props.otpvalidationFormSubmitMSG.ir && this.props.otpvalidationFormSubmitMSG.rc === '00') {
    //   this.props.onSuccessSubmit()
    // }
  }

  render () {
    return (
      <Content padder>
        <Form>
          <Text style={{ alignSelf: 'center', marginBottom: 10 }}>INPUT PIN TO CONFIRM</Text>
          <Item fixedLabel regular>
            {/* <Label>OTP</Label> */}
            <Input secureTextEntry style={{ textAlign: 'center' }} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
          </Item>
        </Form>
        <Button block style={{ margin: 15, backgroundColor: Colors.colorPrimaryDark }} onPress={() => this.props.navigation.replace('ScreenTransactionStatus')}>
          <Text>PAY</Text>
        </Button>
        {/* {this.props.otpvalidationFormSubmitMSG.ir && <Spinner color='green' />} */}
      </Content>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const foo = params.get('foo'); // bar
  return {
    // otpvalidationFormSubmitMSG: OtpvalidationSelectors.otpvalidationFormSubmitMSG(state.otpvalidation)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // otpvalidationFormSubmit: data => dispatch(OtpvalidationAction.otpvalidationFormSubmit(data)),
    // otpvalidationPatch: (data) => dispatch(OtpvalidationAction.otpvalidationPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(FormPinValidation))
