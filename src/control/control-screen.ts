import ComputerControlButton from './computer-control-button'
import LogoControlButton from './logo-control-button'
import BlackControlButton from './black-control-button'
import VolumeControlButton from './volume-control-button'
import SettingsControlButton from './settings-control-button'
import { Tile, UIScreen, UIController } from 'tile-ui'
import config from '../config'

export default class ControlScreen extends UIScreen {
  private tiles: Tile[] = [
    {
      index: 14,
      component: new SettingsControlButton(this)
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
        component: new BlackControlButton(this)
      })
    }

    if (config.logoEnabled) {
      this.tiles.push({
        index: 7,
        component: new LogoControlButton(this)
      })
    }

    if (config.computerEnabled) {
      this.tiles.push({
        index: 8,
        component: new ComputerControlButton(this)
      })
    }
  }

  getTiles(): Tile[] {
    return this.tiles
  }
}
