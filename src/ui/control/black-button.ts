import { ImageSize, StaticImageComponent } from 'tile-ui'

export default class BlackButton extends StaticImageComponent {
  onPress() {
    console.log('BLACK BUTTON')
  }

  onRelease() {
    console.log('BLACK RELEASED')
  }

  async getImage(size: ImageSize) {
    return await this.imageLoader.get('assets/Black.png', size)
  }
}
