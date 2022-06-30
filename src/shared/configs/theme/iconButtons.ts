import { darken } from 'polished';

import { colors } from './colors';
import { IconButtonVariants } from './types';

export const iconButtons: IconButtonVariants = {
  primaryIcon: {
    backgroundColor: colors.red,
    'svg path': {
      fill: colors.white,
    },
    '&:hover:enabled': {
      backgroundColor: darken(0.1, colors.red),
    },
  },
  secondaryIcon: {
    background: 'transparent',
    // '&:hover:enabled': {
    //   backgroundColor: colors.grays[1],
    // },
    // '&:active:enabled, &:focus:enabled': {
    //   backgroundColor: colors.red,
    'svg path': {
      fill: colors.black,
    },
  },
};
