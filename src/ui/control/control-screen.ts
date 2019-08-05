import ComputerButton from './computer-button'
import LogoButton from './logo-button'
import BlackButton from './black-button'
import VolumeButton from './volume-button'
import SettingsButton from './settings-button'
import { Tile, UIScreen } from 'tile-ui'

export default class ControlScreen extends UIScreen {
  private tiles: Tile[] = [
    {
      index: 4,
      component: new VolumeButton(this)
    },
    {
      index: 6,
      component: new BlackButton(this)
    },
    {
      index: 7,
      component: new LogoButton(this)
    },
    {
      index: 8,
      component: new ComputerButton(this)
    },
    {
      index: 14,
      component: new SettingsButton(this)
    }
  ]

  getTiles(): Tile[] {
    return this.tiles
  }
}
