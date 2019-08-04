import app from '../../app'
import StreamDeckButton from '../stream-deck/stream-deck-button'
import { ImageSize } from 'tile-ui'

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
