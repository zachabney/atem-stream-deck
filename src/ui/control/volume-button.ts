import { ImageSize, ButtonComponent } from 'tile-ui'

export default class VolumeButton extends ButtonComponent {
  onPress() {
    console.log('VOLUME PRESSED')
  }

  onRelease() {
    console.log('VOLUME RELEASED')
  }

  async render(size: ImageSize) {
    return await this.imageLoader.get('assets/Speaker.png', size)
  }
}
