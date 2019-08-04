import sharp from 'sharp'
import path from 'path'
import ImageSize from './image-size'
import RGBColor from './rgb-color'

export const DEFAULT_BG_COLOR: RGBColor = { r: 24, g: 24, b: 24 } // dark gray

export default class Image {
  private static imageCache: { [key: string]: Image } = {}

  public readonly data: Buffer
  public readonly size: ImageSize

  private constructor(data: Buffer, size: ImageSize) {
    this.data = data
    this.size = size
  }

  public static async load(
    assetPath: string,
    size: ImageSize,
    background: RGBColor = DEFAULT_BG_COLOR
  ): Promise<Image> {
    const imageKey = Image.getImageKey(assetPath, background)
    // use cache if its loaded
    if (imageKey in Image.imageCache) {
      return Image.imageCache[imageKey]
    }

    console.log(`LOADING IMAGE ${imageKey}`)

    // load from file system
    const buffer = await sharp(path.resolve(assetPath))
      .flatten({ background }) // remove alpha channel, filling with background color
      .resize(size.width, size.height) // scale up/down to correct size, cropping if needed
      .raw()
      .toBuffer()

    const image = new Image(buffer, size)

    // save to cache
    Image.imageCache[imageKey] = image

    return image
  }

  private static getImageKey(assetPath: string, background: RGBColor) {
    return `${assetPath}:${background.r},${background.g},${background.b}`
  }
}
