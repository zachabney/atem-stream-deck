import { ImageSize, ButtonComponent } from 'tile-ui'

export default class BlackButton extends ButtonComponent {
  onPress() {
    console.log('BLACK BUTTON')
  }

  onRelease() {
    console.log('BLACK RELEASED')
  }

  async render(size: ImageSize) {
    return await this.imageLoader.get('assets/Black.png', size)
  }
}
