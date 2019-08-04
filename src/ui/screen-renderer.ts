import Image from './image/image'
import ImageSize from './image/image-size';

export interface ScreenRenderer {
  renderImage(index: number, image: Image): any
  clearImage(index: number): any
  getTileImageSize(index: number): ImageSize
}
