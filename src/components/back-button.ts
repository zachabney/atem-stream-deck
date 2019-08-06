import { UIScreen, RGBColor } from 'tile-ui'
import NavigationButton, { OnNavigateListener } from './navigation-button'

export default class BackButton extends NavigationButton {
  constructor({
    screen,
    destination,
    backgroundColor,
    onNavigateListener
  }: {
    screen: UIScreen
    destination: () => UIScreen
    backgroundColor?: RGBColor
    onNavigateListener?: OnNavigateListener
  }) {
    super({
      screen,
      destination,
      imagePath: 'assets/Back Arrow.png',
      backgroundColor,
      onNavigateListener
    })
  }
}
