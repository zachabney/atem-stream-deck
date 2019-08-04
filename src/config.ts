import { config as envConfig } from 'dotenv'
envConfig()

export default class Config {
  static atemHost = process.env.ATEM_HOST

  static validate() {
    if (!Config.atemHost) {
      console.error('ATEM_HOST was not set')
      process.exit(-1)
    }
  }
}
