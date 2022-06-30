import { FC, ReactNode, useState } from 'react';
import { Box, Flex } from 'theme-ui';
import AccordionItemHeader from './AccordionItemHeader';
import AccordionItemPanel from './AccordionItemPanel';
import AccordionItemHeaderFilter from './AccordionItemHeaderFilter';
import AccordionItemPanelAccount from './AccordionItemPanelAccountEvents';

export type ItemType = {
  headerName: string;
  panel: ReactNode | Array<ReactNode>;
};

export type AccordionItemType = {
  item: ItemType;
  isFilter: boolean;
};

const AccordionItem: FC<AccordionItemType> = (props) => {
  let { item, isFilter } = props;
  const [opened, setOpened] = useState(false);
  const showInner = Boolean(true);

  return (
    <Box
      sx={{
        borderBottom: '1px solid',
        borderColor: 'black',
        gridColumn: ['1/4', '1/4', null, '1/2'],
        py: ['md_5_7', null, null, 'dl_5_11'],
        cursor: `${showInner && 'pointer'}`,
      }}
      onClick={() => showInner && setOpened(!opened)}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {isFilter ? (
          <AccordionItemHeaderFilter
            header_name={item.headerName}
            opened={opened}
            showInner={showInner}
          />
        ) : (
          <AccordionItemHeader
            header_name={item.headerName}
            opened={opened}
            showInner={showInner}
          />
        )}

        <AccordionItemPanel opened={opened} showInner={showInner}>
          <>{item.panel}</>
        </AccordionItemPanel>
      </Flex>
    </Box>
  );
};

export default AccordionItem;
