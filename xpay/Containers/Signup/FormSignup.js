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
                <Input placeholder='Email' style={styles.input}/>
            </Item>
            <Item rounded style={styles.item}>
                <Image source={Ficon.user} style={styles.ico}/>
                <Input placeholder='Fullname' style={styles.input}/>  
            </Item>
            <Item rounded style={styles.item}>
                <Image source={Ficon.idcard} style={styles.ico}/>
                <Input placeholder='No.ID.example: KTP, NIM, NIK' style={styles.input}/> 
            </Item>
              <Item rounded style={styles.item}>
              <Image source={Ficon.location} style={styles.ico}/>
                <Textarea rowSpan={5} placeholder={'Adress. ex.: Jl. Panjang no.2 '}
                  />
              </Item>
              <Item rounded style={styles.item}>
              <Image source={Ficon.phone} style={styles.ico}/> 
              <Input placeholder='Phone number' style={styles.input}/>  
              </Item>
            <Button block style={{ margin: 15, backgroundColor: Colors.colorPrimaryDark }} onPress={() => this.props.signupFormSubmit({})}>
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
  },
  textarea:{
    backgroundColor:'#e8e8e8',
    fontSize:17,
    marginHorizontal:10,
    textAlignVertical: 'top',  // hack android
    height: 170,
    color: '#333',
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignup)
