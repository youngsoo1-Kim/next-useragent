
import { NextComponentType, NextContext } from 'next'
import * as React from 'react'

import { UserAgent } from './constants'
import { parse } from './helpers'

export interface UserAgentProps {
  ua?: UserAgent
}

export interface UserAgentContext extends NextContext {
  ua?: UserAgent
}

export function withUserAgent<Props extends UserAgentProps, InitialProps extends UserAgentProps>(
  ComposedComponent: NextComponentType<Props, InitialProps>
): NextComponentType<Props, InitialProps> {

  const name: string = ComposedComponent.displayName || ComposedComponent.name

  let ua: UserAgent

  class WithUserAgentWrapper extends React.Component<Props> {
    static displayName = `withUserAgent(${name})`

    static getInitialProps?: any

    public render(): JSX.Element {
      if (!ua && navigator) {
        ua = parse(navigator.userAgent)
      }

      return (
        <ComposedComponent
          ua={ua}
          {...this.props as Props} />
      )
    }
  }

  WithUserAgentWrapper.getInitialProps = async (ctx: UserAgentContext) => {
    let initialProps: Object = {}

    if (typeof ctx.req !== 'undefined') {
      ua = parse(ctx.req.headers['user-agent'])
    } else if (typeof navigator !== 'undefined') {
      ua = parse(navigator.userAgent)
    }

    if (ComposedComponent.getInitialProps) {
      ctx.ua = Object.assign({}, ua)

      initialProps = await ComposedComponent.getInitialProps(ctx)

      if (ctx.ua) {
        delete ctx.ua
      }
    }

    return initialProps
  }

  return WithUserAgentWrapper
}
