import { BreakpointsType, MediaQueriesType } from './types';

export const breakpoints: BreakpointsType = [
  //'375px',
  '577px',
  '769px',
  '1025px',
  '1367px',
  '1920px',
];

({
  // 0: breakpoints.mobile,
  0: breakpoints.smallTablet,   // 577px
  1: breakpoints.tablet,        // 769px
  2: breakpoints.laptop,        // 1025px
  3: breakpoints.desktop,       // 1367px
  4: breakpoints.largeScreen,   // 1921px
} = breakpoints);

export const mediaQueries: MediaQueriesType = {
  smallTablet: `@media screen and (min-width: ${breakpoints[0]})`,
  tablet: `@media screen and (min-width: ${breakpoints[1]})`,
  laptop: `@media screen and (min-width: ${breakpoints[2]})`,
  desktop: `@media screen and (min-width: ${breakpoints[3]})`,
  largeScreen: `@media screen and (min-width: ${breakpoints[4]})`,
};
