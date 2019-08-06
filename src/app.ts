import { install } from 'source-map-support'
install()

require('./config')

import { openStreamDeck } from 'elgato-stream-deck'
import ControlScreen from './control/control-screen'
import { DARK_GRAY } from './colors'
import FlattenedImageLoader from './flattened-image-loader'
import StreamDeckUIController from './stream-deck-ui-controller'
;(async () => {
  const streamDeck = openStreamDeck()

  const imageLoader = new FlattenedImageLoader(DARK_GRAY)
  const uiController = new StreamDeckUIController(streamDeck, imageLoader)
  uiController.setScreen(new ControlScreen(uiController))
})()
