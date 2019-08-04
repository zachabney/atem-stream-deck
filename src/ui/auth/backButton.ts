import app from '../../app'
import ControlScreen from '../control/controlScreen'
import StreamDeckButton from '../stream-deck/stream-deck-button'
import { ImageSize } from 'tile-ui'

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
