import { FC, ReactNode } from 'react';
import Marquee from 'react-fast-marquee';
import { Flex, Text, ThemeUIStyleObject } from 'theme-ui';

type TickerProps = {
  sx?: ThemeUIStyleObject;
  gradient?: boolean;
  speed: number;
  children?: ReactNode;
  text?: string;
  bg?: string;
  color?: string;
  withoutPaddings?: boolean;
};
const Ticker: FC<TickerProps> = ({
  children,
  gradient = false,
  speed,
  text,
  bg = 'black',
  color = 'white',
  withoutPaddings = false,
  sx,
}) => {
  return (
    <Marquee gradient={gradient} speed={speed}>
      <Text
        sx={{
          py: withoutPaddings ? [] : ['md_24_36', null, null, 'dl_24_54'],
          bg,
          color,
          ...sx
        }}
        variant="Marquee"
      >
        {' '}
        {children || text}{' '}
      </Text>
    </Marquee>
  );
};

export default Ticker;
