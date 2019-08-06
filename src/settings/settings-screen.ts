import { UIScreen, Tile, StaticColorComponent, UIController, Component } from 'tile-ui'
import { RED } from '../colors'
import VolumeToggleButton from './volume-toggle-button'
import SettingsBackButton from './settings-back-button'
import BlackToggleButton from './black-toggle-button'
import LogoToggleButton from './logo-toggle-button'
import ComputerToggleButton from './computer-toggle-button'

export const BACKGROUND_COLOR = RED

export default class SettingsScreen extends UIScreen {
  private disabledComponent = new StaticColorComponent(BACKGROUND_COLOR, this)

  tiles: Tile[] = []

  constructor(uiController: UIController) {
    super(uiController)

    const controllerSize = this.uiController.getControllerSize()
    for (let tileIndex = 0; tileIndex < controllerSize; tileIndex++) {
      let component: Component
      switch (tileIndex) {
        case 4:
          component = new VolumeToggleButton(this)
          break
        case 6:
          component = new BlackToggleButton(this)
          break
        case 7:
          component = new LogoToggleButton(this)
          break
        case 8:
          component = new ComputerToggleButton(this)
          break
        case 10:
          component = new SettingsBackButton(this)
          break
        default:
          component = this.disabledComponent
      }

      const tile: Tile = {
        index: tileIndex,
        component
      }
      this.tiles.push(tile)
    }
  }
}
