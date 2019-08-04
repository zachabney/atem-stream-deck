import { ImageSize, Button } from 'tile-ui'
import app from '../../app'
import { RED, BLUE } from '../colors'
import { StreamDeckButton, StreamDeckImage } from 'stream-deck-tile-ui'

export type NumericButtonListener = (button: NumericButton) => void

type ButtonState = {
  isPressed: boolean
  hasError: boolean
}

export default class NumericButton extends StreamDeckButton<ButtonState> {
  readonly number: number

  private onPressListener?: NumericButtonListener
  private onReleaseListener?: NumericButtonListener

  private initialButtonImage!: StreamDeckImage
  private pressedButtonImage!: StreamDeckImage
  private errorButtonImage!: StreamDeckImage

  private errorTimeout?: NodeJS.Timeout

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
      isPressed: false,
      hasError: false
    }
  }

  async preload(size: ImageSize) {
    const path = `assets/Numeric/${this.number}.png`

    this.initialButtonImage = await app.imageLoader.get(path, size)
    this.pressedButtonImage = await app.imageLoader.get(path, size, BLUE)
    this.errorButtonImage = await app.imageLoader.get(path, size, RED)
  }

  private isDisabled() {
    return this.state.hasError
  }

  onPress() {
    if (this.isDisabled()) {
      return
    }

    this.setState(prevState => {
      return {
        ...prevState,
        isPressed: true
      }
    })

    if (this.onPressListener) {
      this.onPressListener(this)
    }
  }

  onRelease() {
    this.setState(prevState => {
      return {
        ...prevState,
        isPressed: false
      }
    })

    if (!this.isDisabled() && this.onReleaseListener) {
      this.onReleaseListener(this)
    }
  }

  showError(duration: number) {
    if (this.state && !this.state.hasError) {
      this.setState(prevState => {
        return {
          ...prevState,
          hasError: true
        }
      })
    }

    this.cancelErrorTimeout()
    this.errorTimeout = setTimeout(() => {
      this.errorTimeout = undefined

      this.setState(prevState => {
        return {
          ...prevState,
          hasError: false
        }
      })
    }, duration)
  }

  onDestroy() {
    this.cancelErrorTimeout()
  }

  cancelErrorTimeout() {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout)
      this.errorTimeout = undefined
    }
  }

  render(): StreamDeckImage {
    if (this.state.isPressed) {
      return this.pressedButtonImage
    }

    if (this.state.hasError) {
      return this.errorButtonImage
    }

    return this.initialButtonImage
  }
}
