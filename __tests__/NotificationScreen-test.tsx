import {render} from '@testing-library/react-native'
import HomeScreen from 'screens/HomeScreen'
import React from 'react'

const mockedNavigation = {
  navigate: () => {},
}

const mockedRoute = {
  params: {},
}

describe('Test NotificationScreen', () => {
  it('Should render NotificationTab correctly', () => {
    const {queryByText, debug} = render(
      <HomeScreen navigation={mockedNavigation} route={mockedRoute} />,
    )
    debug()
    const subtitleText = queryByText('204 Courses · 50 members')
    expect(subtitleText).toBeDefined()
  })
})
