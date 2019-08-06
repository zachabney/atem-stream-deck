import { ImageSize, UIImage, StaticImageComponent } from 'tile-ui'
import { BACKGROUND_COLOR } from './settings-screen'
import ControlScreen from '../control/control-screen'
import config from '../../config'

export default class SettingsBackButton extends StaticImageComponent {
  onPress() {
    config.save()
    this.uiController.setScreen(new ControlScreen(this.uiController))
  }

  async getImage(size: ImageSize): Promise<UIImage> {
    return this.imageLoader.get(`assets/Back Arrow.png`, size, BACKGROUND_COLOR)
  }
}
