import { ImageSize } from 'tile-ui'
import app from '../../app'
import { StreamDeckButton } from 'stream-deck-tile-ui'

export default class VolumeButton extends StreamDeckButton {
  private timeout!: NodeJS.Timeout

  onPress() {
    console.log('VOLUME PRESSED')
  }

  onRelease() {
    console.log('VOLUME RELEASED')
  }

  onLoad() {
    this.timeout = setInterval(() => {
      console.log('RUNNING')
    }, 1000)
  }

  onDestroy() {
    console.log('CLEARING TIMEOUT')
    clearInterval(this.timeout)
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Speaker.png', size)
  }
}
