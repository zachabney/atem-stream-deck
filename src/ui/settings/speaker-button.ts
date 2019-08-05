import { UIImage, ImageSize, StaticImageComponent } from 'tile-ui'
import { BACKGROUND_COLOR } from './settings-screen'

export default class SpeakerButton extends StaticImageComponent {
  async getImage(size: ImageSize): Promise<UIImage> {
    return await this.imageLoader.get(`assets/Speaker.png`, size, BACKGROUND_COLOR)
  }
}
