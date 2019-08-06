import config from './config'
import { ImageLoader, StreamDeckUIController, ImageSize } from 'tile-ui'
import ControlScreen from './control/control-screen'
import NoConnectionScreen from './no-connection/no-connection-screen'
import { StreamDeck } from 'elgato-stream-deck'
import atem from './atem-connection'

export default class AtemUIController extends StreamDeckUIController {
  private _isConnected = false

  constructor(streamDeck: StreamDeck, imageLoader: ImageLoader) {
    super(streamDeck, imageLoader)

    atem.on('connected', () => this.onConnected())
    atem.on('disconnected', () => this.onDisconnected())

    this.showSplashScreen()
  }

  private async showSplashScreen() {
    const size: ImageSize = {
      width: this.streamDeck.ICON_SIZE * this.streamDeck.KEY_COLUMNS,
      height: this.streamDeck.ICON_SIZE * this.streamDeck.KEY_ROWS
    }
    const image = await this.imageLoader.get('assets/Splash.png', size)
    this.streamDeck.fillPanel(image.buffer)
  }

  async connect() {
    const host = config.atemHost
    await atem.connect(host)
  }

  async disconnect() {
    await atem.disconnect()
  }

  private async onConnected() {
    this._isConnected = true
    this.streamDeck.clearAllKeys()
    await this.setScreen(new ControlScreen(this))
  }

  private async onDisconnected() {
    this._isConnected = false
    await this.setScreen(new NoConnectionScreen(this))
  }

  isConnected() {
    return this._isConnected
  }
}
