import app from '../../app'
import ControlScreen from '../control/control-screen'
import { ImageSize } from 'tile-ui'
import { StreamDeckButton } from 'stream-deck-tile-ui'

export default class BackButton extends StreamDeckButton {
  onPress() {
    app.uiController.setScreen(new ControlScreen())
  }

  onRelease() {
    console.log('BACK RELEASED')
  }

  async render(size: ImageSize) {
    return await app.imageLoader.get('assets/Back Arrow.png', size)
  }
}
