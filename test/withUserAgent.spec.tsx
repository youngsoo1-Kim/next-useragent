import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React, { Component } from 'react';
import { WithUserAgentProps, withUserAgent } from '../src/withUserAgent';

class TestComponent extends Component<WithUserAgentProps> {
  render() {
    const { ua } = this.props;

    return (
      <p data-testid="user-agent-text">{ ua?.source }</p>
    )
  }
}

const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3763.0 Safari/537.36';

describe('withUserAgent.ts', () => {
  it('should parse the useragent strings.', () => {
    const Component = withUserAgent(TestComponent);

    render(<Component />);

    expect(screen.getByTestId('user-agent-text')).toHaveTextContent(ua);
  });
});
