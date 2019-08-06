import { UIScreen, Tile } from 'tile-ui'
import NoConnectionButton from './no-connection-button'

export default class NoConnectionScreen extends UIScreen {
  tiles: Tile[] = [
    {
      index: 7,
      component: new NoConnectionButton(this)
    }
  ]
}
