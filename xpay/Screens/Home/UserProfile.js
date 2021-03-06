import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'native-base'
// import { Center } from '@builderx/utils'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isIphoneX } from '../../Lib/helper/platform'
import { Images } from '../../Themes'

export default class UserProfile extends Component {
  static propTypes = {
    showSaldo: PropTypes.bool
  }

  //
  // // Defaults for props
  static defaultProps = {
    showSaldo: false
  }

  constructor (props) {
    super(props)
    this.state = {
      showSaldo: this.props.showSaldo
    }
    this.handleToggleShowSaldo = this.handleToggleShowSaldo.bind(this)
  }

  handleToggleShowSaldo () {
    this.setState({ showSaldo: !this.state.showSaldo })
  }

  render () {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          source={Images.cardImage2}
          style={styles.image}
        />
        {/* <Center horizontal> */}
        <Text style={styles.text}>Nofrets Poai</Text>
        {/* </Center> */}
        {/* <Center horizontal> */}
        {/* </Center> */}
        {
          this.state.showSaldo && (
            <TouchableOpacity style={styles.iconStack} onPress={this.handleToggleShowSaldo}>
              <Text style={styles.text2}>My wallet</Text>
              <Text style={styles.text3}>IDR 950,000</Text>
            </TouchableOpacity>
          )
        }
        {
          !this.state.showSaldo && (
            // <TouchableOpacity style={styles.iconStack} onPress={this.handleToggleShowSaldo}>
            <View style={styles.iconStack} onPress={this.handleToggleShowSaldo}>
              {/* <Image source={Images.walletIcon} /> */}
              <Button primary iconRight onPress={this.handleToggleShowSaldo}>
                <Text style={{ color: '#fff', marginLeft: 5 }}>View Saldo</Text>
                <Image source={Images.walletIcon} />
              </Button>
            </View>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218,55,49,1)',
    alignItems: 'center',
    overflow: 'hidden',
    height: 230
  },
  image: {
    width: 103,
    height: 103,
    backgroundColor: '#CCC',
    borderRadius: isIphoneX ? 50 : 100,
    margin: 10
  },
  text: {
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    fontFamily: 'Roboto-Bold'
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    fontFamily: 'roboto-Light'
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40
  },
  text3: {
    color: 'rgba(255,253,84,1)',
    fontSize: 25,
    fontFamily: 'roboto-Light'
  },
  iconStack: {
    width: '100%',
    alignItems: 'center',
    margin: 10
  }
})
