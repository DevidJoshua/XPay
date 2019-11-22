import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'
import { StyleProvider } from 'native-base'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import getTheme from '../native-base-theme/components'
import variables from '../native-base-theme/variables/commonColor'

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME }

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  codePushStatusDidChange(status) {
    switch(status) {
        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            alert("Checking for updates.");
            break;
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            alert("Downloading package.");
            break;
        case codePush.SyncStatus.INSTALLING_UPDATE:
            alert("Installing update.");
            break;
        case codePush.SyncStatus.UP_TO_DATE:
            alert("Up-to-date.");
            break;
        case codePush.SyncStatus.UPDATE_INSTALLED:
            alert("Update installed.");
            break;
    }
}

codePushDownloadDidProgress(progress) {
    alert(progress.receivedBytes + " of " + progress.totalBytes + " received.");
}
  render () {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <RootContainer />
        </StyleProvider>
      </Provider>
    )
  }
}
const MyApp = codePush(codePushOptions)(App)
export default MyApp
