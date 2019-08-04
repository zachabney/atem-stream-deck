import Tile from './tile'

export default abstract class Screen {
  abstract getTiles(): Tile[]
}
