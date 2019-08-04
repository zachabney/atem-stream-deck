import Button from '../button'
import Image from '../image/image'
import ImageSize from "../image/image-size";

export default class LogoButton extends Button {
  onPress() {
    console.log('LOGO PRESSED')
  }

  onRelease() {
    console.log('LOGO RELEASED')
  }

  async getImage(size: ImageSize): Promise<Image> {
    return await Image.load('assets/Logo.png', size)
  }
}
