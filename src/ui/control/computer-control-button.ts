import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class ComputerControlButton extends StaticImageComponent {
  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Computer.png', size)
  }
}
