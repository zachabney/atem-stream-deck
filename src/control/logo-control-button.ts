import { ImageSize, StaticImageComponent } from 'tile-ui'
import { WHITE } from '../colors'

export default class LogoControlButton extends StaticImageComponent {
  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Logo.png', size)
  }
}
