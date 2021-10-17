import { useEffect, useState } from 'react';
import { parse } from './helpers';

export const useUserAgent = (phase: string): UserAgent | undefined => {
  const [value, setValue] = useState<UserAgent | undefined>();

  useEffect(() => {
    setValue(parse(phase));
  }, []);

  return value;
};
