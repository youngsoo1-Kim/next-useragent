/* tslint:disable */

import { NextContext } from 'next'
import { UserAgent, parse } from '../src/main'

const desktop = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
const ios8 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4'
const android = 'Mozilla/5.0 (Linux; Android 6.0.1; SM-J700M Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36'
const serverCtx = { 'req': { 'headers': { 'user-agent': android } } }
const clientCtx = {  }

describe('main.ts', () => {

  it('correctly parses desktop', () => {
    const ua = new UserAgent(desktop)

    expect(ua.source).toBe(desktop)
    expect(ua.device).toBe('Other')
    expect(ua.os).toBe('Windows')
    expect(ua.browser).toBe('Edge')
  })

  it('correctly parses iOS8', () => {
    const ua = new UserAgent(ios8)

    expect(ua.source).toBe(ios8)
    expect(ua.device).toBe('iPhone')
    expect(ua.os).toBe('iOS')
    expect(ua.browser).toBe('Mobile Safari')
  })

  it('correctly parses Android', () => {
    const ua = new UserAgent(android)

    expect(ua.source).toBe(android)
    expect(ua.device).toBe('Samsung SM-J700M')
    expect(ua.os).toBe('Android')
    expect(ua.browser).toBe('Chrome Mobile')
  })

  it('', () => {
    let ua = parse(serverCtx as NextContext)

    expect(ua.source).toBe(android)
    expect(ua.device).toBe('Samsung SM-J700M')
    expect(ua.os).toBe('Android')
    expect(ua.browser).toBe('Chrome Mobile')

    ua = parse(clientCtx as NextContext)

    expect(ua.source).toBe('Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0')
    expect(ua.device).toBe('Other')
    expect(ua.os).toBe('Other')
    expect(ua.browser).toBe('Other')
  })
})
