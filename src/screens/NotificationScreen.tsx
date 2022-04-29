import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {MainTabsParams} from 'navigation/types'
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native'

function NotificationScreen(
  props: NativeStackScreenProps<MainTabsParams, 'Notification'>,
) {
  const {route} = props
  const courses = route.params?.courses || 204
  const members = route.params?.members || 53

  return (
    <ImageBackground
      style={styles.container}
      source={require('assets/notification/notification.png')}>
      <SafeAreaView>
        <Text style={styles.title}>World</Text>
        <Text style={styles.subtitle}>
          {courses} Courses · {members} Members
        </Text>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '8%',
  },
  title: {
    fontSize: 60,
    color: 'white',
    marginTop: '30%',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  },
})

export default NotificationScreen
