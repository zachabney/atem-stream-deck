import { FSImageLoader, RGBColor, ImageSize } from 'tile-ui'

const BLACK = { r: 0, g: 0, b: 0 }

export default class FlattenedImageLoader extends FSImageLoader {
  private defaultBackgroundColor: RGBColor

  constructor(defaultBackgroundColor: RGBColor) {
    super()
    this.defaultBackgroundColor = defaultBackgroundColor
  }

  get(assetPath: string, size: ImageSize, background: RGBColor = this.defaultBackgroundColor) {
    return super.get(assetPath, size, background)
  }
}
