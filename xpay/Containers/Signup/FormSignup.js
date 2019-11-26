import React, { Component } from 'react'
import { connect } from 'react-redux'
import {StyleSheet,ScrollView,Image} from 'react-native'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Icon,
  Text,
  Spinner,
  Label,
  Textarea,
  View
} from 'native-base'
import SignupAction, { SignupSelectors } from './redux'
import { Ficon,Colors } from '../../Themes'
import { TextInput } from 'react-native-gesture-handler'
import { thisExpression, stringLiteral } from '@babel/types'


class FormSignup extends Component {
  state={
    alert_email:'',
    alert_phone:'',
    alert_color:'',
    isDisabled:true
  }
  componentWillMount () {
    this.props.signupPatch({ signupFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' } })
  }
  _checkIsnumber(number){
    var reg=/[0-9]/g;
    if(!(reg.test(number))||number==""){
        this.setState({alert_phone:'Make sure you input number'});
        this.setState({alert_color:'#e30000'});
        this.setState({isDisabled:true});  
    }
    else{
      this.setState({alert_phone:'Phone valid'});
      this.setState({alert_color:'#26c805'}); 
      this.setState({isDisabled:false}); 
    }
  }
  _checkIsemail(email){
    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||email==""){
        this.setState({alert_email:'Email not valid'});
        this.setState({alert_color:'#e30000'});
        this.setState({isDisabled:true}); 
    }
    else{
      this.setState({alert_email:'Email Valid'});
      this.setState({alert_color:'#26c805'});
      this.setState({isDisabled:false});   
    }
  }
  componentDidUpdate (prevProps) {
    if (!this.props.signupFormSubmitMSG.ir && this.props.signupFormSubmitMSG.rc === '00') {
      this.props.onSuccessSubmit()
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>  
          <Text style={{textAlign:'center',alignSelf:'center',color:'#616161', margin:20}}>
          Make sure you fill all inputs and make sure your datas below are correct
          </Text>
          <Form style={{marginTop:10}}>
            {/* <Text style={{ alignSelf: 'center', marginBottom: 10 }}>Email or Phone Number</Text> */}
            {/* <Item fixedLabel regular> */}
              {/* <Label floatingLabel>Email or Phone Number</Label> */}
              {/* <Input style={{ textAlign: 'center' }} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
            </Item> */}
            
            <Item rounded rounded style={styles.item}>
                <Image source={Ficon.email} style={styles.ico}/>
                <Input placeholder='Email' style={styles.input} onChangeText={(el)=>this._checkIsemail(el)}/>
            </Item>
            {/* alert */}
          <Text  style={[styles.alert,{color:this.state.alert_color}]}>{this.state.alert_email}</Text>
            <Item rounded style={styles.item}>
              <Image source={Ficon.phone} style={styles.ico}/> 
              <Input placeholder='Phone number' style={styles.input} keyboardType='numeric' onChangeText={(el)=>this._checkIsnumber(el)}/>  
            </Item> 
            {/* alert */}
          <Text style={[styles.alert,{color:this.state.alert_color}]}>{this.state.alert_phone}</Text>
            <Button disabled={this.state.isDisabled} block style={{ margin: 15, backgroundColor: Colors.colorPrimaryDark }} onPress={() => this.props.signupFormSubmit({})}>
              <Text>Submit</Text>
            </Button>
            {this.props.signupFormSubmitMSG.ir && <Spinner color='green' />}
          </Form>
        </View>
     </ScrollView>
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

const styles=StyleSheet.create({
  alert:{
    fontSize:15,
    marginLeft:20
  },
  item:{
    marginTop:10,
    // marginLeft:15,
    // marginRight:15,
    // marginHorizontal:15,
    backgroundColor:'#ededed99'
  },
  ico:{
    resizeMode:'contain',
    marginLeft:15,
    width:23,
    height:23,
    opacity:.5
  },
  input:{
    width:100,
    marginHorizontal:10,
    fontSize:19,
    color:'#555555',
    textAlign: 'left'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignup)
