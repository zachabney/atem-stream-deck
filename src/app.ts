import { install } from 'source-map-support'
install()

require('./config')

import { openStreamDeck } from 'elgato-stream-deck'
import { DARK_GRAY } from './colors'
import FlattenedImageLoader from './flattened-image-loader'
import StreamDeckUIController from './stream-deck-ui-controller'
import NoConnectionScreen from './no-connection/no-connection-screen'
;(async () => {
  const streamDeck = openStreamDeck()

  const imageLoader = new FlattenedImageLoader(DARK_GRAY)
  const uiController = new StreamDeckUIController(streamDeck, imageLoader)
  await uiController.setScreen(new NoConnectionScreen(uiController))
  console.log('Initialized')
})()
