import { FC } from 'react';
import { Flex, Text } from 'theme-ui';
import Button from '../../shared/components/common/buttons/Button';

const DeleteAccount: FC = () => {
  return (
    <Flex
      sx={{ flexDirection: 'column'}}
    >
      <Text variant="h3" sx={{pb: ['md_24_36', null, null, 'dl_24_54'] }}>Are you sure? &#41;:</Text>
      <Button variant="primaryWidth">Yeap, delete</Button>
    </Flex>
  );
};

export default DeleteAccount;
