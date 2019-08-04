import app from '../../app'
import AuthScreen from '../auth/authScreen'
import StreamDeckButton from '../stream-deck/stream-deck-button'
import { ImageSize } from 'tile-ui'

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
