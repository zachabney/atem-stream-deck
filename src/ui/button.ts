import Image from './image/image'
import ImageSize from './image/image-size'

export default abstract class Button {
  onPress() {}
  onRelease() {}
  abstract getImage(size: ImageSize): Promise<Image>
}
