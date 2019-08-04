import StreamDeckButton from '../stream-deck/stream-deck-button'
import { ImageSize } from 'tile-ui'
import app from '../../app'

export default class VolumeButton extends StreamDeckButton {
  onPress() {
    console.log('VOLUME PRESSED')
  }

  onRelease() {
    console.log('VOLUME RELEASED')
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Speaker.png', size)
  }
}
