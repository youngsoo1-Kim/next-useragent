import { parse } from '../src/helpers';

const desktop = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246';
const ios8 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4';
const android = 'Mozilla/5.0 (Linux; Android 6.0.1; SM-J700M Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36';
const mac_chrome = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3763.0 Safari/537.36';
const bot = 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const windows_edge = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54';
const windows_opera = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36 OPR/77.0.4054.90';

describe('helpers.ts', () => {
  it('correctly parses desktop', () => {
    const ua = parse(desktop);

    expect(ua.browser).toEqual('Edge');
    expect(ua.deviceType).toBeNull;
    expect(ua.os).toEqual('Windows')
    expect(ua.isMobile).toBeFalsy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(desktop)
    expect(ua.deviceVendor).toBeNull;
    expect(ua.osVersion).toEqual(10)
    expect(ua.browserVersion).toEqual(12.246)
    expect(ua.isIphone).toBeFalsy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeTruthy;
    expect(ua.isChrome).toBeFalsy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeTruthy;
    expect(ua.isOpera).toBeFalsy;
    expect(ua.isMac).toBeFalsy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeTruthy;
    expect(ua.isIos).toBeFalsy;
    expect(ua.isAndroid).toBeFalsy;
    expect(ua.isBot).toBeFalsy;
  });

  it('correctly parses Edge', () => {
    const ua = parse(windows_edge)

    expect(ua.browser).toEqual('Edge')
    expect(ua.deviceType).toBeNull;
    expect(ua.os).toEqual('Windows')
    expect(ua.isMobile).toBeFalsy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(windows_edge)
    expect(ua.deviceVendor).toBeNull;
    expect(ua.osVersion).toEqual(10)
    expect(ua.browserVersion).toEqual(91.0)
    expect(ua.isIphone).toBeFalsy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeTruthy;
    expect(ua.isChrome).toBeFalsy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeTruthy;
    expect(ua.isOpera).toBeFalsy;
    expect(ua.isMac).toBeFalsy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeTruthy;
    expect(ua.isIos).toBeFalsy;
    expect(ua.isAndroid).toBeFalsy;
    expect(ua.isBot).toBeFalsy;
  });

  it('correctly parses Opera', () => {
    const ua = parse(windows_opera)

    expect(ua.browser).toEqual('Opera')
    expect(ua.deviceType).toBeNull;
    expect(ua.os).toEqual('Windows')
    expect(ua.isMobile).toBeFalsy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(windows_opera)
    expect(ua.deviceVendor).toBeNull;
    expect(ua.osVersion).toEqual(10)
    expect(ua.browserVersion).toEqual(77.0)
    expect(ua.isIphone).toBeFalsy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeTruthy;
    expect(ua.isChrome).toBeFalsy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeFalsy;
    expect(ua.isOpera).toBeTruthy;
    expect(ua.isMac).toBeFalsy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeTruthy;
    expect(ua.isIos).toBeFalsy;
    expect(ua.isAndroid).toBeFalsy;
    expect(ua.isBot).toBeFalsy;
  });

  it('correctly parses iOS8 (iPhone)', () => {
    const ua = parse(ios8)

    expect(ua.browser).toEqual('Mobile Safari')
    expect(ua.deviceType).toEqual('mobile')
    expect(ua.os).toEqual('iOS')
    expect(ua.isMobile).toBeTruthy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(ios8)
    expect(ua.deviceVendor).toEqual('Apple')
    expect(ua.osVersion).toEqual(8)
    expect(ua.browserVersion).toEqual(8)
    expect(ua.isIphone).toBeTruthy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeFalsy;
    expect(ua.isChrome).toBeFalsy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeFalsy;
    expect(ua.isOpera).toBeFalsy;
    expect(ua.isMac).toBeFalsy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeFalsy;
    expect(ua.isIos).toBeTruthy;
    expect(ua.isAndroid).toBeFalsy;
    expect(ua.isBot).toBeFalsy;
  });

  it('correctly parses Android', () => {
    const ua = parse(android)

    expect(ua.browser).toEqual('Chrome')
    expect(ua.deviceType).toEqual('mobile')
    expect(ua.os).toEqual('Android')
    expect(ua.isMobile).toBeTruthy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(android)
    expect(ua.deviceVendor).toEqual('Samsung')
    expect(ua.osVersion).toEqual(6)
    expect(ua.browserVersion).toEqual(69)
    expect(ua.isIphone).toBeFalsy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeFalsy;
    expect(ua.isChrome).toBeTruthy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeFalsy;
    expect(ua.isOpera).toBeFalsy;
    expect(ua.isMac).toBeFalsy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeFalsy;
    expect(ua.isIos).toBeFalsy;
    expect(ua.isAndroid).toBeTruthy;
    expect(ua.isBot).toBeFalsy;
  });

  it('correctly parses Mac OSX (Chrome)', () => {
    const ua = parse(mac_chrome)

    expect(ua.browser).toEqual('Chrome')
    expect(ua.deviceType).toBeNull;
    expect(ua.os).toEqual('Mac OS')
    expect(ua.isMobile).toBeFalsy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(mac_chrome)
    expect(ua.deviceVendor).toBeNull;
    expect(ua.osVersion).toEqual(10)
    expect(ua.browserVersion).toEqual(75)
    expect(ua.isIphone).toBeFalsy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeTruthy;
    expect(ua.isChrome).toBeTruthy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeFalsy;
    expect(ua.isOpera).toBeFalsy;
    expect(ua.isMac).toBeTruthy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeFalsy;
    expect(ua.isIos).toBeFalsy;
    expect(ua.isAndroid).toBeFalsy;
    expect(ua.isBot).toBeFalsy;
  });

  it('correctly parses Googlebot', () => {
    const ua = parse(bot)

    expect(ua.browser).toEqual('Chrome')
    expect(ua.deviceType).toEqual('mobile')
    expect(ua.os).toEqual('Android')
    expect(ua.isMobile).toBeTruthy;
    expect(ua.isTablet).toBeFalsy;
    expect(ua.source).toEqual(bot)
    expect(ua.deviceVendor).toEqual('LG')
    expect(ua.osVersion).toEqual(6)
    expect(ua.browserVersion).toEqual(41)
    expect(ua.isIphone).toBeFalsy;
    expect(ua.isIpad).toBeFalsy;
    expect(ua.isDesktop).toBeFalsy;
    expect(ua.isChrome).toBeTruthy;
    expect(ua.isFirefox).toBeFalsy;
    expect(ua.isSafari).toBeFalsy;
    expect(ua.isIE).toBeFalsy;
    expect(ua.isEdge).toBeFalsy;
    expect(ua.isOpera).toBeFalsy;
    expect(ua.isMac).toBeFalsy;
    expect(ua.isChromeOS).toBeFalsy;
    expect(ua.isWindows).toBeFalsy;
    expect(ua.isIos).toBeFalsy;
    expect(ua.isAndroid).toBeTruthy;
    expect(ua.isBot).toBeTruthy;
  });
});
