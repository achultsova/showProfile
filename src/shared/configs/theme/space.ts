import { FontSizesType, SpaceType } from './types';
import { adaptive } from '../styles/utils';
import { fontSizes } from './fontSizes';
import { breakpoints } from './breakpoints';

type AdaptiveSizesType = number[] & {
  s0?: number;
  s2?: number;
  s3?: number;
  s5?: number;
  s7?: number;
  s11?: number;
  s15?: number;
  s16?: number;
  s24?: number;
  s30?: number;
  s36?: number;
  s40?: number;
  s54?: number;
  s69?: number;
  s80?: number;
  s81?: number;
  s122?: number;
  s155?: number;
  s183?: number;
  s241?: number;
  s275?: number;
  s296?: number;
  s335?: number;
};

const adaptiveSpaces: AdaptiveSizesType = [
  0, 2, 3, 5, 7, 11, 15, 16, 24, 30, 36, 40, 54, 69, 80, 81, 122, 155, 183, 241,
  275, 296, 335,
];

({
  0: adaptiveSpaces.s0, // 0px
  1: adaptiveSpaces.s2, // 2px
  2: adaptiveSpaces.s3, // 3px
  3: adaptiveSpaces.s5, // 5px
  4: adaptiveSpaces.s7, // 7px
  5: adaptiveSpaces.s11, // 11px
  6: adaptiveSpaces.s15, // 15px
  7: adaptiveSpaces.s16, // 16px
  8: adaptiveSpaces.s24, // 24px
  9: adaptiveSpaces.s30, // 30px
  10: adaptiveSpaces.s36, // 36px
  11: adaptiveSpaces.s40, // 40px
  12: adaptiveSpaces.s54, // 54px
  13: adaptiveSpaces.s69, // 69px
  14: adaptiveSpaces.s80, // 80px
  15: adaptiveSpaces.s81, // 81px
  16: adaptiveSpaces.s122, // 122px
  17: adaptiveSpaces.s155, // 155px
  18: adaptiveSpaces.s183, // 183px
  19: adaptiveSpaces.s241, // 241px
  10: adaptiveSpaces.s275, // 275px
  21: adaptiveSpaces.s296, // 296px
  22: adaptiveSpaces.s335, // 335px
} = adaptiveSpaces);

export const space: SpaceType = [
  0,
  11,
  16,
  24,
  36,
  40,
  54,
  69,
  81,
  122,
  155,
  183,
  241,
  275,
  296,
  335,
  adaptive(adaptiveSpaces.s3, adaptiveSpaces.s5, 375, breakpoints.laptop), //16
  adaptive(adaptiveSpaces.s5, adaptiveSpaces.s7, 375, breakpoints.laptop), //17
  adaptive(adaptiveSpaces.s7, adaptiveSpaces.s11, 375, breakpoints.laptop), //18
  adaptive(adaptiveSpaces.s11, adaptiveSpaces.s16, 375, breakpoints.laptop), //19
  adaptive(adaptiveSpaces.s16, adaptiveSpaces.s24, 375, breakpoints.laptop), //20
  adaptive(adaptiveSpaces.s24, adaptiveSpaces.s36, 375, breakpoints.laptop), //21
  adaptive(adaptiveSpaces.s36, adaptiveSpaces.s54, 375, breakpoints.laptop), //22
  adaptive(adaptiveSpaces.s54, adaptiveSpaces.s81, 375, breakpoints.laptop), //23
  adaptive(adaptiveSpaces.s81, adaptiveSpaces.s122, 375, breakpoints.laptop), //24
  adaptive(adaptiveSpaces.s122, adaptiveSpaces.s183, 375, breakpoints.laptop), //25
  adaptive(adaptiveSpaces.s183, adaptiveSpaces.s275, 375, breakpoints.laptop), //26

  adaptive(
    adaptiveSpaces.s2,
    adaptiveSpaces.s5,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //27
  adaptive(
    adaptiveSpaces.s3,
    adaptiveSpaces.s7,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //28
  adaptive(
    adaptiveSpaces.s5,
    adaptiveSpaces.s11,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //29
  adaptive(
    adaptiveSpaces.s7,
    adaptiveSpaces.s16,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //30
  adaptive(
    adaptiveSpaces.s11,
    adaptiveSpaces.s24,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //31
  adaptive(
    adaptiveSpaces.s16,
    adaptiveSpaces.s36,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //32
  adaptive(
    adaptiveSpaces.s24,
    adaptiveSpaces.s54,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //33
  adaptive(
    adaptiveSpaces.s36,
    adaptiveSpaces.s81,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //34
  adaptive(
    adaptiveSpaces.s54,
    adaptiveSpaces.s122,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //35
  adaptive(
    adaptiveSpaces.s81,
    adaptiveSpaces.s183,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //36
  adaptive(
    adaptiveSpaces.s122,
    adaptiveSpaces.s275,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //37

  adaptive(adaptiveSpaces.s15, adaptiveSpaces.s40, 375, breakpoints.laptop), //38
  adaptive(
    adaptiveSpaces.s30,
    adaptiveSpaces.s80,
    breakpoints.laptop,
    breakpoints.largeScreen
  ), //39
];

({
  0: space.xxxxxs, //0
  1: space.xxxxs, //11px
  2: space.xxxs, // 16px
  3: space.xxs, //24px
  4: space.xs, // 36px
  5: space.s, // 40px
  6: space.m, // 54px
  7: space.l, // 69px
  8: space.xl, // 81px
  9: space.xxl, // 122px
  10: space.xxxl, // 155px
  11: space.xxxxl, //183px
  12: space.fivel, //241px
  13: space.sixl, //275
  14: space.sevenl, //296px
  15: space.eightl, //335

  16: space.md_3_5,
  17: space.md_5_7,
  18: space.md_7_11,
  19: space.md_11_16,
  20: space.md_16_24,
  21: space.md_24_36,
  22: space.md_36_54,
  23: space.md_54_81,
  24: space.md_81_122,
  25: space.md_122_183,
  26: space.md_183_275,

  27: space.dl_2_5,
  28: space.dl_3_7,
  29: space.dl_5_11,
  30: space.dl_7_16,
  31: space.dl_11_24,
  32: space.dl_16_36,
  33: space.dl_24_54,
  34: space.dl_36_81,
  35: space.dl_54_122,
  36: space.dl_81_183,
  37: space.dl_122_275,

  38: space.md_main,
  39: space.dl_main,
} = space);
