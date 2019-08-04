import Button from '../button'
import Image, { DEFAULT_BG_COLOR } from '../image/image'
import RGBColor, { RED } from '../image/rgb-color'
import ImageSize from '../image/image-size'

export default class NumericButton extends Button {
  readonly number: number
  readonly initialBackgroundColor: RGBColor = DEFAULT_BG_COLOR

  backgroundColor: RGBColor = this.initialBackgroundColor

  constructor(number: number) {
    super()
    this.number = number
  }

  onPress() {
    console.log(`NUMBER ${this.number} PRESSED`)
    this.backgroundColor = RED
  }

  onRelease() {
    console.log(`NUMBER ${this.number} RELEASED`)
    this.backgroundColor = this.initialBackgroundColor
  }

  async getImage(size: ImageSize): Promise<Image> {
    return await Image.load(
      `assets/Numeric/${this.number}.png`,
      size,
      this.backgroundColor
    )
  }
}
