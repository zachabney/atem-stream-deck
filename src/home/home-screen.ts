import { UIScreen, Tile } from 'tile-ui'
import NavigationButton from '../components/navigation-button'
import ActivateScreen from '../activate/activate-screen'
import BackButton from '../components/back-button'
import ControlScreen from '../control/control-screen'
import DestinationMappingScreen from '../mapping/destination-mapping-screen'

export default class HomeScreen extends UIScreen {
  tiles: Tile[] = [
    {
      index: 6,
      component: new NavigationButton({
        screen: this,
        destination: () => new DestinationMappingScreen(this.uiController),
        imagePath: 'assets/Mapping.png'
      })
    },
    {
      index: 7,
      component: new NavigationButton({
        screen: this,
        destination: () => new ActivateScreen(this.uiController),
        imagePath: 'assets/Mixer.png'
      })
    },
    {
      index: 10,
      component: new BackButton({
        screen: this,
        destination: () => new ControlScreen(this.uiController)
      })
    }
  ]
}
