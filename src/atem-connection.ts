import { Atem, AtemState } from 'atem-connection'
import config from './config'

export enum AtemInput {
  BLACK = 0,
  CAMERA_1 = 1,
  CAMERA_2 = 2,
  CAMERA_3 = 3,
  CAMERA_4 = 4,
  CAMERA_5 = 5,
  CAMERA_6 = 6,
  CAMERA_7 = 7,
  CAMERA_8 = 8,
  CAMERA_9 = 9,
  COLOR_1 = 2001,
  COLOR_2 = 2002,
  MEDIA_PLAYER_1 = 3010,
  MEDIA_PLAYER_1_KEY = 3011,
  MEDIA_PLAYER_2 = 3020,
  MEDI_PLAYER_2_KEY = 3021
}

export const isAtemInputLive = (input: number, atemState: AtemState = atem.state) => {
  const me = atemState.video.getMe(0)

  if (me.programInput === input) {
    return true
  }
  if (me.inTransition && me.previewInput === input) {
    return true
  }

  return false
}

export const isTransitioning = () => {
  const me = atem.state.video.getMe(0)
  return me.inTransition
}

const atem = new Atem({ externalLog: console.log })
atem.connect(config.atemHost)

export default atem
