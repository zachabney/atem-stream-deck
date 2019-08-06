import ToggleButton from './toggle-button'
import { UIScreen } from 'tile-ui'
import config from '../config'

export default class BlackToggleButton extends ToggleButton {
  constructor(screen: UIScreen) {
    super(config.blackEnabled, screen)
  }

  onChange(enabled: boolean) {
    config.blackEnabled = enabled
  }

  getImagePath(): string {
    return 'assets/Black.png'
  }
}
