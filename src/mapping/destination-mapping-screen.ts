import { UIScreen, Tile } from 'tile-ui'
import BackButton from '../components/back-button'
import HomeScreen from '../home/home-screen'
import NavigationButton from '../components/navigation-button'
import SourceMappingScreen from './source-mapping-screen'
import config from '../config'

export default class DestinationMappingScreen extends UIScreen {
  tiles: Tile[] = [
    {
      index: 8,
      component: new NavigationButton({
        screen: this,
        destination: () =>
          new SourceMappingScreen({
            uiController: this.uiController,
            onSourceSelect: source => (config.computerSource = source),
            isSelected: source => config.computerSource === source
          }),
        imagePath: 'assets/Computer.png'
      })
    },
    {
      index: 10,
      component: new BackButton({
        screen: this,
        destination: () => new HomeScreen(this.uiController)
      })
    }
  ]
}
