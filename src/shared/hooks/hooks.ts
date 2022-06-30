import { BreakpointsTypes } from '../../shared/configs/theme/types';
import { useEffect, useState } from 'react';
import { mediaQueries } from '../../shared/configs/theme/breakpoints';

export function useBreakpoint(
  breakpointStart: BreakpointsTypes | number,
  breakpointEnd: BreakpointsTypes | number
): boolean {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let start = breakpointStart;
  let end = breakpointEnd;

  if (typeof breakpointStart != 'number') {
    start = +mediaQueries[breakpointStart].match(/\d+/)[0];
  }
  if (typeof breakpointEnd != 'number') {
    end = +mediaQueries[breakpointEnd].match(/\d+/)[0];
  }

  return start <= windowSize && windowSize < end;
}

export function useIsMobile(): boolean {
  return useBreakpoint(0, 'smallTablet');
}

export function useIsTablet(): boolean {
  return useBreakpoint('smallTablet', 'laptop');
}

export function useIsDesktop(): boolean {
  return useBreakpoint('laptop', Infinity);
}

export function useIsGraterThenDesktop(): boolean {
  return useBreakpoint('largeScreen', Infinity);
}
