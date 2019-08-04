import ComputerButton from './computerButton'
import LogoButton from './logoButton'
import BlackButton from './blackButton'
import VolumeButton from './volumeButton'
import SettingsButton from './settingsButton'
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
