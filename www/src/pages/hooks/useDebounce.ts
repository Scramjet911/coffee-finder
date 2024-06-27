import { MutableRefObject, useRef } from 'react';

export const useDebounce = (
  func: (args: any) => any,
  wait?: number,
  immediate?: boolean
) => {
  const timeout: MutableRefObject<NodeJS.Timeout | ''> = useRef('');
  return (...args: any) => {
    const context = this;
    clearTimeout(timeout.current);
    if (immediate && !timeout) func.apply(context, args);
    timeout.current = setTimeout(() => {
      timeout.current = '';
      if (!immediate) func.apply(context, args);
    }, wait);
  };
};
