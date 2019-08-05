import { ImageSize, ButtonComponent } from 'tile-ui'

export default class ComputerButton extends ButtonComponent {
  onPress() {
    console.log('COMPUTER PRESSED')
  }

  onRelease() {
    console.log('COMPUTER RELEASED')
  }

  async render(size: ImageSize) {
    return await this.imageLoader.get('assets/Computer.png', size)
  }
}
