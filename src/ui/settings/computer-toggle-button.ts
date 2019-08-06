import ToggleButton from './toggle-button'
import { UIScreen } from 'tile-ui'
import config from '../../config'

export default class ComputerToggleButton extends ToggleButton {
  constructor(screen: UIScreen) {
    super(config.computerEnabled, screen)
  }

  onChange(enabled: boolean) {
    config.computerEnabled = enabled
  }

  getImagePath(): string {
    return 'assets/Computer.png'
  }
}
