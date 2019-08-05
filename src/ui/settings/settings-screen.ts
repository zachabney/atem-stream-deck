import { UIScreen, Tile, StaticColorComponent, UIController, Component } from 'tile-ui'
import { RED } from '../colors'
import SpeakerButton from './speaker-button'
import BackButton from './back-button'

export const BACKGROUND_COLOR = RED

export default class SettingsScreen extends UIScreen {
  private disabledComponent = new StaticColorComponent(BACKGROUND_COLOR, this)

  private tiles: Tile[] = []

  constructor(uiController: UIController) {
    super(uiController)

    const controllerSize = this.uiController.getControllerSize()
    for (let tileIndex = 0; tileIndex < controllerSize; tileIndex++) {
      let component: Component
      switch (tileIndex) {
        case 4:
          component = new SpeakerButton(this)
          break
        case 10:
          component = new BackButton(this)
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

  getTiles(): Tile[] {
    return this.tiles
  }
}
