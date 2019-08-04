import StreamDeckImage from './stream-deck-image'
import { CachedImageLoader, RGBColor, ImageSize } from 'tile-ui'
import sharp from 'sharp'
import path from 'path'
import { DARK_GRAY } from '../colors'

export const DEFAULT_BG_COLOR = DARK_GRAY

export default class StreamDeckImageLoader extends CachedImageLoader<StreamDeckImage> {
  get(assetPath: string, size: ImageSize, background: RGBColor = DEFAULT_BG_COLOR) {
    return super.get(assetPath, size, background)
  }

  protected async load(
    assetPath: string,
    size: ImageSize,
    background: RGBColor
  ): Promise<StreamDeckImage> {
    const buffer = await sharp(path.resolve(assetPath))
      .flatten({ background }) // remove alpha channel, filling with background color
      .resize(size.width, size.height) // scale up/down to correct size, cropping if needed
      .raw()
      .toBuffer()

    return new StreamDeckImage(buffer, size)
  }
}
