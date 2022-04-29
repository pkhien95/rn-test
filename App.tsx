/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from 'navigation/RootNavigator'
import {StatusBar} from 'react-native'
import linkingConfiguration from 'navigation/linkingConfiguration'

function App() {
  return (
    <NavigationContainer linking={linkingConfiguration}>
      <StatusBar barStyle={'light-content'} translucent={true} />
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App
