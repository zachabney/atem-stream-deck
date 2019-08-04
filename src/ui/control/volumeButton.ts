import Button from '../button'
import Image from '../image/image'
import ImageSize from "../image/image-size";

export default class VolumeButton extends Button {
  onPress() {
    console.log('VOLUME PRESSED')
  }

  onRelease() {
    console.log('VOLUME RELEASED')
  }

  async getImage(size: ImageSize): Promise<Image> {
    return await Image.load('assets/Speaker.png', size)
  }
}
