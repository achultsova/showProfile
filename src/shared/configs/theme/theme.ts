import { Theme } from 'theme-ui';
import { colors } from './colors';
import { text } from './fonts';
import { fonts, fontSizes } from './fontSizes';
import { buttons } from './buttons';
import { iconButtons } from './iconButtons';
import { breakpoints, mediaQueries } from './breakpoints';
import { grids } from './grids';
import { borderWidths } from './borderWidths';
import { space } from './space';
import { images } from './images';
import { layout } from './layout';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  fontSizes,
  space,
  fonts,
  colors,
  buttons: { ...buttons, ...iconButtons },
  text,
  breakpoints,
  mediaQueries,
  links: text,
  grids,
  borderWidths,
  images,
  layout,
});

export type ExactThemeType = typeof theme;

export default theme;
