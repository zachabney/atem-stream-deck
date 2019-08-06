import { ImageSize, UIScreen, UIImage, Component } from 'tile-ui'
import atem, { AtemInput } from '../atem-connection'
import { AudioMixOption } from 'atem-connection/dist/enums'
import { AtemState } from 'atem-connection'

const isAtemVolumeOn = (atemState: AtemState = atem.state) => {
  return atemState.audio.channels[AtemInput.CAMERA_1].mixOption === AudioMixOption.On
}

export default class VolumeControlButton extends Component<{ isOn: boolean }> {
  private onImage!: UIImage
  private offImage!: UIImage

  constructor(screen: UIScreen) {
    super(screen, {
      isOn: isAtemVolumeOn()
    })
  }

  private atemStateChangeListener = (atemState: AtemState) => {
    const atemOnStatus = isAtemVolumeOn(atemState)
    if (atemOnStatus !== this.state.isOn) {
      this.setState(() => {
        return {
          isOn: atemOnStatus
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
    const newOnState = !this.state.isOn
    const newMixOption: AudioMixOption = newOnState ? AudioMixOption.On : AudioMixOption.Off
    await atem.setAudioMixerInputMixOption(AtemInput.CAMERA_1, newMixOption)

    this.setState(() => {
      return {
        isOn: newOnState
      }
    })
  }

  async preload(size: ImageSize) {
    this.onImage = await this.imageLoader.get('assets/Speaker.png', size)
    this.offImage = await this.imageLoader.get('assets/Speaker Mute.png', size)
  }

  render() {
    if (this.state.isOn) {
      return this.onImage
    }

    return this.offImage
  }
}
