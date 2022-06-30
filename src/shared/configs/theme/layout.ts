import {adaptive} from "../styles/utils";
import {space} from "./space";
import {breakpoints} from "./breakpoints";

export const layout = {
  default: {},
  container: {
    px: ['md_main', null, null, 'dl_main']
  },
  containerXY: {
    px: ['md_main', null, null, 'dl_main'],
    pt: ['md_54_81', null, null, 'dl_54_122'],
    pb: ['md_81_122', null, null, 'dl_81_183'],
  },
  alignRight: {
    gridColumn: [null, '2/4'],
  },
  plus: {
    width: [adaptive(space.xxxs, space.xxs, 375, breakpoints.laptop), null, null, adaptive(space.xxxs, space.xxs, breakpoints.laptop, breakpoints.largeScreen)],
    height: [adaptive(space.xxxs, space.xxs, 375, breakpoints.laptop), null, null, adaptive(space.xxxs, space.xxs, breakpoints.laptop, breakpoints.largeScreen)],
  },
}