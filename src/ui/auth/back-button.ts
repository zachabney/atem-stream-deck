import ControlScreen from '../control/control-screen'
import { ImageSize, StaticImageComponent, UIImage } from 'tile-ui'

export default class BackButton extends StaticImageComponent {
  onPress() {
    this.uiController.setScreen(new ControlScreen(this.uiController))
  }

  onRelease() {
    console.log('BACK RELEASED')
  }

  async getImage(size: ImageSize): Promise<UIImage> {
    return await this.imageLoader.get('assets/Back Arrow.png', size)
  }
}
