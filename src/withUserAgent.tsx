import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import { parse } from './helpers';

export interface WithUserAgentProps extends JSX.IntrinsicAttributes {
  ua?: UserAgent,
}

export interface WithUserAgentContext extends NextPageContext {
  ua?: UserAgent,
}

export function withUserAgent<Props extends WithUserAgentProps, InitialProps>(
  ComposedComponent: NextComponentType<WithUserAgentContext, InitialProps, Props>,
): NextComponentType<WithUserAgentContext, InitialProps, Props> {

  const name: string = ComposedComponent.displayName || ComposedComponent.name

  let ua: UserAgent;

  const WithUserAgentWrapper: NextComponentType<WithUserAgentContext, InitialProps, Props> = (props) => {
    if (!ua && typeof window !== 'undefined') {
      ua = parse(window.navigator.userAgent)
    }

    return (
      <ComposedComponent
        ua={ua}
        {...props} />
    );
  };

  WithUserAgentWrapper.displayName = `withUserAgent(${name})`;

  if (ComposedComponent.getInitialProps) {
    WithUserAgentWrapper.getInitialProps = async (context: WithUserAgentContext): Promise<InitialProps> => {
      let initialProps = {}
      let uaString = ''

      if (typeof context.req !== 'undefined' && context.req.headers['user-agent']) {
        uaString = context.req.headers['user-agent'];
      } else if (typeof window !== 'undefined') {
        uaString = window.navigator.userAgent
      }

      ua = parse(uaString)

      context.ua = Object.assign({}, ua) as UserAgent

      if (ComposedComponent.getInitialProps) {
        initialProps = await ComposedComponent.getInitialProps(context);
      }

      if (context.ua) {
        delete context.ua
      }

      return initialProps as InitialProps
    }
  }

  return WithUserAgentWrapper
}
