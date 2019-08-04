import { StreamDeck } from 'elgato-stream-deck'
import Image from '../ui/image/image'
import UIController from '../ui/ui-controller'
import ImageSize from '../ui/image/image-size'

export class StreamDeckUIController extends UIController {
  private streamDeck: StreamDeck

  constructor(streamDeck: StreamDeck) {
    super()
    this.streamDeck = streamDeck

    this.streamDeck.clearAllKeys()

    this.streamDeck.on('down', keyIndex => {
      this.emitButtonPress(keyIndex)
    })
    this.streamDeck.on('up', keyIndex => {
      this.emitButtonRelease(keyIndex)
    })
    this.streamDeck.on('error', error => {
      console.error(error)
    })
  }

  renderImage(index: number, image: Image) {
    this.streamDeck.fillImage(index, image.data)
  }

  clearImage(index: number) {
    this.streamDeck.clearKey(index)
  }

  getControllerSize() {
    return this.streamDeck.NUM_KEYS
  }

  getTileImageSize(index: number): ImageSize {
    return {
      width: this.streamDeck.ICON_SIZE,
      height: this.streamDeck.ICON_SIZE
    }
  }
}
