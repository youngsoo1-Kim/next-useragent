# next-useragent

`next-useragent` parses browser [user-agent strings](http://useragentstring.com/) for [next.js](https://nextjs.org/).

[![npm](https://nodei.co/npm/next-useragent.png?downloads=true&stars=true)](https://nodei.co/npm/next-useragent)

## Installation

```
$ npm install next-useragent
```

## Usage

`next-useragent` is simple to use.  
First parse a string with `parse` and then access the fields of `UserAgent` for the required information.

Example usage:

```
import React from 'react'
import { UserAgent, parse } from 'next-useragent'

interface Props {
  ua: UserAgent
}

export default class IndexPage extends React.Component<Props> {

  static async getInitialProps(ctx) {
    const ua = parse(ctx)

    return { ua }
  }

  render() {
    const { ua } = this.props

    return (
      <ul>
        <li>Original source: { ua.source }</li>
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
        <li>is Chrome?: { ua.isChrome ? 'yes' : 'no' }</li>
        <li>is Firefox?: { ua.isFirefox ? 'yes' : 'no' }</li>
        <li>is Safari?: { ua.isSafari ? 'yes' : 'no' }</li>
        <li>is Internet Explorer?: { ua.isIE ? 'yes' : 'no' }</li>
        <li>is Mac?: { ua.isMac ? 'yes' : 'no' }</li>
        <li>is ChromeOS?: { ua.isChromeOS ? 'yes' : 'no' }</li>
        <li>is Windows?: { ua.isWindows ? 'yes' : 'no' }</li>
        <li>is iOS?: { ua.isIos ? 'yes' : 'no' }</li>
        <li>is Android?: { ua.isAndroid ? 'yes' : 'no' }</li>
        <li>is bot?: { ua.isBot ? 'yes' : 'no' }</li>
      </ul>
    )
  }
}
```

## License

`next-useragent` is licensed under MIT License.  
See [LICENSE](https://github.com/tokuda109/next-useragent/blob/master/LICENSE) for more information.
