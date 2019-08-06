import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class BlackControlButton extends StaticImageComponent {
  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Black.png', size)
  }
}
