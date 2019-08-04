import Image from './image/image'
import ImageSize from './image/image-size'

export type State<T> = T | undefined

export default abstract class Component<T = {}> {
  private _state: State<T> = this.getInitialState()
  get state(): State<T> {
    return this._state
  }

  getInitialState(): State<T> {
    return undefined
  }

  private _componentShouldUpdate = false
  get componentShouldUpdate() {
    return this._componentShouldUpdate
  }

  onComponentUpdate() {
    this._componentShouldUpdate = false
  }

  async preload(size: ImageSize): Promise<any> {}
  abstract render(size: ImageSize): Promise<Image> | Image

  setState(newState: State<T>) {
    this._state = newState
    this._componentShouldUpdate = true
  }
}
