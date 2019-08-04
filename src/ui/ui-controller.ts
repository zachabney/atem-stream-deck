import Image from './image/image'
import Screen from './screen'
import { ScreenRenderer } from './screen-renderer'
import Tile from './tile'
import ImageSize from './image/image-size'

export default abstract class UIController implements ScreenRenderer {
  currentScreen: Screen | null = null

  private tileImages: Image[] = []

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

  private async updateTile(tile: Tile) {
    // check if the image changes
    const imageSize = this.getTileImageSize(tile.index)
    const newImage = await tile.button.getImage(imageSize)

    if (this.tileImages[tile.index] !== newImage) {
      this.setImage(tile.index, newImage)
    }
  }

  setImage(index: number, image: Image) {
    this.tileImages[index] = image
    this.renderImage(index, image)
  }

  getTile(index: number): Tile | undefined {
    if (!this.currentScreen) {
      return undefined
    }

    const tile = this.currentScreen
      .getTiles()
      .find(tile => tile.index === index)

    return tile
  }

  async setTile(tile: Tile) {
    const controllerSize = this.getControllerSize()
    if (tile.index >= 0 && tile.index < controllerSize) {
      const imageSize = this.getTileImageSize(tile.index)
      const image = await tile.button.getImage(imageSize)
      this.setImage(tile.index, image)
    }
  }

  clearTile(index: number) {
    if (this.tileImages[index]) {
      this.tileImages.splice(index)
    }

    this.clearImage(index)
  }

  async setScreen(screen: Screen) {
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

        await this.setTile(newTile)
      } else if (oldTile) {
        this.clearTile(tileIndex)
      }
    }

    this.currentScreen = screen
  }
}
