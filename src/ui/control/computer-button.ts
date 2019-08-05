import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class ComputerButton extends StaticImageComponent {
  onPress() {
    console.log('COMPUTER PRESSED')
  }

  onRelease() {
    console.log('COMPUTER RELEASED')
  }

  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Computer.png', size)
  }
}
