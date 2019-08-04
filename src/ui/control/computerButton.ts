import StreamDeckButton from '../stream-deck/stream-deck-button'
import { ImageSize } from 'tile-ui'
import app from '../../app'

export default class ComputerButton extends StreamDeckButton {
  onPress() {
    console.log('COMPUTER PRESSED')
  }

  onRelease() {
    console.log('COMPUTER RELEASED')
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Computer.png', size)
  }
}
