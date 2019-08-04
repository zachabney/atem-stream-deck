import Component from './component'

export default abstract class Button<T = {}> extends Component<T> {
  onPress() {}
  onRelease() {}
}
