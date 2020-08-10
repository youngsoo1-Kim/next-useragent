import { useUserAgent, withUserAgent } from 'next-useragent'
import React from 'react'

class ServerSidePropsPage extends React.Component {
  render() {
    const { ua, useragent, isServer } = this.props

    return (
      <>
        <p>useragent: { useragent }</p>
        <p>isDesktop: { ua.isDesktop ? 'y' : 'n' }</p>
        <p>isServer: { isServer ? 'y' : 'n' }</p>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const ua = useUserAgent(context.req.headers['user-agent'])

  return {
    props: { ua, useragent: ua.source, isServer: true }
  }
}

export default withUserAgent(ServerSidePropsPage)
