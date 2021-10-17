import { UAParser } from 'ua-parser-js';
import { BOT_UA } from './constants';

/**
 * Get the information of an useragent string.
 *
 * @param phrase user agent strings.
 * @returns parsed information.
 */
export function parse(phrase: string): UserAgent {
  const result: UAParser.IResult = new UAParser(phrase).getResult();

  const regex = new RegExp(`(${BOT_UA.join('|')})`, 'ig');
  const isBot = phrase ? regex.test(phrase.toLowerCase()) : false;

  const browser: string = result.browser.name || '';
  const deviceType: string = result.device.type || '';
  const os: string = result.os.name || '';
  const engine: string = result.engine.name || '';
  const isMobile: boolean = deviceType === 'mobile';
  const isTablet: boolean = deviceType === 'tablet';
  const isIos: boolean = os === 'iOS';

  const ua: UserAgent = Object.freeze({
    browser,
    deviceType,
    os,
    engine,
    isMobile,
    isTablet,
    isIos,
    source:         phrase,
    deviceVendor:   result.device.vendor || null,
    osVersion:      result.os.version ? parseInt(result.os.version, 10) : null,
    browserVersion: result.browser.version ? parseFloat(result.browser.version) : null,
    engineVersion:  result.engine.version ? parseFloat(result.engine.version) : null,
    isIphone:       isMobile && isIos,
    isIpad:         isTablet && isIos,
    isDesktop:      !isMobile && !isTablet,
    isChrome:       browser === 'Chrome',
    isFirefox:      browser === 'Firefox',
    isSafari:       browser === 'Safari',
    isIE:           browser === 'IE',
    isEdge:         browser === 'Edge',
    isOpera:        browser === 'Opera',
    isMac:          os === 'Mac OS',
    isChromeOS:     os === 'Chromium OS',
    isWindows:      os === 'Windows',
    isAndroid:      os === 'Android',
    isBot:          isBot,
  });

  return ua;
}
