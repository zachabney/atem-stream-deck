import { Component, UIImage, ImageSize, UIScreen } from 'tile-ui'
import { RED, GREEN } from '../colors'

export default abstract class ToggleButton extends Component<{ enabled: boolean }> {
  private disabledImage!: UIImage
  private enabledImage!: UIImage

  constructor(initiallyEnabled: boolean, screen: UIScreen) {
    super(screen, { enabled: initiallyEnabled })
  }

  onPress() {
    this.setState(prevState => {
      const newEnabledState = !prevState.enabled
      this.onChange(newEnabledState)
      return {
        enabled: newEnabledState
      }
    })
  }

  onChange(enabled: boolean) {}
  abstract getImagePath(): string

  isEnabled() {
    return this.state.enabled
  }

  async preload(size: ImageSize) {
    const path = this.getImagePath()
    this.disabledImage = await this.imageLoader.get(path, size, RED)
    this.enabledImage = await this.imageLoader.get(path, size, GREEN)
  }

  render(): UIImage {
    if (this.state.enabled) {
      return this.enabledImage
    }

    return this.disabledImage
  }
}
