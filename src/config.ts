import { config as envConfig } from 'dotenv'
envConfig()

export class Config {
  readonly atemHost: string
  readonly authCode: number[]

  private constructor(atemHost: string, authCode: number[]) {
    this.atemHost = atemHost
    this.authCode = authCode
  }

  static load() {
    console.log('LOADING CONFIG')
    const atemHost = Config.get('ATEM_HOST')
    const authCode = this.getAuthCode()

    return new Config(atemHost, authCode)
  }

  private static getAuthCode(): number[] {
    const codeString: string = Config.get('AUTH_CODE')
    const codeStringArray: string[] = codeString.split('')
    const numericCode = codeStringArray.map(digit => +digit)
    return numericCode
  }

  private static get(name: string): string {
    const value = process.env[name]

    if (!value) {
      console.error(`${name} environment variable was not set`)
      return process.exit(-1)
    }

    return value
  }
}

const config = Config.load()
export default config
