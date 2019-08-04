import StreamDeckImage from './stream-deck-image'
import { Button } from 'tile-ui'

export default abstract class StreamDeckButton<StateType = {}> extends Button<
  StreamDeckImage,
  StateType
> {}
