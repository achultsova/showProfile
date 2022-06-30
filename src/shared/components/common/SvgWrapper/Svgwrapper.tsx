import {Box, ThemeUIStyleObject} from "theme-ui";
import {FC, ReactNode} from "react";
import {ButtonVariants} from "../../../configs/theme/types";
import {adaptive} from "../../../configs/styles/utils";

type AdaptiveWidthType = [
  mobileStart: string | number,
  tabletEnd: string | number,
  desktopStart?: string | number,
  desktopEnd?: string | number,
]

type SvgWrapperPropsType = {
  sx?: ThemeUIStyleObject;
  children?: ReactNode;
  width: AdaptiveWidthType;
} ;

const SvgWrapper: FC<SvgWrapperPropsType> = ({
  children,
  sx,
  width,
  ...rest
}) => {
  const [mobileStart, tabletEnd, desktopStart = mobileStart, desktopEnd = tabletEnd] = width
  return (
    <Box
      sx={{
        ...sx,
        flexShrink: 0,
        width: [
          adaptive(mobileStart, tabletEnd, 375, 1024),
          null,
          null,
          adaptive(desktopStart, desktopEnd, 1025, 1920)
        ]
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default SvgWrapper