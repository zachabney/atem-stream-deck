import { ImageSize, RGBColor } from 'tile-ui'
import app from '../../app'
import { StreamDeckButton } from 'stream-deck-tile-ui'

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
