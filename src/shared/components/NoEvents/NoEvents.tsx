import { FC } from 'react';
import { Text, Box } from 'theme-ui';

const NoEvents: FC = () => {
  return (
    <Box>
      <Text variant="h3">
        Здесь будет отображаться список ивентов, на которые вы
        зарегистрировались.
      </Text>
    </Box>
  );
};

export default NoEvents;
