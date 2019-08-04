import { UIImage, ImageSize } from 'tile-ui'

export default class StreamDeckImage extends UIImage {
  readonly data: Buffer

  constructor(data: Buffer, size: ImageSize) {
    super(size)
    this.data = data
  }
}
