import AuthBackButton from './auth-back-button'
import NumericButton from './numeric-button'
import config from '../config'
import { Tile, UIScreen } from 'tile-ui'
import SettingsScreen from '../settings/settings-screen'

type NumericTile = Tile & { component: NumericButton }

export default class AuthScreen extends UIScreen {
  private numericCode: number[] = AuthScreen.getAuthCode()
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

      this.handleSuccess()
    }
  }

  private numericTiles: NumericTile[] = [
    {
      index: 2,
      component: new NumericButton(this, 1, this.handleNumericInput)
    },
    {
      index: 3,
      component: new NumericButton(this, 2, this.handleNumericInput)
    },
    {
      index: 4,
      component: new NumericButton(this, 3, this.handleNumericInput)
    },
    {
      index: 7,
      component: new NumericButton(this, 4, this.handleNumericInput)
    },
    {
      index: 8,
      component: new NumericButton(this, 5, this.handleNumericInput)
    },
    {
      index: 9,
      component: new NumericButton(this, 6, this.handleNumericInput)
    },
    {
      index: 11,
      component: new NumericButton(this, 0, this.handleNumericInput)
    },
    {
      index: 12,
      component: new NumericButton(this, 7, this.handleNumericInput)
    },
    {
      index: 13,
      component: new NumericButton(this, 8, this.handleNumericInput)
    },
    {
      index: 14,
      component: new NumericButton(this, 9, this.handleNumericInput)
    }
  ]

  tiles: Tile[] = [
    {
      index: 10,
      component: new AuthBackButton(this)
    },
    ...this.numericTiles
  ]

  private showBadError() {
    this.clearEnteredCode()
    this.numericTiles.forEach(numericTile => numericTile.component.showError(1000))
  }

  private handleSuccess() {
    this.uiController.setScreen(new SettingsScreen(this.uiController))
  }

  private clearEnteredCode() {
    this.enteredCode = []
  }

  getTiles(): Tile[] {
    return this.tiles
  }

  private static getAuthCode(): number[] {
    const codeString: string = config.authCode
    const codeStringArray: string[] = codeString.split('')
    const numericAuthCode = codeStringArray.map(digit => +digit)
    return numericAuthCode
  }
}
