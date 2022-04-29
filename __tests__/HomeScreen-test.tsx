import {render} from '@testing-library/react-native'
import HomeScreen from 'screens/HomeScreen'
import React from 'react'

const mockedNavigation = {
  navigate: () => {},
}

const mockedRoute = {
  params: {},
}

describe('Test HomeScreen', () => {
  it('Should render HomeTab correctly', () => {
    const {queryByText, debug} = render(
      <HomeScreen navigation={mockedNavigation} route={mockedRoute} />,
    )
    debug()
    const subtitleText = queryByText('204 Livestreams · 50 members')
    expect(subtitleText).toBeDefined()
  })
})
