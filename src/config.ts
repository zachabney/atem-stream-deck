import fs from 'fs'
import path from 'path'

const CONFIG_FILE = path.resolve('config.json')

export class Config {
  atemHost: string
  authCode: string
  volumeEnabled: boolean
  blackEnabled: boolean
  logoEnabled: boolean
  computerEnabled: boolean

  constructor({
    atemHost = '10.10.20.2',
    authCode = '1234',
    volumeEnabled = true,
    blackEnabled = true,
    logoEnabled = true,
    computerEnabled = true
  }: {
    atemHost?: string
    authCode?: string
    volumeEnabled?: boolean
    blackEnabled?: boolean
    logoEnabled?: boolean
    computerEnabled?: boolean
  } = {}) {
    this.atemHost = atemHost
    this.authCode = authCode
    this.volumeEnabled = volumeEnabled
    this.blackEnabled = blackEnabled
    this.logoEnabled = logoEnabled
    this.computerEnabled = computerEnabled
  }

  async save() {
    const json = JSON.stringify(this, null, 4)
    await new Promise<void>(resolve => {
      fs.writeFile(CONFIG_FILE, json, err => {
        if (err) {
          console.error('An error occurred while trying to save the config file', err)
        }

        resolve()
      })
    })
  }

  static load(): Config {
    try {
      const data = fs.readFileSync(CONFIG_FILE)
      const values = JSON.parse(data.toString())
      return new Config(values)
    } catch (err) {
      const defaultConfig = new Config()
      if (err.code === 'ENOENT') {
        defaultConfig.save()
      } else {
        console.error('An error occurred while reading the config file', err)
      }

      return defaultConfig
    }
  }
}

const config = Config.load()
export default config
