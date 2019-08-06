import { SelectableComponent, RGBColor, UIScreen } from 'tile-ui'
import { AtemInput } from '../atem-connection'
import { BLUE, RED } from '../colors'

export type SourceButtonListener = (button: SourceButton) => void
export type IsSelected = (source: AtemInput) => boolean

export default class SourceButton extends SelectableComponent {
  protected unselectedColor = RED
  protected selectedColor = BLUE
  readonly source: AtemInput
  private isSelected: IsSelected

  private onPressListener?: SourceButtonListener
  private onReleaseListener?: SourceButtonListener

  constructor(
    screen: UIScreen,
    source: AtemInput,
    isSelected: IsSelected,
    onPressListener?: SourceButtonListener,
    onReleaseListener?: SourceButtonListener
  ) {
    super(screen, { selected: isSelected(source) })
    this.source = source
    this.isSelected = isSelected
    this.onPressListener = onPressListener
    this.onReleaseListener = onReleaseListener
  }

  onPress() {
    if (this.onPressListener) {
      this.onPressListener(this)
    }
  }

  onRelease() {
    if (this.onReleaseListener) {
      this.onReleaseListener(this)
    }
  }

  updateSelectedState() {
    const isSelected = this.isSelected(this.source)
    if (isSelected !== this.state.selected) {
      this.setState(() => {
        return {
          selected: isSelected
        }
      })
    }
  }

  protected getImagePath(): string {
    return `assets/Numeric/${this.source}.png`
  }
}
