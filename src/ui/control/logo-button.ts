import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class LogoButton extends StaticImageComponent {
  onPress() {
    console.log('LOGO PRESSED')
  }

  onRelease() {
    console.log('LOGO RELEASED')
  }

  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Logo.png', size)
  }
}
