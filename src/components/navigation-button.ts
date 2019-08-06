import { ImageSize, StaticImageComponent, UIImage, UIScreen, RGBColor } from 'tile-ui'

export default class NavigationButton extends StaticImageComponent {
  private destination: () => UIScreen
  private imagePath: string
  private backgroundColor?: RGBColor

  constructor(
    screen: UIScreen,
    destination: () => UIScreen,
    imagePath: string,
    backgroundColor?: RGBColor
  ) {
    super(screen)
    this.destination = destination
    this.imagePath = imagePath
    this.backgroundColor = backgroundColor
  }

  onPress() {
    const destinationScreen = this.destination()
    this.uiController.setScreen(destinationScreen)
  }

  async getImage(size: ImageSize): Promise<UIImage> {
    return await this.imageLoader.get(this.imagePath, size, this.backgroundColor)
  }
}
