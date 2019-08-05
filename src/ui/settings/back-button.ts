import { ImageSize, UIImage, StaticImageComponent } from 'tile-ui'
import { BACKGROUND_COLOR } from './settings-screen'
import ControlScreen from '../control/control-screen'

export default class BackButton extends StaticImageComponent {
  onPress() {
    this.uiController.setScreen(new ControlScreen(this.uiController))
  }

  async getImage(size: ImageSize): Promise<UIImage> {
    return this.imageLoader.get(`assets/Back Arrow.png`, size, BACKGROUND_COLOR)
  }
}
