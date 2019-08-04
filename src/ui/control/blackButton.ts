import Button from '../button'
import Image from '../image/image'
import ImageSize from '../image/image-size'

export default class BlackButton extends Button {
  onPress() {
    console.log('BLACK BUTTON')
  }

  onRelease() {
    console.log('BLACK RELEASED')
  }

  async render(size: ImageSize) {
    return await Image.load('assets/Black.png', size)
  }
}
