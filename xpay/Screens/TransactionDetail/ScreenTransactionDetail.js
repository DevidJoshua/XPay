import React, { Component } from 'react'
import { StyleSheet, TextInput, ImageBackground, View } from 'react-native'
import { Center } from '@builderx/utils'
import { Button, Container, Header, Left, Body, Right, Title, Icon, Text, Content, Card, CardItem, List, ListItem } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Colors, Images } from '../../Themes'
import FormPinValidation from '../../Containers/Pin/FormPinValidation'

export default class ScreenTransactionDetail extends Component {
  render () {
    const productList = [
      { qty: 1, name: 'Action Figure 01', price: 112500000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 1, name: 'Action Figure 01', price: 112500000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 },
      { qty: 10, name: 'Marchandise DP', price: 25000 }
    ]
    return (
      <Container style={{ backgroundColor: Colors.colorPrimary }}>
        <ImageBackground source={Images.backgroundXpay} style={{ flex: 1, width: '100%' }}>
          <Header style={{ backgroundColor: Colors.colorPrimaryDark }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Confirmation</Title>
            </Body>
            <Right />
          </Header>
          <Grid>
            <Row>
              <View style={{ width: '100%' }}>
                <Text style={{ alignSelf: 'center', margin: 5 }}>Transaction Detail</Text>
                <List
                  dataArray={productList}
                  renderRow={data =>
                    <ListItem noIndent style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
                      <Grid>
                        <Col size={1} style={{ backgroundColor: '#00CE9F' }}>
                          <Text style={{ color: '#000' }}>
                            {data.qty}
                          </Text>
                        </Col>
                        <Col size={2} style={{ backgroundColor: '#635DB7' }}>
                          <Text style={{ color: '#000' }}>
                            {data.price}
                          </Text>
                        </Col>
                        <Col size={4} style={{ backgroundColor: '#DD9E2C' }}>
                          <Text style={{ color: '#000' }}>
                            {data.name}
                          </Text>
                        </Col>
                      </Grid>
                      {/* <Left style={{backgroundColor: 'blue'}}>
                        <Text style={{ color: '#000' }}>
                          {data.name}
                        </Text>
                      </Left>
                      <Right style={{backgroundColor: 'blue'}}>
                        <Text style={{ color: '#000' }}>
                          {data.qty} x {data.price}
                        </Text>
                      </Right> */}
                    </ListItem>}
                />
                <Text style={{ alignSelf: 'center' }}>Total Amount: Rp 382.000</Text>
              </View>
            </Row>
            <Row style={{ height: 200 }}>
              <FormPinValidation
                onSuccessSubmit={() => {
                  this.props.navigation.navigate('ScreenSuccessBind')
                }}
              />
            </Row>
          </Grid>
          {/* <Content>
          <List
            style={{ backgroundColor: '#fff' }}
            dataArray={productList}
            renderRow={data =>
              <ListItem>
                <Left>
                  <Text style={{ color: '#000' }}>
                    {data.qty} x {data.price} {data.name}
                  </Text>
                </Left> */}
          {/* <Right>
                  <Text style={{ color: '#000' }}>
                    {data.qty*data.price}
                  </Text>
                </Right> */}
          {/* </ListItem>}
          /> */}

          {/* <Card>
            <CardItem>
              <Body> */}

          {/* <Text style={styles.text}>Transaction Detail</Text> */}
          {/* <Text style={styles.text8}>Qty</Text>
                <Text style={styles.text9}>Name</Text>
                <Text style={styles.text10}>Price</Text>
                <Text style={styles.text11}>1.</Text>
                <Text style={styles.text12}>Action Figure 01</Text>
                <Text style={styles.text13}>1.125.000.00</Text>
                <Text style={styles.text14}>2.</Text>
                <Text style={styles.text15}>Marchandise DP</Text>
                <Text style={styles.text16}>25.000.00</Text> */}
          {/* </Body>
            </CardItem>
          </Card> */}
          {/* <Center>
            <Text style={styles.text}>Transaction Detail</Text>
            <Text style={styles.text8}>Qty</Text>
            <Text style={styles.text9}>Name</Text>
            <Text style={styles.text10}>Price</Text>
            <Text style={styles.text11}>1.</Text>
            <Text style={styles.text12}>Action Figure 01</Text>
            <Text style={styles.text13}>1.125.000.00</Text>
            <Text style={styles.text14}>2.</Text>
            <Text style={styles.text15}>Marchandise DP</Text>
            <Text style={styles.text16}>25.000.00</Text>
          </Center>
          <Center horizontal>
            <Text style={styles.text2}>Amount</Text>
            <Text style={styles.text3}>Rp382.000</Text>
            <Text style={styles.text4}>PIN</Text>
          </Center>
          <Center horizontal>
            <TextInput
              style={styles.textinput}
              placeholder='******'
              selectionColor='#000'
              textAlign='center'
              maxLength={6}
              secureTextEntry
            />
          </Center> */}
          {/* <Button block style={{ margin: 15, backgroundColor: '#fff' }} onPress={() => this.props.otpvalidationFormSubmit({})}>
            <Text style={{ color: Colors.colorPrimary }}>Submit OTP</Text>
          </Button>
        </Content> */}
        </ImageBackground>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eb1c24'
  },
  text: {
    fontSize: 20
  },
  icon3: {
    top: 7,
    left: 10,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 35
  },
  text8: {
    top: 100.85,
    left: '9.1%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text9: {
    top: 100.85,
    left: '20.94%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text10: {
    top: 100.85,
    left: '68.2%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text11: {
    top: 128.36,
    left: '10.91%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text12: {
    top: 128.36,
    left: '20.94%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text13: {
    top: 128.36,
    left: '68.12%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text14: {
    top: 152.51,
    left: '10.62%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text15: {
    top: 152.51,
    left: '20.94%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text16: {
    top: 152.51,
    left: '72.55%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute'
  },
  text2: {
    top: '50.48%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute',
    fontSize: 30
  },
  text3: {
    top: '55.48%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute',
    fontSize: 40
  },
  text4: {
    top: '68.00%',
    color: 'rgba(255,255,255,1)',
    position: 'absolute',
    fontSize: 25
  },
  textinput: {
    top: '75.05%',
    width: 350.00,
    height: 52.67,
    borderRadius: 10,
    backgroundColor: 'rgba(230, 230, 230,1)',
    position: 'absolute',
    fontSize: 30
  },
  materialIconButtonsFooter: {
    left: 0,
    width: '100%',
    height: 55.97,
    backgroundColor: '#2d2d2d',
    position: 'absolute',
    bottom: 0.03
  }
})
