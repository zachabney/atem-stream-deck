import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class VolumeControlButton extends StaticImageComponent {
  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Speaker.png', size)
  }
}
