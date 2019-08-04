import StreamDeckButton from '../stream-deck/stream-deck-button'
import StreamDeckImage from '../stream-deck/stream-deck-image'
import { ImageSize } from 'tile-ui'
import app from '../../app'
import { RED } from '../colors'

export type NumericButtonListener = (number: number) => void

export default class NumericButton extends StreamDeckButton<{ isPressed: boolean }> {
  readonly number: number

  private onPressListener?: NumericButtonListener
  private onReleaseListener?: NumericButtonListener

  private initialButtonImage!: StreamDeckImage
  private pressedButtonImage!: StreamDeckImage

  constructor(
    number: number,
    onPressListener?: NumericButtonListener,
    onReleaseListener?: NumericButtonListener
  ) {
    super()
    this.number = number
    this.onPressListener = onPressListener
    this.onReleaseListener = onReleaseListener
  }

  getInitialState() {
    return {
      isPressed: false
    }
  }

  async preload(size: ImageSize) {
    const path = `assets/Numeric/${this.number}.png`

    this.initialButtonImage = await app.imageLoader.get(path, size)
    this.pressedButtonImage = await app.imageLoader.get(path, size, RED)
  }

  onPress() {
    this.setState({
      isPressed: true
    })

    if (this.onPressListener) {
      this.onPressListener(this.number)
    }
  }

  onRelease() {
    this.setState({
      isPressed: false
    })

    if (this.onReleaseListener) {
      this.onReleaseListener(this.number)
    }
  }

  render(): StreamDeckImage {
    if (this.state && this.state.isPressed) {
      return this.pressedButtonImage
    }

    return this.initialButtonImage
  }
}
