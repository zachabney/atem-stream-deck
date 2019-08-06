import { UIScreen, Tile } from 'tile-ui'
import NavigationButton from '../components/navigation-button'
import ActivateScreen from '../activate/activate-screen'
import BackButton from '../components/back-button'
import ControlScreen from '../control/control-screen'

export default class HomeScreen extends UIScreen {
  tiles: Tile[] = [
    {
      index: 7,
      component: new NavigationButton(
        this,
        () => new ActivateScreen(this.uiController),
        'assets/Mixer.png'
      )
    },
    {
      index: 10,
      component: new BackButton(this, () => new ControlScreen(this.uiController))
    }
  ]
}
