
import Link from 'next/link'
import { withUserAgent } from 'next-useragent'
import React from 'react'

class IndexPage extends React.Component {

  static async getInitialProps(ctx) {
    return { useragent: ctx.ua.source, isServer: !!ctx.req }
  }

  render() {
    const { ua, useragent, isServer } = this.props

    return (
      <>
        <p>useragent: { useragent }</p>
        <p>isServer: { isServer ? 'y' : 'n' }</p>

        { ua.isMobile ? (
        <p>Mobile</p>
        ) : (
        <p>Desktop</p>
        ) }

        <Link href="/second"><a>Go to second.</a></Link><br />
        <Link href="/server-side-props"><a>Go to server side props page.</a></Link>
      </>
    )
  }
}

export default withUserAgent(IndexPage)
