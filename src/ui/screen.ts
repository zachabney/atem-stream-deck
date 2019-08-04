import Tile from './tile'
import ImageSize from './image/image-size'
import { ScreenRenderer } from './screen-renderer'

export default abstract class Screen {
  abstract getTiles(): Tile[]

  async preload(renderer: ScreenRenderer): Promise<any> {
    const preloadPromises = this.getTiles().map(async tile => {
      const size = renderer.getTileImageSize(tile.index)
      return await tile.button.preload(size)
    })

    await Promise.all(preloadPromises)
  }
}
