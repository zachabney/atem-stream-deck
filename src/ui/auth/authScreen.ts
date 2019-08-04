import Screen from '../screen'
import Tile from '../tile'
import BackButton from './backButton'
import NumericButton from './numericButton'

export default class AuthScreen extends Screen {
  private tiles: Tile[] = [
    {
      index: 10,
      button: new BackButton()
    },
    {
      index: 2,
      button: new NumericButton(1)
    },
    {
      index: 3,
      button: new NumericButton(2)
    },
    {
      index: 4,
      button: new NumericButton(3)
    },
    {
      index: 7,
      button: new NumericButton(4)
    },
    {
      index: 8,
      button: new NumericButton(5)
    },
    {
      index: 9,
      button: new NumericButton(6)
    },
    {
      index: 12,
      button: new NumericButton(7)
    },
    {
      index: 13,
      button: new NumericButton(8)
    },
    {
      index: 14,
      button: new NumericButton(9)
    }
  ]

  getTiles(): Tile[] {
    return this.tiles
  }
}
