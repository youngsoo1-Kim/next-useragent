
import { withUserAgent } from 'next-useragent'
import React from 'react'

class IndexPage extends React.Component {

  static async getInitialProps(ctx) {
    return { useragent: ctx.ua.source }
  }

  render() {
    const { ua, useragent } = this.props

    return (
      <div>
        <ul>
          <li>Original source (Server side): { useragent }</li>
          <li>Original source (Client side): { ua.source }</li>
          <li>Device Type: { ua.deviceType }</li>
          <li>Device Vendor: { ua.deviceVendor }</li>
          <li>OS Name: { ua.os }</li>
          <li>OS Version: { ua.osVersion }</li>
          <li>Browser Name: { ua.browser }</li>
          <li>Browser Version: { ua.browserVersion }</li>
          <li>is iPhone?: { ua.isIphone ? 'yes' : 'no' }</li>
          <li>is iPad?: { ua.isIpad ? 'yes' : 'no' }</li>
          <li>is mobile?: { ua.isMobile ? 'yes' : 'no' }</li>
          <li>is tablet?: { ua.isTablet ? 'yes' : 'no' }</li>
          <li>is desktop?: { ua.isDesktop ? 'yes' : 'no' }</li>
          <li>is bot?: { ua.isBot ? 'yes' : 'no' }</li>
          <li>is Chrome?: { ua.isChrome ? 'yes' : 'no' }</li>
          <li>is Firefox?: { ua.isFirefox ? 'yes' : 'no' }</li>
          <li>is Safari?: { ua.isSafari ? 'yes' : 'no' }</li>
          <li>is Internet Explorer?: { ua.isIE ? 'yes' : 'no' }</li>
          <li>is Mac?: { ua.isMac ? 'yes' : 'no' }</li>
          <li>is ChromeOS?: { ua.isChromeOS ? 'yes' : 'no' }</li>
          <li>is Windows?: { ua.isWindows ? 'yes' : 'no' }</li>
          <li>is iOS?: { ua.isIos ? 'yes' : 'no' }</li>
          <li>is Android?: { ua.isAndroid ? 'yes' : 'no' }</li>
        </ul>
      </div>
    )
  }
}

export default withUserAgent(IndexPage)
