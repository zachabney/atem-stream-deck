import app from '../../app'
import AuthScreen from '../auth/authScreen'
import { ImageSize } from 'tile-ui'
import { StreamDeckButton } from 'stream-deck-tile-ui'

export default class SettingsButton extends StreamDeckButton {
  onPress() {
    app.uiController.setScreen(new AuthScreen())
  }

  onRelease() {
    console.log('SETTINGS RELEASED')
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Settings.png', size)
  }
}
