import { StaticImageComponent, ImageSize } from 'tile-ui'

export default class NoConnectionButton extends StaticImageComponent {
  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Link Broken.png', size)
  }
}
