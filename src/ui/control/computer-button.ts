import { ImageSize } from 'tile-ui'
import app from '../../app'
import { StreamDeckButton } from 'stream-deck-tile-ui'

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
