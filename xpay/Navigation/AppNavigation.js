import React from 'react'
import { createStackNavigator as StackNavigator, createDrawerNavigator as DrawerNavigator, createSwitchNavigator } from 'react-navigation'
import navigatorHelper from '../Lib/helper/navigator'
import { isIphoneX } from '../Lib/helper/platform'

import ScreenLogin from '../Screens/Login/ScreenLogin'
import ScreenOtpValidation from '../Screens/OtpValidation/ScreenOtpValidation'
import ScreenAddCard from '../Screens/AddCard/ScreenAddCard'
import ScreenHome from '../Screens/Home/ScreenHome'
import ScreenEditProfile from '../Screens/Home/ScreenEditProfile'
import ScreenSignup from '../Screens/Signup/ScreenSignup'
import ScreenShowqr from '../Screens/Showqr/ScreenShowqr'
import ScreenScanQr from '../Screens/ScanQr/ScreenScanQr'
import ScreenTransactionConfirmation from '../Screens/TransactionConfirmation/ScreenTransactionConfirmation'
import ScreenAuthentication from '../Screens/Authentication/ScreenAuthentication'
import ScreenTransactionStatus from '../Screens/TransactionStatus/ScreenTransactionStatus'
import ScreenSuccessBind from '../Screens/SuccessBind/ScreenSuccessBind'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const menuRoutes = {
  ScreenHome: { screen: ScreenHome, navigationOptions: { drawerLabel: 'Home' } }
}
navigatorHelper.setMenuNavigationRoutes(menuRoutes)
const DrawerMenuNavigator = DrawerNavigator(menuRoutes, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScreenHome',
  navigationOptions: {
    headerStyle: styles.header
  }
  // contentComponent: props => <Drawer {...props} />
})
const loggedinNavigator = StackNavigator({
  DrawerMenuNavigator: { screen: DrawerMenuNavigator },
  ScreenDashboard: { screen: ScreenHome },
  ScreenShowqr: { screen: ScreenShowqr },
  ScreenTransactionConfirmation: { screen: ScreenTransactionConfirmation },
  ScreenOtpValidation: { screen: ScreenOtpValidation },
  ScreenScanQr: { screen: ScreenScanQr },
  ScreenSuccessBind: { screen: ScreenSuccessBind },
  ScreenAddCard: { screen: ScreenAddCard },
  ScreenTransactionStatus: { screen: ScreenTransactionStatus },
  ScreenEditProfile:{screen:ScreenEditProfile }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DrawerMenuNavigator',
  navigationOptions: {
    headerStyle: styles.header
  },
  cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
})
const unloggedinNavigator = StackNavigator({
  ScreenLogin: { screen: ScreenLogin },
  ScreenSignup: { screen: ScreenSignup }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScreenLogin',
  navigationOptions: {
    headerStyle: styles.header
  },
  cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
})

const switchNavigator = createSwitchNavigator({
  ScreenAuthentication,
  loggedinNavigator,
  unloggedinNavigator
}, { initialRouteName: 'ScreenAuthentication' })

export default switchNavigator
