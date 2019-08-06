import { UIScreen, RGBColor } from 'tile-ui'
import NavigationButton from './navigation-button'

export default class BackButton extends NavigationButton {
  constructor(screen: UIScreen, destination: () => UIScreen, backgroundColor?: RGBColor) {
    super(screen, destination, 'assets/Back Arrow.png', backgroundColor)
  }
}
