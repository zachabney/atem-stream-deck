import Button from '../button'
import Image from '../image/image'
import ImageSize from '../image/image-size'

export default class ComputerButton extends Button {
  onPress() {
    console.log('COMPUTER PRESSED')
  }

  onRelease() {
    console.log('COMPUTER RELEASED')
  }

  async getImage(size: ImageSize): Promise<Image> {
    return await Image.load('assets/Computer.png', size)
  }
}
