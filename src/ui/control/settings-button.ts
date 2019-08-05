import AuthScreen from '../auth/auth-screen'
import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class SettingsButton extends StaticImageComponent {
  onPress() {
    this.uiController.setScreen(new AuthScreen(this.uiController))
  }

  onRelease() {
    console.log('SETTINGS RELEASED')
  }

  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Settings.png', size)
  }
}
