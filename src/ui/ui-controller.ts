import Image from './image/image'
import Screen from './screen'
import { ScreenRenderer } from './screen-renderer'
import Tile from './tile'
import ImageSize from './image/image-size'

export default abstract class UIController implements ScreenRenderer {
  currentScreen: Screen | null = null

  abstract renderImage(index: number, image: Image): any
  abstract clearImage(index: number): any

  abstract getControllerSize(): number
  abstract getTileImageSize(index: number): ImageSize

  async emitButtonPress(index: number) {
    const tile = this.getTile(index)
    if (tile) {
      tile.button.onPress()
      await this.updateTile(tile)
    }
  }

  async emitButtonRelease(index: number) {
    const tile = this.getTile(index)
    if (tile) {
      tile.button.onRelease()
      await this.updateTile(tile)
    }
  }

  async renderTile(tile: Tile) {
    const size = this.getTileImageSize(tile.index)
    const image = await tile.button.render(size)
    this.renderImage(tile.index, image)
  }

  private async updateTile(tile: Tile) {
    if (tile.button.componentShouldUpdate) {
      tile.button.onComponentUpdate()
      this.renderTile(tile)
    }
  }

  getTile(index: number): Tile | undefined {
    if (!this.currentScreen) {
      return undefined
    }

    const tile = this.currentScreen.getTiles().find(tile => tile.index === index)

    return tile
  }

  async setScreen(screen: Screen) {
    await screen.preload(this)

    const newTiles = screen.getTiles()
    const oldTiles = this.currentScreen ? this.currentScreen.getTiles() : []

    const controllerSize = this.getControllerSize()
    for (let tileIndex = 0; tileIndex < controllerSize; tileIndex++) {
      const newTile = newTiles.find(tile => tile.index === tileIndex)
      const oldTile = oldTiles.find(tile => tile.index === tileIndex)

      if (newTile) {
        if (newTile === oldTile) {
          continue
        }

        this.renderTile(newTile)
      } else if (oldTile) {
        this.clearImage(tileIndex)
      }
    }

    this.currentScreen = screen
  }
}
