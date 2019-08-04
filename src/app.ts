import { install } from 'source-map-support'
install()

import Config from './config'
import { openStreamDeck } from 'elgato-stream-deck'
import ControlScreen from './ui/control/controlScreen'
import { DARK_GRAY } from './ui/colors'
import { StreamDeckUIController, StreamDeckImageLoader } from 'stream-deck-tile-ui'

export class App {
  readonly uiController: StreamDeckUIController
  readonly imageLoader: StreamDeckImageLoader

  constructor(uiController: StreamDeckUIController, imageLoader: StreamDeckImageLoader) {
    this.uiController = uiController
    this.imageLoader = imageLoader
  }

  async start() {
    await this.uiController.setScreen(new ControlScreen())
    console.log('Controller initialized')
  }
}

// log and kill process if there's a config error
Config.validate()

const streamDeck = openStreamDeck()

const streamDeckUIController = new StreamDeckUIController(streamDeck)
const streamDeckImageLoader = new StreamDeckImageLoader(DARK_GRAY)
const app = new App(streamDeckUIController, streamDeckImageLoader)
app.start()

export default app
