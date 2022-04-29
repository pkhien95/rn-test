import {LinkingOptions} from '@react-navigation/native'
import {RootStackParams} from 'navigation/types'

const linkingConfiguration: LinkingOptions<RootStackParams> = {
  prefixes: ['rntest://'],
  config: {
    screens: {
      Main: {
        screens: {
          Home: 'home/:livestreams/:members',
          Notification: 'notification/:courses/:members',
        },
      },
    },
  },
}

export default linkingConfiguration
