/* tslint:disable: variable-name */

import { NextComponentType, NextPageContext } from 'next'
import * as React from 'react'

import { UserAgent } from './constants'
import { parse } from './helpers'

export interface WithUserAgentProps extends JSX.IntrinsicAttributes {
  ua?: UserAgent,
}

export interface WithUserAgentContext extends NextPageContext {
  ua?: UserAgent,
}

export function withUserAgent<Props extends WithUserAgentProps, InitialProps extends {}>(
  ComposedComponent: NextComponentType<WithUserAgentContext, InitialProps, Props>,
): NextComponentType<WithUserAgentContext, InitialProps, Props> {

  const name: string = ComposedComponent.displayName || ComposedComponent.name

  let ua: UserAgent

  class WithUserAgentWrapper extends React.Component<Props> {
    static displayName = `withUserAgent(${name})`

    static getInitialProps?: (ctx: WithUserAgentContext) => Promise<InitialProps>

    public render(): React.ReactNode {
      if (!ua && typeof window !== 'undefined') {
        ua = parse(window.navigator.userAgent)
      }

      return (
        <ComposedComponent
          ua={ua}
          {...this.props as Props} />
      )
    }
  }

  WithUserAgentWrapper.getInitialProps = async (context: WithUserAgentContext): Promise<InitialProps> => {
    let initialProps = {}
    let uaString = ''

    if (typeof context.req !== 'undefined') {
      uaString = context.req.headers['user-agent']
    } else if (typeof window !== 'undefined') {
      uaString = window.navigator.userAgent
    }

    ua = parse(uaString)

    if (ComposedComponent.getInitialProps) {
      context.ua = Object.assign({}, ua) as UserAgent

      initialProps = await ComposedComponent.getInitialProps(context)

      if (context.ua) {
        delete context.ua
      }
    }

    return initialProps as InitialProps
  }

  return WithUserAgentWrapper
}
