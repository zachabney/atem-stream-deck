import Screen from '../screen'
import Tile from '../tile'
import BackButton from './backButton'
import NumericButton from './numericButton'

export default class AuthScreen extends Screen {
  private numericCode: number[] = [9, 7, 3, 1]
  private enteredCode: number[] = []

  private handleNumericInput = (number: number) => {
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

  private tiles: Tile[] = [
    {
      index: 10,
      button: new BackButton()
    },
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

  private showBadError() {
    this.clearEnteredCode()
    console.log('BAD')
  }

  private showSuccess() {
    this.clearEnteredCode()
    console.log('GOOD')
  }

  private clearEnteredCode() {
    this.enteredCode = []
  }

  getTiles(): Tile[] {
    return this.tiles
  }
}
