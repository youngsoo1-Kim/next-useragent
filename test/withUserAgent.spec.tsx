/* tslint:disable */

import { expect } from 'chai'
import { configure, mount } from 'enzyme'
import React from 'react'

const Adapter: any = require('enzyme-adapter-react-16')

import { WithUserAgentProps, withUserAgent } from '../src/withUserAgent'

configure({ adapter: new Adapter() })

class TestComponent extends React.Component<WithUserAgentProps> {

  render() {
    const { ua } = this.props

    return (
      <p>{ ua.source }</p>
    )
  }
}

describe('withUserAgent.ts', () => {

  it('provides the ua.', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3763.0 Safari/537.36'
    navigator['__defineGetter__']('userAgent', () => {
      return ua
    })

    const Component = withUserAgent(TestComponent)

    const wrapper = mount(<Component />)

    expect(wrapper.find(TestComponent).length).to.eql(1)
    expect(wrapper.find(TestComponent).text()).to.eql(ua)
  })
})
