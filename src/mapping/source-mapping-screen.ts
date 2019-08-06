import { StaticImageComponent, ColoredScreen, UIController, Component } from 'tile-ui'
import { RED } from '../colors'
import DestinationMappingScreen from './destination-mapping-screen'
import BackButton from '../components/back-button'
import SourceButton, { IsSelected } from './source-button'
import { AtemInput } from '../atem-connection'
import config from '../config'

export type OnSourceSelect = (source: AtemInput) => void

const BACKGROUND_COLOR = RED

export default class SourceMappingScreen extends ColoredScreen {
  private sources: { [tileIndex: number]: SourceButton }
  private onSourceSelect: OnSourceSelect

  constructor({
    uiController,
    onSourceSelect,
    isSelected
  }: {
    uiController: UIController
    onSourceSelect: OnSourceSelect
    isSelected: IsSelected
  }) {
    super(uiController, BACKGROUND_COLOR)
    this.onSourceSelect = onSourceSelect

    this.sources = {
      2: new SourceButton(this, AtemInput.CAMERA_1, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      3: new SourceButton(this, AtemInput.CAMERA_2, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      4: new SourceButton(this, AtemInput.CAMERA_3, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      7: new SourceButton(this, AtemInput.CAMERA_4, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      8: new SourceButton(this, AtemInput.CAMERA_5, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      9: new SourceButton(this, AtemInput.CAMERA_6, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      12: new SourceButton(this, AtemInput.CAMERA_7, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      13: new SourceButton(this, AtemInput.CAMERA_8, isSelected, button =>
        this.handleSourceSelect(button)
      ),
      14: new SourceButton(this, AtemInput.CAMERA_9, isSelected, button =>
        this.handleSourceSelect(button)
      )
    }
  }

  private handleSourceSelect(button: SourceButton) {
    const source = button.source
    this.onSourceSelect(source)
    this.updateButtons()
  }

  private updateButtons() {
    for (let button of Object.values(this.sources)) {
      button.updateSelectedState()
    }
  }

  getComponent(tileIndex: number): Component | null {
    switch (tileIndex) {
      case 0:
        return new StaticImageComponent(this, 'assets/Computer.png', BACKGROUND_COLOR)
      case 10:
        return new BackButton({
          screen: this,
          destination: () => new DestinationMappingScreen(this.uiController),
          backgroundColor: BACKGROUND_COLOR,
          onNavigateListener: () => config.save()
        })
      default:
        if (!(tileIndex in this.sources)) {
          return null
        }

        return this.sources[tileIndex]
    }
  }
}
