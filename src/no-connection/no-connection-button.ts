import { StaticImageComponent, UIScreen } from 'tile-ui'

export default class NoConnectionButton extends StaticImageComponent {
  constructor(screen: UIScreen) {
    super(screen, 'assets/Link Broken.png')
  }
}
