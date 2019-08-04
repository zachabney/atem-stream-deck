import app from '../../app'
import { ImageSize } from 'tile-ui'
import { StreamDeckButton } from 'stream-deck-tile-ui'

export default class LogoButton extends StreamDeckButton {
  onPress() {
    console.log('LOGO PRESSED')
  }

  onRelease() {
    console.log('LOGO RELEASED')
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Logo.png', size)
  }
}
