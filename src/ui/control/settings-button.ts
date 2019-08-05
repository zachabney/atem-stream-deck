import AuthScreen from '../auth/auth-screen'
import { ImageSize, ButtonComponent } from 'tile-ui'

export default class SettingsButton extends ButtonComponent {
  onPress() {
    this.uiController.setScreen(new AuthScreen(this.uiController))
  }

  onRelease() {
    console.log('SETTINGS RELEASED')
  }

  async render(size: ImageSize) {
    return await this.imageLoader.get('assets/Settings.png', size)
  }
}
