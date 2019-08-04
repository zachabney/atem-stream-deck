import ComputerButton from './computerButton'
import LogoButton from './logoButton'
import Tile from '../tile'
import Screen from '../screen'
import BlackButton from './blackButton'
import VolumeButton from './volumeButton'
import SettingsButton from './settingsButton'

export default class ControlScreen extends Screen {
  private tiles: Tile[] = [
    {
      index: 4,
      button: new VolumeButton()
    },
    {
      index: 6,
      button: new BlackButton()
    },
    {
      index: 7,
      button: new LogoButton()
    },
    {
      index: 8,
      button: new ComputerButton()
    },
    {
      index: 14,
      button: new SettingsButton()
    }
  ]

  getTiles(): Tile[] {
    return this.tiles
  }
}
