import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class VolumeButton extends StaticImageComponent {
  onPress() {
    console.log('VOLUME PRESSED')
  }

  onRelease() {
    console.log('VOLUME RELEASED')
  }

  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Speaker.png', size)
  }
}
