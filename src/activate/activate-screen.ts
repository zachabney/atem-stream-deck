import { UIController, Component, ColoredScreen } from 'tile-ui'
import { RED } from '../colors'
import VolumeToggleButton from './volume-toggle-button'
import BlackToggleButton from './black-toggle-button'
import LogoToggleButton from './logo-toggle-button'
import ComputerToggleButton from './computer-toggle-button'
import BackButton from '../components/back-button'
import HomeScreen from '../home/home-screen'
import config from '../config'

export const BACKGROUND_COLOR = RED

export default class ActivateScreen extends ColoredScreen {
  constructor(uiController: UIController) {
    super(uiController, BACKGROUND_COLOR)
  }

  getComponent(tileIndex: number): Component | null {
    switch (tileIndex) {
      case 4:
        return new VolumeToggleButton(this)
      case 6:
        return new BlackToggleButton(this)
      case 7:
        return new LogoToggleButton(this)
      case 8:
        return new ComputerToggleButton(this)
      case 10:
        return new BackButton({
          screen: this,
          destination: () => new HomeScreen(this.uiController),
          backgroundColor: BACKGROUND_COLOR,
          onNavigateListener: () => config.save()
        })
      default:
        return null
    }
  }
}
