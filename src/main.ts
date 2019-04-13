
import { NextContext } from 'next'
import { UAParser } from 'ua-parser-js'

const BOT_UA = [
  '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
  'googlebot',
  'baiduspider',
  'gurujibot',
  'yandexbot',
  'slurp',
  'msnbot',
  'bingbot',
  'facebookexternalhit',
  'linkedinbot',
  'twitterbot',
  'slackbot',
  'telegrambot',
  'applebot',
  'pingdom',
  'tumblr',
]

export interface UserAgent {
  readonly source: string,
  readonly deviceType?: string,
  readonly deviceVendor?: string,
  readonly os: string,
  readonly osVersion: number,
  readonly browser: string,
  readonly browserVersion: number,
  readonly isIphone: boolean,
  readonly isIpad: boolean,
  readonly isMobile: boolean,
  readonly isTablet: boolean,
  readonly isDesktop: boolean,
  readonly isBot: boolean,
  readonly isChrome: boolean,
  readonly isFirefox: boolean,
  readonly isSafari: boolean,
  readonly isIE: boolean,
  readonly isMac: boolean,
  readonly isChromeOS: boolean,
  readonly isWindows: boolean,
  readonly isIos: boolean,
  readonly isAndroid: boolean
}

/**
 * @param ctx - Context passed from getInitialProps method.
 * @returns Parsed useragent object.
 */
function parse(ctx: NextContext): UserAgent {
  let phase: string

  if (typeof ctx.req !== 'undefined') {
    phase = ctx.req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    phase = navigator.userAgent
  }

  const result: IUAParser.IResult = new UAParser(phase).getResult()

  const regex = new RegExp(`(${BOT_UA.join('|')})`, 'ig')

  const browser: string = result.browser.name
  const deviceType: string = result.device.type
  const os: string = result.os.name
  const isMobile: boolean = deviceType === 'mobile'
  const isTablet: boolean = deviceType === 'tablet'
  const isIos: boolean = os === 'iOS'

  const ua: UserAgent = {
    browser,
    deviceType,
    os,
    isMobile,
    isTablet,
    isIos,
    source:         phase,
    deviceVendor:   result.device.vendor,
    osVersion:      parseInt(result.os.version, 10),
    browserVersion: parseFloat(result.browser.version),
    isIphone:       isMobile && isIos,
    isIpad:         isTablet && isIos,
    isDesktop:      !isMobile && !isTablet,
    isChrome:       browser === 'Chrome',
    isFirefox:      browser === 'Firefox',
    isSafari:       browser === 'Safari',
    isIE:           browser === 'IE',
    isMac:          os === 'Mac OS',
    isChromeOS:     os === 'Chromium OS',
    isWindows:      os === 'Windows',
    isAndroid:      os === 'Android',
    isBot:          regex.test(phase.toLowerCase()),
  }

  return ua
}

export { parse }
