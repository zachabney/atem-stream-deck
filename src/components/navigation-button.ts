import { StaticImageComponent, UIScreen, RGBColor } from 'tile-ui'

export type OnNavigateListener = () => void

export default class NavigationButton extends StaticImageComponent {
  private destination: () => UIScreen
  private onNavigateListener?: OnNavigateListener

  constructor({
    screen,
    destination,
    imagePath,
    backgroundColor,
    onNavigateListener
  }: {
    screen: UIScreen
    destination: () => UIScreen
    imagePath: string
    backgroundColor?: RGBColor
    onNavigateListener?: OnNavigateListener
  }) {
    super(screen, imagePath, backgroundColor)
    this.destination = destination
    this.onNavigateListener = onNavigateListener
  }

  onPress() {
    const destinationScreen = this.destination()
    if (this.onNavigateListener) {
      this.onNavigateListener()
    }

    this.uiController.setScreen(destinationScreen)
  }
}
