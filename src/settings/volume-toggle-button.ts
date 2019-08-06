import ToggleButton from './toggle-button'
import { UIScreen } from 'tile-ui'
import config from '../config'

export default class VolumeToggleButton extends ToggleButton {
  constructor(screen: UIScreen) {
    super(config.volumeEnabled, screen)
  }

  onChange(enabled: boolean) {
    config.volumeEnabled = enabled
  }

  getImagePath(): string {
    return 'assets/Speaker.png'
  }
}
