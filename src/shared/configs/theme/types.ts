import { ThemeUIStyleObject } from 'theme-ui';

type ObjectWithType<T> = {
  [K: string]: T;
};

export type ColorsType = {
  red: string;
  black: string;
  lightGray: string;
  darkGray: string;
  white: string;
};

export type ButtonsType = Record<string, ThemeUIStyleObject>;

type ButtonVariant = {
  display?: string | string[];
  justifyContent?: string | string[];
  alignItems?: string | string[];
  flexGrow?: string | string[];
  mt?: string | string[];
  m?: string | string[];
  p?: string | string[];
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  width?: string | string[] | number | number[];
  height?: string | string[] | number | number[];
  fontFamily?: string;
  fontSize?: string | string[] | number | number[];
  fontWeight?: string | number | string[] | number[];
  cursor?: string | string[];
  transition?: any;
  aspectRatio?: string;
  maxWidth?: string;
  '&:hover'?: object;
  '&:disabled'?: object;
};

export type ImagesVariants = {
  large: ImageVariant;
};

export type ImageVariant = {
  width?: string | number | string[] | number[];
  height?: string | number | string[] | number[];
};

export type ButtonVariants = {
  primary: ButtonVariant;
  primaryWidth: ButtonVariant;
  secondary: ButtonVariant;
  linksFooter: ButtonVariant;
  circleLibrary: ButtonVariant;
  circleUpcoming: ButtonVariant;
  headerButton: ButtonVariant;
  library: ButtonVariant;
  morePhotos: ButtonVariant;
  goNext: ButtonVariant;
  primaryArrowWidth: ButtonVariant;
  circleButton: ButtonVariant;
  logoutButton: ButtonVariant;
};

export type ButtonSizesStylesType = {
  small: ThemeUIStyleObject;
  medium: ThemeUIStyleObject;
  large: ThemeUIStyleObject;
};

export type AvatarVariants = {
  default: ThemeUIStyleObject;
  lychee: ThemeUIStyleObject;
  mint: ThemeUIStyleObject;
  coconut: ThemeUIStyleObject;
  cream: ThemeUIStyleObject;
};

export type AvatarSizes = {
  xs: ThemeUIStyleObject;
  s: ThemeUIStyleObject;
  m: ThemeUIStyleObject;
  l: ThemeUIStyleObject;
  xl: ThemeUIStyleObject;
};

export type IconButtonVariants = {
  primaryIcon: ThemeUIStyleObject;
  secondaryIcon: ThemeUIStyleObject;
};

type TextStyleObject = Pick<
  React.CSSProperties,
  'fontFamily' | 'lineHeight' | 'letterSpacing' | 'textTransform' | 'fontWeight'
> & { fontSize: string | number | string[] | number[] };

export type TextStyles = {
  default: TextStyleObject;
  H1: TextStyleObject;
  H2: TextStyleObject;
  H3: TextStyleObject;
  H4: TextStyleObject;
  H5: TextStyleObject;
  H6: TextStyleObject;
  Body: TextStyleObject;
  Text: TextStyleObject;
  // Caption: TextStyleObject;
  Button: TextStyleObject;
  LinksFooter: TextStyleObject;
  Ticker: TextStyleObject;
  Speakers: TextStyleObject;
  f36t54t81?: TextStyleObject;
  f24t36t81?: TextStyleObject;
  f19t24?: TextStyleObject;
  f19t30?: TextStyleObject;
  f36t81?: TextStyleObject;
  f16t19?: TextStyleObject;
  f16t24?: TextStyleObject;
  f16t30?: TextStyleObject;

  FilterCategory: TextStyleObject;
  FilterButton: TextStyleObject;
  FilterReset: TextStyleObject;
  NameCategoruEvents: TextStyleObject;

  h1?: TextStyleObject;
  h2?: TextStyleObject;
  h3?: TextStyleObject;
  h4_light?: TextStyleObject;
  h4_medium?: TextStyleObject;
  h5_light?: TextStyleObject;
  h5_medium?: TextStyleObject;
  b1_light?: TextStyleObject;
  b1_medium?: TextStyleObject;
  b2?: TextStyleObject;
  b3_light?: TextStyleObject;
  b3_medium?: TextStyleObject;
  Marquee?: TextStyleObject;
  BigFigures?: TextStyleObject;
  ContactForm?: TextStyleObject;
  Caption?: TextStyleObject;
  Headline_horizontal?: TextStyleObject;
  Headline_vertical?: TextStyleObject;
  Books_cat?: TextStyleObject;
  Books_speaker?: TextStyleObject;
};

export type FontSizesType = number[] & {
  f7?: number;
  f11?: number;
  f14?: number;
  f16?: number;
  f19?: number;
  f22?: number;
  f24?: number;
  f27?: number;
  f30?: number;
  f36?: number;
  f45?: number;
  f54?: number;
  f67?: number;
  f81?: number;
  f100?: number;
  f120?: number;
  f130?: number;
  f170?: number;
};

export enum SpacingEnum {
  xxxxxs = 'xxxxxs',
  xxxxs = 'xxxxs',
  xxxs = 'xxxs',
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
  xxxxl = 'xxxxl',
  fivel = 'fivel',
  sixl = 'sixl',
  sevenl = 'sevenl',
  eightl = 'eightl',

  md_3_5 = 'md_3_5',
  md_5_7 = 'md_5_7',
  md_7_11 = 'md_7_11',
  md_11_16 = 'md_11_16',
  md_16_24 = 'md_16_24',
  md_24_36 = 'md_24_36',
  md_36_54 = 'md_36_54',
  md_54_81 = 'md_54_81',
  md_81_122 = 'md_81_122',
  md_122_183 = 'md_122_183',
  md_183_275 = 'md_183_275',

  dl_2_5 = 'dl_2_5',
  dl_3_7 = 'dl_3_7',
  dl_5_11 = 'dl_5_11',
  dl_7_16 = 'dl_7_16',
  dl_11_24 = 'dl_11_24',
  dl_16_36 = 'dl_16_36',
  dl_24_54 = 'dl_24_54',
  dl_36_81 = 'dl_36_81',
  dl_54_122 = 'dl_54_122',
  dl_81_183 = 'dl_81_183',
  dl_122_275 = 'dl_122_275',

  md_main = 'md_main',
  dl_main = 'dl_main',
}

export enum BreakpointsEnum {
  mobile = 'mobile',
  smallTablet = 'smallTablet',
  tablet = 'tablet',
  laptop = 'laptop',
  desktop = 'desktop',
  largeScreen = 'largeScreen',
}

export type SpacingTypes = keyof typeof SpacingEnum;

export type SpacingAliases<T> = {
  [key in SpacingTypes]: T;
};

export type BreakpointsTypes = keyof typeof BreakpointsEnum;

export type BreakpointsAliases<T> = {
  [key in BreakpointsTypes]: T;
};

export type SpaceType = (string | number)[] &
  Partial<SpacingAliases<string | number>>;
export type ShadowsType = ObjectWithType<string>;
export type BreakpointsType = string[] & Partial<BreakpointsAliases<string>>;
export type MediaQueriesType = ObjectWithType<string>;

type SwitchSizeProps = {
  width: string;
  height: string;
};

export type SwitchSizes = {
  s: SwitchSizeProps;
  m: SwitchSizeProps;
};
