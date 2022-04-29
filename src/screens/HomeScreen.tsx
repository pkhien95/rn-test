import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native'
import {MainTabsParams} from 'navigation/types'

function HomeScreen(props: NativeStackScreenProps<MainTabsParams, 'Home'>) {
  const {route} = props
  console.log('route:', route)
  const liveStreams = route.params?.livestreams || 204
  const members = route.params?.members || 53

  return (
    <ImageBackground
      style={styles.container}
      source={require('assets/home/home.png')}>
      <SafeAreaView>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>
          {liveStreams} Livestreams · {members} Members
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

export default HomeScreen
