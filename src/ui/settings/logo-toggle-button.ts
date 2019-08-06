import ToggleButton from './toggle-button'
import { UIScreen } from 'tile-ui'
import config from '../../config'

export default class LogoToggleButton extends ToggleButton {
  constructor(screen: UIScreen) {
    super(config.logoEnabled, screen)
  }

  onChange(enabled: boolean) {
    config.logoEnabled = enabled
  }

  getImagePath(): string {
    return 'assets/Logo.png'
  }
}
