import { FC, ReactElement } from 'react';
import { Box, Link } from 'theme-ui';

interface IAccordionItemPanelProps {
  children: ReactElement | Array<ReactElement>;
  showInner: boolean;
  opened: boolean;
}

const AccordionItemPanel: FC<IAccordionItemPanelProps> = (props) => {
  let { showInner, opened, children } = props;
  return (
    <>
      {showInner && (
        <Box
          sx={{
            maxHeight: opened ? '1000px' : 0,
            opacity: opened ? 1 : 0,
            visibility: opened ? 'visible' : 'hidden',
            transition: opened
              ? 'max-height .3s,opacity 1s,padding-bottom .5s'
              : 'max-height .5s,opacity .1s,padding-bottom .5s',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default AccordionItemPanel;
