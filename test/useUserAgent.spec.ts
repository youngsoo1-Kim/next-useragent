import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useUserAgent } from '../src/useUserAgent';

const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3763.0 Safari/537.36';

describe('useUserAgent.ts', () => {
  it('should parse the useragent strings.', () => {
    const { result } = renderHook(() => useUserAgent(ua));

    expect(result?.current?.source).toEqual(ua);
  });
});
