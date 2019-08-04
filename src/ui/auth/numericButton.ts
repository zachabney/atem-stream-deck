import Button from '../button'
import Image from '../image/image'
import { RED } from '../image/rgb-color'
import ImageSize from '../image/image-size'

export type NumericButtonListener = (number: number) => void

export default class NumericButton extends Button<{ isPressed: boolean }> {
  readonly number: number

  private onPressListener?: NumericButtonListener
  private onReleaseListener?: NumericButtonListener

  private initialButtonImage!: Image
  private pressedButtonImage!: Image

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

    this.initialButtonImage = await Image.load(path, size)
    this.pressedButtonImage = await Image.load(path, size, RED)
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

  render(): Image {
    if (this.state && this.state.isPressed) {
      return this.pressedButtonImage
    }

    return this.initialButtonImage
  }
}
