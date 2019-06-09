/* tslint:disable: variable-name */

import { NextComponentType, NextContext } from 'next'
import * as React from 'react'

import { UserAgent } from './constants'
import { parse } from './helpers'

export interface WithUserAgentProps {
  ua?: UserAgent
}

export interface WithUserAgentContext extends NextContext {
  ua?: UserAgent
}

export function withUserAgent<Props extends WithUserAgentProps, InitialProps extends {}>(
  ComposedComponent: NextComponentType<Props, InitialProps>,
): NextComponentType<Props, InitialProps> {

  const name: string = ComposedComponent.displayName || ComposedComponent.name

  let ua: UserAgent

  class WithUserAgentWrapper extends React.Component<Props> {
    static displayName = `withUserAgent(${name})`

    static getInitialProps?: (ctx: WithUserAgentContext) => Promise<InitialProps>

    public render(): JSX.Element {
      if (!ua && typeof navigator !== 'undefined') {
        ua = parse(navigator.userAgent)
      }

      return (
        <ComposedComponent
          ua={ua}
          {...this.props as Props} />
      )
    }
  }

  WithUserAgentWrapper.getInitialProps = async (ctx: WithUserAgentContext): Promise<InitialProps> => {
    let initialProps = {}
    let uaString = ''

    if (typeof ctx.req !== 'undefined') {
      uaString = ctx.req.headers['user-agent']
    } else if (typeof navigator !== 'undefined') {
      uaString = navigator.userAgent
    }

    ua = parse(uaString)

    if (ComposedComponent.getInitialProps) {
      ctx.ua = Object.assign({}, ua) as UserAgent

      initialProps = await ComposedComponent.getInitialProps(ctx)

      if (ctx.ua) {
        delete ctx.ua
      }
    }

    return initialProps as InitialProps
  }

  return WithUserAgentWrapper
}
