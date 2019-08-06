import VolumeControlButton from './volume-control-button'
import { Tile, UIScreen, UIController } from 'tile-ui'
import config from '../config'
import InputButtonComponent from './input-button'
import { AtemInput } from '../atem-connection'
import NavigationButton from '../components/navigation-button'
import AuthScreen from '../auth/auth-screen'

export default class ControlScreen extends UIScreen {
  tiles: Tile[] = [
    {
      index: 14,
      component: new NavigationButton({
        screen: this,
        destination: () => new AuthScreen(this.uiController),
        imagePath: 'assets/Settings.png'
      })
    }
  ]

  constructor(uiController: UIController) {
    super(uiController)

    if (config.volumeEnabled) {
      this.tiles.push({
        index: 4,
        component: new VolumeControlButton(this)
      })
    }

    if (config.blackEnabled) {
      this.tiles.push({
        index: 6,
        component: new InputButtonComponent(this, AtemInput.BLACK, 'assets/Black.png')
      })
    }

    if (config.logoEnabled) {
      this.tiles.push({
        index: 7,
        component: new InputButtonComponent(this, AtemInput.MEDIA_PLAYER_1, 'assets/Logo.png')
      })
    }

    if (config.computerEnabled) {
      this.tiles.push({
        index: 8,
        component: new InputButtonComponent(this, config.computerSource, 'assets/Computer.png')
      })
    }
  }

  getTiles(): Tile[] {
    return this.tiles
  }
}
