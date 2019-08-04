import Button from '../button'
import Image from '../image/image'
import app from '../../app'
import ControlScreen from '../control/controlScreen'
import ImageSize from '../image/image-size'

export default class BackButton extends Button {
  onPress() {
    app.uiController.setScreen(new ControlScreen())
  }

  onRelease() {
    console.log('BACK RELEASED')
  }

  async render(size: ImageSize): Promise<Image> {
    return await Image.load('assets/Back Arrow.png', size)
  }
}
