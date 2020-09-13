import { useUserAgent, withUserAgent } from 'next-useragent'
import React from 'react'

class ServerSidePropsPage extends React.Component {
  render() {
    const { ua, useragent } = this.props

    return (
      <>
        <p>useragent: { useragent }</p>
        <p>isDesktop: { ua.isDesktop ? 'y' : 'n' }</p>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const ua = useUserAgent(context.req.headers['user-agent'])

  return {
    props: { ua, useragent: ua.source }
  }
}

export default withUserAgent(ServerSidePropsPage)
