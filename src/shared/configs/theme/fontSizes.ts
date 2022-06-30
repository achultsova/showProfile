// import { fallbackFontFamily } from './fonts';
import { FontSizesType } from './types';

export const fallbackFontFamily =
  '"IBM Plex Sans",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

export const fontSizes: FontSizesType = [
  7, 11, 14, 16, 19, 22, 24, 27, 30, 36, 45, 54, 67, 81, 100, 120, 130, 170,
];

({
  0: fontSizes.f7, // 7px
  1: fontSizes.f11, // 11px
  2: fontSizes.f14, // 14px
  3: fontSizes.f16, // 14px
  4: fontSizes.f19, // 19px
  5: fontSizes.f22, // 22px
  6: fontSizes.f24, // 24px
  7: fontSizes.f27, // 27px
  8: fontSizes.f30, // 30px
  9: fontSizes.f36, // 36px
  10: fontSizes.f45, // 45px
  11: fontSizes.f54, // 54px
  12: fontSizes.f67, // 67px
  13: fontSizes.f81, // 81px
  14: fontSizes.f100, // 100px
  15: fontSizes.f120, // 120px
  16: fontSizes.f130, // 130px
  17: fontSizes.f170, // 170px
} = fontSizes);

type FontsType = {
  body: string;
};

export const fonts: FontsType = {
  body: fallbackFontFamily,
};
