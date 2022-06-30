import { colors } from './colors';
import { space } from './space';
import { ButtonSizesStylesType, ButtonVariants } from './types';
import { adaptive } from '../styles/utils';

const primaryDisabled = {
  '&:disabled': {
    cursor: 'pointer',
    backgroundColor: colors.red,
    borderColor: colors.lightGray,
    color: colors.white,
  },
};

const secondaryDisabled = {
  '&:disabled': {
    cursor: 'default',
    backgroundColor: colors.white,
    color: colors.black,
  },
};

export const buttons: ButtonVariants = {
  primary: {
    color: colors.white,
    backgroundColor: colors.red,
    borderRadius: '0%',
    width: '410px',
    height: '70px',
    fontFamily: `IBM Plex Sans`,
    fontSize: ['Large', 'Regular'],
    fontWeight: 500,
    '&:hover': {
      cursor: 'pointer',
    },
    ...primaryDisabled,
  },
  primaryWidth: {
    m: '0',
    p: '0',
    flexGrow: '1',
    color: colors.white,
    backgroundColor: colors.red,
    borderRadius: '0%',
    height: ['54px', adaptive(space.m, space.l)],
    fontFamily: `IBM Plex Sans`,
    fontSize: ['Large', 'Regular'],
    fontWeight: 500,
    transition: 'all .3s ease',
    cursor: 'pointer',
    '&:hover': {
      bg: 'black',
    },
  },
  primaryArrowWidth: {
    m: '0',
    p: '0',
    flexGrow: '1',
    color: colors.white,
    backgroundColor: colors.red,
    borderRadius: '0%',
    height: ['54px', adaptive(space.m, space.l)],
    fontFamily: `IBM Plex Sans`,
    fontSize: ['Large', 'Regular'],
    fontWeight: 500,
    transition: 'all .3s ease',
    cursor: 'pointer',
    '&:hover': {
      bg: 'black',
    },
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.black,
    borderColor: colors.white,
    '&:hover': {
      color: colors.white,
      borderColor: colors.red,
    },
    ...secondaryDisabled,
  },
  linksFooter: {
    color: colors.white,
    border: 'none',
    background: 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  circleLibrary: {
    color: colors.black,
    backgroundColor: colors.white,
    border: '1px solid #000',
    fontFamily: 'IBM Plex Sans',
    fontSize: ['xxxSmall', 'Small'],
    '&:hover': {
      backgroundColor: colors.red,
      border: 'none',
      color: colors.white,
    },
  },
  circleUpcoming: {
    color: colors.white,
    backgroundColor: colors.black,
    border: '1px solid #fff',
    fontFamily: `IBM Plex Sans`,
    fontSize: ['xxLarge', 'Large'],
    fontWeight: 500,
    '&:hover': {
      backgroundColor: colors.red,
      border: 'none',
      color: colors.white,
    },
  },
  headerButton: {
    color: colors.black,
    backgroundColor: colors.white,
    border: '1px solid #000',
    borderRadius: '0%',
    height: '40px',
    fontFamily: 'IBM Plex Sans',
    fontSize: ['xxSmall', 'xSmall'],
    fontWeight: '500',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  library: {
    color: colors.white,
    backgroundColor: colors.red,
    borderRadius: '0%',
    fontFamily: `IBM Plex Sans`,
    fontSize: ['Large', 'Regular'],
    fontWeight: 500,
    '&:hover': {
      cursor: 'pointer',
    },
    ...primaryDisabled,
  },
  morePhotos: {
    color: colors.black,
    backgroundColor: colors.white,
    height: ['54px', adaptive(space.m, space.l)],
    border: '1px solid #000',
    borderRadius: '0%',
    '&:hover': {
      cursor: 'pointer',
    },
    ...secondaryDisabled,
  },
  goNext: {
    display: ['none', 'flex'],
    justifyContent: 'center',
    alignItems: 'center',
    width: ['54px', adaptive(space.m, space.l)],
    height: ['54px', adaptive(space.m, space.l)],
    border: '1px solid',
    borderColor: 'black',
    borderRadius: '50%',
    transition: 'all .3s ease',
  },
  circleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: '0',
    width: '100%',
    aspectRatio: '1',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'all .3s ease',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
  logoutButton: {
    display: 'flex',
    width: '100%',
    p: '0',
    maxWidth: '81px',
    justifyContent: 'start',
    backgroundColor: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

export const buttonSizesStyles: ButtonSizesStylesType = {
  small: {
    paddingX: 'm',
    paddingY: 'xs',
    minWidth: '80px',
  },
  medium: {
    paddingX: 'xl',
    paddingY: 's',
    minWidth: '120px',
  },
  large: {
    paddingX: 'xxl',
    paddingY: 'm',
    minWidth: '120px',
  },
};
