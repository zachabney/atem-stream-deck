import ComputerButton from './computer-button'
import LogoButton from './logo-button'
import BlackButton from './black-button'
import VolumeButton from './volume-button'
import SettingsButton from './settings-button'
import { StreamDeckScreen, StreamDeckTile } from 'stream-deck-tile-ui'

export default class ControlScreen extends StreamDeckScreen {
  private tiles: StreamDeckTile[] = [
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

  getTiles(): StreamDeckTile[] {
    return this.tiles
  }
}
