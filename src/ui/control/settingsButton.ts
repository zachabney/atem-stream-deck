import Button from '../button'
import Image from '../image/image'
import app from '../../app'
import AuthScreen from '../auth/authScreen'
import ImageSize from '../image/image-size'

export default class SettingsButton extends Button {
  onPress() {
    app.uiController.setScreen(new AuthScreen())
  }

  onRelease() {
    console.log('SETTINGS RELEASED')
  }

  async render(size: ImageSize) {
    return await Image.load('assets/Settings.png', size)
  }
}
