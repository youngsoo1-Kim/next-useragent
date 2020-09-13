/* tslint:disable */

import { expect } from 'chai'

import { parse } from '../src/helpers'

const desktop = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
const ios8 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4'
const android = 'Mozilla/5.0 (Linux; Android 6.0.1; SM-J700M Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36'
const mac_chrome = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3763.0 Safari/537.36'
const bot = 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

describe('helpers.ts', () => {

  it('correctly parses desktop', () => {
    let ua = parse(desktop)

    expect(ua.browser).to.eql('Edge')
    expect(ua.deviceType).to.be.null
    expect(ua.os).to.eql('Windows')
    expect(ua.isMobile).to.be.false
    expect(ua.isTablet).to.be.false
    expect(ua.source).to.eql(desktop)
    expect(ua.deviceVendor).to.be.null
    expect(ua.osVersion).to.eql(10)
    expect(ua.browserVersion).to.eql(12.246)
    expect(ua.isIphone).to.be.false
    expect(ua.isIpad).to.be.false
    expect(ua.isDesktop).to.be.true
    expect(ua.isChrome).to.be.false
    expect(ua.isFirefox).to.be.false
    expect(ua.isSafari).to.be.false
    expect(ua.isIE).to.be.false
    expect(ua.isMac).to.be.false
    expect(ua.isChromeOS).to.be.false
    expect(ua.isWindows).to.be.true
    expect(ua.isIos).to.be.false
    expect(ua.isAndroid).to.be.false
    expect(ua.isBot).to.be.false
  })

  it('correctly parses iOS8 (iPhone)', () => {
    let ua = parse(ios8)

    expect(ua.browser).to.eql('Mobile Safari')
    expect(ua.deviceType).to.eql('mobile')
    expect(ua.os).to.eql('iOS')
    expect(ua.isMobile).to.be.true
    expect(ua.isTablet).to.be.false
    expect(ua.source).to.eql(ios8)
    expect(ua.deviceVendor).to.eql('Apple')
    expect(ua.osVersion).to.eql(8)
    expect(ua.browserVersion).to.eql(8)
    expect(ua.isIphone).to.be.true
    expect(ua.isIpad).to.be.false
    expect(ua.isDesktop).to.be.false
    expect(ua.isChrome).to.be.false
    expect(ua.isFirefox).to.be.false
    expect(ua.isSafari).to.be.false
    expect(ua.isIE).to.be.false
    expect(ua.isMac).to.be.false
    expect(ua.isChromeOS).to.be.false
    expect(ua.isWindows).to.be.false
    expect(ua.isIos).to.be.true
    expect(ua.isAndroid).to.be.false
    expect(ua.isBot).to.be.false
  })

  it('correctly parses Android', () => {
    let ua = parse(android)

    expect(ua.browser).to.eql('Chrome')
    expect(ua.deviceType).to.eql('mobile')
    expect(ua.os).to.eql('Android')
    expect(ua.isMobile).to.be.true
    expect(ua.isTablet).to.be.false
    expect(ua.source).to.eql(android)
    expect(ua.deviceVendor).to.eql('Samsung')
    expect(ua.osVersion).to.eql(6)
    expect(ua.browserVersion).to.eql(69)
    expect(ua.isIphone).to.be.false
    expect(ua.isIpad).to.be.false
    expect(ua.isDesktop).to.be.false
    expect(ua.isChrome).to.be.true
    expect(ua.isFirefox).to.be.false
    expect(ua.isSafari).to.be.false
    expect(ua.isIE).to.be.false
    expect(ua.isMac).to.be.false
    expect(ua.isChromeOS).to.be.false
    expect(ua.isWindows).to.be.false
    expect(ua.isIos).to.be.false
    expect(ua.isAndroid).to.be.true
    expect(ua.isBot).to.be.false
  })

  it('correctly parses Mac OSX (Chrome)', () => {
    let ua = parse(mac_chrome)

    expect(ua.browser).to.eql('Chrome')
    expect(ua.deviceType).to.be.null
    expect(ua.os).to.eql('Mac OS')
    expect(ua.isMobile).to.be.false
    expect(ua.isTablet).to.be.false
    expect(ua.source).to.eql(mac_chrome)
    expect(ua.deviceVendor).to.be.null
    expect(ua.osVersion).to.eql(10)
    expect(ua.browserVersion).to.eql(75)
    expect(ua.isIphone).to.be.false
    expect(ua.isIpad).to.be.false
    expect(ua.isDesktop).to.be.true
    expect(ua.isChrome).to.be.true
    expect(ua.isFirefox).to.be.false
    expect(ua.isSafari).to.be.false
    expect(ua.isIE).to.be.false
    expect(ua.isMac).to.be.true
    expect(ua.isChromeOS).to.be.false
    expect(ua.isWindows).to.be.false
    expect(ua.isIos).to.be.false
    expect(ua.isAndroid).to.be.false
    expect(ua.isBot).to.be.false
  })

  it('correctly parses Googlebot', () => {
    let ua = parse(bot)

    expect(ua.browser).to.eql('Chrome')
    expect(ua.deviceType).to.eql('mobile')
    expect(ua.os).to.eql('Android')
    expect(ua.isMobile).to.be.true
    expect(ua.isTablet).to.be.false
    expect(ua.source).to.eql(bot)
    expect(ua.deviceVendor).to.eql('LG')
    expect(ua.osVersion).to.eql(6)
    expect(ua.browserVersion).to.eql(41)
    expect(ua.isIphone).to.be.false
    expect(ua.isIpad).to.be.false
    expect(ua.isDesktop).to.be.false
    expect(ua.isChrome).to.be.true
    expect(ua.isFirefox).to.be.false
    expect(ua.isSafari).to.be.false
    expect(ua.isIE).to.be.false
    expect(ua.isMac).to.be.false
    expect(ua.isChromeOS).to.be.false
    expect(ua.isWindows).to.be.false
    expect(ua.isIos).to.be.false
    expect(ua.isAndroid).to.be.true
    expect(ua.isBot).to.be.true
  })

  it('correctly parses null ua string', () => {
    let ua = parse(undefined)

    expect(ua.isMobile).to.be.false
    expect(ua.isTablet).to.be.false
    expect(ua.source).to.be.undefined
    expect(ua.deviceVendor).to.be.null
    expect(ua.isIphone).to.be.false
    expect(ua.isIpad).to.be.false
    expect(ua.isDesktop).to.be.true
    expect(ua.isChrome).to.be.false
    expect(ua.isFirefox).to.be.false
    expect(ua.isSafari).to.be.false
    expect(ua.isIE).to.be.false
    expect(ua.isMac).to.be.false
    expect(ua.isChromeOS).to.be.false
    expect(ua.isWindows).to.be.false
    expect(ua.isIos).to.be.false
    expect(ua.isAndroid).to.be.false
    expect(ua.isBot).to.be.false
  })
})
