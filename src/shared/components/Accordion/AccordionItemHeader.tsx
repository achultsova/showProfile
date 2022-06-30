import { FC } from 'react';
import { Flex, Text, Container } from 'theme-ui';
import { space } from '../../configs/theme/space';
import { PlusIconInCircle } from '../common/PlusIconInCircle/PlusIconInCircle';

interface IAccordionItemHeaderProps {
  header_name: string;
  showInner: boolean;
  opened: boolean;
}

const AccordionItemHeader: FC<IAccordionItemHeaderProps> = (props) => {
  let { header_name, showInner, opened } = props;
  return (
    <Flex
      sx={{
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}
    >
      <Text variant="h4_medium">{header_name}</Text>
      <Container
        variant="plus"
        sx={{
          flexShrink: 0,
          m: '0',
          borderRadius: '50%',
          borderColor: 'black',
          border: '1px solid',
          p: '5px',
        }}
      >
        {showInner && (
          <PlusIconInCircle
            condition={!opened}
            sx={{
              width: '100%',
              height: '100%',
              top: [-space.xs, 'xxxxxs'],
              filter: 'invert(100%)',
            }}
          />
        )}
      </Container>
    </Flex>
  );
};

export default AccordionItemHeader;
