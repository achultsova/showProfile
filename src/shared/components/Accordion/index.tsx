import { FC } from 'react';
import { Box, ThemeUIStyleObject } from 'theme-ui';
import AccordionItem, { ItemType } from './AccordionItem';

export type AccordionProps = {
  bg?: string;
  color?: string;
  data?: ItemType[];
  isFilter?: boolean;
  sx?: ThemeUIStyleObject;
};

const Accordion: FC<AccordionProps> = (props) => {
  const { bg, color, data, isFilter, sx } = props;
  return (
    <Box sx={{ bg: { bg }, color: { color }, ...sx }}>
      {data.map((item, index) => (
        <AccordionItem key={index} isFilter={isFilter} item={item} />
      ))}
    </Box>
  );
};

export default Accordion;
