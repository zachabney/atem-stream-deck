import ControlScreen from '../control/control-screen'
import { ImageSize, ButtonComponent } from 'tile-ui'

export default class BackButton extends ButtonComponent {
  onPress() {
    this.uiController.setScreen(new ControlScreen(this.uiController))
  }

  onRelease() {
    console.log('BACK RELEASED')
  }

  async render(size: ImageSize) {
    return await this.imageLoader.get('assets/Back Arrow.png', size)
  }
}
