import React from 'react'
import {RootStackParams} from './types'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MainTabsNavigator from 'navigation/MainTabsNavigator'

const Stack = createNativeStackNavigator<RootStackParams>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
