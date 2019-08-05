import { install } from 'source-map-support'
install()

require('./config')

import { openStreamDeck } from 'elgato-stream-deck'
import ControlScreen from './ui/control/control-screen'
import { DARK_GRAY } from './ui/colors'
import { StreamDeckUIController } from 'tile-ui'
import FlattenedImageLoader from './ui/flattened-image-loader'

;(async () => {
  const streamDeck = openStreamDeck()

  const imageLoader = new FlattenedImageLoader(DARK_GRAY)
  const uiController = new StreamDeckUIController(streamDeck, imageLoader)
  uiController.setScreen(new ControlScreen(uiController))
})()
