import { Box, ThemeUIStyleObject } from 'theme-ui';
import { FC } from 'react';
import { adaptive } from '../../../configs/styles/utils';
import { breakpoints } from '../../../configs/theme/breakpoints';

type PlusIconPropsType = {
  sx?: ThemeUIStyleObject;
  condition?: boolean;
};

const styles = {
  content: "''",
  width: '100%',
  height: [
    adaptive(1, 2, 375, breakpoints.laptop),
    null,
    null,
    adaptive(1, 2, breakpoints.laptop, breakpoints.largeScreen),
  ],
  backgroundColor: '#fff',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  transition: 'transform .5s',
};

export const PlusIconInCircle: FC<PlusIconPropsType> = (props) => {
  return (
    <Box
      sx={{
        ...props.sx,
        position: 'relative',
        flexShrink: 0,
        '::after': {
          ...styles,
          position: 'absolute',
        },
        '::before': {
          ...styles,
          position: 'absolute',
          transform: `translate(-50%,-50%) ${
            props.condition ? 'rotate(-90deg)' : 'rotate(0deg)'
          }`,
        },
      }}
    ></Box>
  );
};
