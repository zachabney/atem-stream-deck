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

    this.streamDeck.on('down', this.onDown)
    this.streamDeck.on('up', this.onUp)
    this.streamDeck.on('error', this.onError)
  }

  private onDown(keyIndex: number) {
    this.emitButtonPress(keyIndex)
  }

  private onUp(keyIndex: number) {
    this.emitButtonRelease(keyIndex)
  }

  private onError(error: any) {
    console.error('An error occurred with the Stream Deck', error)
  }

  renderImage(index: number, image: Image) {
    console.log(`RENDERING IMAGE AT INDEX ${index}`)
    this.streamDeck.fillImage(index, image.data)
  }

  clearImage(index: number) {
    console.log(`CLEARING IMAGE AT INDEX ${index}`)
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
