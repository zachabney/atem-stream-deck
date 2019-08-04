import Config from './config'
import { openStreamDeck } from 'elgato-stream-deck'
import { StreamDeckUIController } from './streamDeck/stream-deck-ui-controller'
import ControlScreen from './ui/control/controlScreen'
import UIController from './ui/ui-controller'

export class App {
  readonly uiController: UIController

  constructor(uiController: UIController) {
    this.uiController = uiController
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
const app = new App(streamDeckUIController)
app.start()

export default app
