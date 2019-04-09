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
import { UserAgentType, parse } from 'next-useragent'

interface Props {
  ua: UserAgentType
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
        <li>{ ua.source }</li>
        <li>{ ua.device }</li>
        <li>{ ua.deviceVersion }</li>
        <li>{ ua.os }</li>
        <li>{ ua.osVersion }</li>
        <li>{ ua.browser }</li>
        <li>{ ua.browserVersion }</li>
      </ul>
    )
  }
}
```

## License

`next-useragent` is licensed under MIT License.  
See [LICENSE](https://github.com/tokuda109/next-useragent/blob/master/LICENSE) for more information.
