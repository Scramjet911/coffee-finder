import { MutableRefObject, useRef } from 'react';

export const useDebounce = (
  func: (args: any) => any,
  wait?: number,
  immediate?: boolean
) => {
  const timeout: MutableRefObject<ReturnType<typeof setTimeout> | null> =
    useRef(null);
  return (...args: any) => {
    const context = this;
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (immediate && !timeout) func.apply(context, args);
    timeout.current = setTimeout(() => {
      timeout.current = null;
      if (!immediate) func.apply(context, args);
    }, wait);
  };
};
