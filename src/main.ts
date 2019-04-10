
import { NextContext } from 'next'
import { UAParser } from 'ua-parser-js'

export interface UserAgentType {
  source: string,
  deviceType: string,
  deviceVendor: string,
  os: string,
  osVersion: string,
  browser: string,
  browserVersion: string,
  isIphone: boolean,
  isIpad: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  isBot: boolean,
  isChrome: boolean,
  isFirefox: boolean,
  isSafari: boolean,
  isIE: boolean,
  isMac: boolean,
  isChromeOS: boolean,
  isWindows: boolean,
  isIos: boolean,
  isAndroid: boolean
}

class UserAgent implements UserAgentType {

  public source: string

  public deviceType: string

  public deviceVendor: string

  public os: string

  public osVersion: string

  public browser: string

  public browserVersion: string

  public isIphone: boolean

  public isIpad: boolean

  public isMobile: boolean

  public isTablet: boolean

  public isDesktop: boolean

  public isBot: boolean

  public isChrome: boolean

  public isFirefox: boolean

  public isSafari: boolean

  public isIE: boolean

  public isMac: boolean

  public isChromeOS: boolean

  public isWindows: boolean

  public isIos: boolean

  public isAndroid: boolean

  constructor(ua: string) {
    const result: IUAParser.IResult = new UAParser(ua).getResult()

    this.source = ua

    this.deviceType     = result.device.type
    this.deviceVendor   = result.device.vendor
    this.os             = result.os.name
    this.osVersion      = result.os.version
    this.browser        = result.browser.name
    this.browserVersion = result.browser.version

    this.isIphone   = this.deviceType === 'iPhone'
    this.isIpad     = this.deviceType === 'iPad'
    this.isMobile   = this.deviceType === 'mobile'
    this.isTablet   = this.deviceType === 'tablet'
    this.isDesktop  = !this.isTablet && !this.isMobile
    this.isBot      = this.deviceType === 'Spider'

    this.isChrome   = this.browser === 'Chrome'
    this.isFirefox  = this.browser === 'Firefox'
    this.isSafari   = this.browser === 'Safari'
    this.isIE       = this.browser === 'IE'

    this.isMac      = this.os === 'Mac OS X'
    this.isChromeOS = this.os === 'Chromium OS'
    this.isWindows  = this.os === 'Windows'
    this.isIos      = this.os === 'iOS'
    this.isAndroid  = this.os === 'Android'
  }
}

/**
 * @param ctx - Context passed from getInitialProps method.
 * @returns The UserAgent instance.
 */
function parse(ctx: NextContext): UserAgentType {
  let userAgentPhase: string

  if (typeof ctx.req !== 'undefined') {
    userAgentPhase = ctx.req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    userAgentPhase = navigator.userAgent
  }

  return new UserAgent(userAgentPhase)
}

export { UserAgent, parse }
