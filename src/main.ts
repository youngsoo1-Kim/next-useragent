
import { NextContext } from 'next'
import * as useragent from 'useragent'

export interface UserAgentType {
  source: string,
  device: string,
  deviceVersion: string,
  os: string,
  osVersion: string,
  browser: string,
  browserVersion: string,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  isBot: boolean
}

class UserAgent implements UserAgentType {

  private agent: useragent.Agent

  constructor(ua: string) {
    this.agent = useragent.parse(ua)
  }

  get source(): string {
    return this.agent.source
  }

  get device(): string {
    return this.agent.device.family
  }

  get deviceVersion(): string {
    return this.agent.device.toVersion()
  }

  get os(): string {
    return this.agent.os.family
  }

  get osVersion(): string {
    return this.agent.os.toVersion()
  }

  get browser(): string {
    return this.agent.family
  }

  get browserVersion(): string {
    return this.agent.toVersion()
  }

  get isMobile(): boolean {
    return this.device === 'iPhone' ||
      this.device === 'iPod' ||
      this.browser === 'Opera Mobile' ||
      this.browser === 'Opera Mini' ||
      this.os === 'Android' ||
      this.os === 'Firefox OS'
  }

  get isTablet(): boolean {
    return this.device === 'iPad' ||
      this.device === 'Kindle' ||
      this.device === 'Kindle Fire' ||
      this.device === 'Kindle Fire HD' ||
      (this.os === 'Android' && (
        this.source.indexOf('Mobile Safari') === -1 &&
        this.browser !== 'Firefox Mobile'
      ))
  }

  get isDesktop(): boolean {
    return this.source.indexOf('Windows NT') > -1 ||
      this.source.indexOf('Linux') > -1 ||
      this.os === 'Mac OS X'
  }

  get isBot(): boolean {
    return this.device === 'Spider'
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
