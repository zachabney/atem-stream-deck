import BackButton from './back-button'
import NumericButton from './numeric-button'
import { StreamDeckScreen, StreamDeckTile } from 'stream-deck-tile-ui'
import config from '../../config'

type NumericTile = StreamDeckTile & { button: NumericButton }

export default class AuthScreen extends StreamDeckScreen {
  private numericCode: number[] = config.authCode
  private enteredCode: number[] = []

  private handleNumericInput = (button: NumericButton) => {
    const number = button.number
    this.enteredCode.push(number)

    if (this.enteredCode.length === this.numericCode.length) {
      for (let digitIndex = 0; digitIndex < this.enteredCode.length; digitIndex++) {
        if (this.numericCode[digitIndex] !== this.enteredCode[digitIndex]) {
          this.showBadError()
          return
        }
      }

      this.showSuccess()
    }
  }

  private numericTiles: NumericTile[] = [
    {
      index: 2,
      button: new NumericButton(1, this.handleNumericInput)
    },
    {
      index: 3,
      button: new NumericButton(2, this.handleNumericInput)
    },
    {
      index: 4,
      button: new NumericButton(3, this.handleNumericInput)
    },
    {
      index: 7,
      button: new NumericButton(4, this.handleNumericInput)
    },
    {
      index: 8,
      button: new NumericButton(5, this.handleNumericInput)
    },
    {
      index: 9,
      button: new NumericButton(6, this.handleNumericInput)
    },
    {
      index: 11,
      button: new NumericButton(0, this.handleNumericInput)
    },
    {
      index: 12,
      button: new NumericButton(7, this.handleNumericInput)
    },
    {
      index: 13,
      button: new NumericButton(8, this.handleNumericInput)
    },
    {
      index: 14,
      button: new NumericButton(9, this.handleNumericInput)
    }
  ]

  private tiles: StreamDeckTile[] = [
    {
      index: 10,
      button: new BackButton()
    },
    ...this.numericTiles
  ]

  private showBadError() {
    this.clearEnteredCode()
    this.numericTiles.forEach(numericTile => numericTile.button.showError(1000))
  }

  private showSuccess() {
    this.clearEnteredCode()
  }

  private clearEnteredCode() {
    this.enteredCode = []
  }

  getTiles(): StreamDeckTile[] {
    return this.tiles
  }
}
