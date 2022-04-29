import React from 'react'
import {MainTabsParams} from './types'
import HomeScreen from 'screens/HomeScreen'
import NotificationScreen from 'screens/NotificationScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator<MainTabsParams>()

function MainTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          textTransform: 'uppercase',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'ios-home-sharp' : 'ios-home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'notifications' : 'notifications-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabsNavigator
