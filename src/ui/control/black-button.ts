import app from '../../app'
import { ImageSize } from 'tile-ui'
import { StreamDeckButton } from 'stream-deck-tile-ui'

export default class BlackButton extends StreamDeckButton {
  onPress() {
    console.log('BLACK BUTTON')
  }

  onRelease() {
    console.log('BLACK RELEASED')
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Black.png', size)
  }
}
