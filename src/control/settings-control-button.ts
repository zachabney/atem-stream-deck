import { ImageSize, StaticImageComponent } from 'tile-ui'
import AuthScreen from '../auth/auth-screen'

export default class SettingsControlButton extends StaticImageComponent {
  onPress() {
    this.uiController.setScreen(new AuthScreen(this.uiController))
  }

  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Settings.png', size)
  }
}
