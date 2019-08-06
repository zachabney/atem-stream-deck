import { install } from 'source-map-support'
install()

require('./config')

import { openStreamDeck, StreamDeck } from 'elgato-stream-deck'
import { DARK_GRAY } from './colors'
import AtemUIController from './atem-ui-controller'
import { FlattenedImageLoader } from 'tile-ui'

let streamDeck: StreamDeck | undefined = openStreamDeck()

const imageLoader = new FlattenedImageLoader(DARK_GRAY)
const atemController = new AtemUIController(streamDeck, imageLoader)

atemController.connect()
