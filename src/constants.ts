
export interface UserAgent {
  // The original user agent string.
  readonly source: string,
  readonly deviceType: string | null,
  readonly deviceVendor: string | null,
  readonly os: string,
  readonly osVersion: number,
  readonly browser: string,
  readonly browserVersion: number,
  readonly engine: string,
  readonly engineVersion: number,
  readonly isIphone: boolean,
  readonly isIpad: boolean,
  readonly isMobile: boolean,
  readonly isTablet: boolean,
  readonly isDesktop: boolean,
  readonly isBot: boolean,
  readonly isChrome: boolean,
  readonly isSamsungBrowser: boolean,
  readonly isFirefox: boolean,
  readonly isSafari: boolean,
  readonly isIE: boolean,
  readonly isEdge: boolean,
  readonly isOpera: boolean,
  readonly isMac: boolean,
  readonly isChromeOS: boolean,
  readonly isWindows: boolean,
  readonly isIos: boolean,
  readonly isAndroid: boolean,
}

export const BOT_UA = [
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
