import { ImageSize, ButtonComponent } from 'tile-ui'

export default class LogoButton extends ButtonComponent {
  onPress() {
    console.log('LOGO PRESSED')
  }

  onRelease() {
    console.log('LOGO RELEASED')
  }

  async render(size: ImageSize) {
    return await this.imageLoader.get('assets/Logo.png', size)
  }
}
