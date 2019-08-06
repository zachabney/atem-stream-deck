import { SelectableComponent, UIScreen } from 'tile-ui'
import { SELECTED } from '../colors'
import atem, { AtemInput, isAtemInputLive, isTransitioning } from '../atem-connection'
import { AtemState } from 'atem-connection'

export default class InputButtonComponent extends SelectableComponent {
  protected selectedColor = SELECTED
  private input: AtemInput
  private imagePath: string
  private ignoreStateChanges = false

  constructor(screen: UIScreen, input: AtemInput, imagePath: string) {
    super(screen, { selected: isAtemInputLive(input) })
    this.input = input
    this.imagePath = imagePath
  }

  private atemStateChangeListener = (atemState: AtemState) => {
    if (this.ignoreStateChanges) {
      return
    }

    if (isTransitioning()) {
      return
    }

    const atemInputSelected = isAtemInputLive(this.input, atemState)
    if (atemInputSelected !== this.state.selected) {
      this.setState(() => {
        return {
          selected: atemInputSelected
        }
      })
    }
  }

  onLoad() {
    atem.on('stateChanged', this.atemStateChangeListener)
  }

  onDestroy() {
    atem.removeListener('stateChanged', this.atemStateChangeListener)
  }

  async onPress() {
    if (isTransitioning() || this.state.selected) {
      return
    }

    this.setState(() => {
      return {
        selected: true
      }
    })

    // ignore state changes when changing preview to prevent preview change from deselecting button prematurely
    this.ignoreStateChanges = true
    await atem.changePreviewInput(this.input)
    await atem.autoTransition()
    this.ignoreStateChanges = false
  }

  getImagePath() {
    return this.imagePath
  }
}
