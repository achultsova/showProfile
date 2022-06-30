import { FC } from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';
import SvgWrapper from '../../shared/components/common/SvgWrapper/Svgwrapper';
import Arrow from '../../assets/icons/link-arrow.svg';

export type EventItemType = {
  date: string;
  time: string;
  name: string;
};

const eventsData = [
  {
    date: '26.02.22',
    time: '19: 00',
    name: 'Change Data Capture',
  },
  {
    date: '26.02.22',
    time: '19: 00',
    name: 'Change Data Capture',
  },
  {
    date: '26.02.22',
    time: '19: 00',
    name: 'Change Data Capture',
  },
];

const EventItem: FC<Array<EventItemType>> = (eventsData) => {
  return (
    <>
      <Flex sx={{ flexDirection: 'column' }}>
        {eventsData.map((item, index) => {
          return (
            <Link
              variant="b2"
              key={index}
              href="##"
              sx={{
                textDecoration: 'none',
                color: 'black',
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid',
                borderColor: 'black',
                alignItems: 'center',
                pt: ['md_5_7', null, null, 'dl_5_11'],
                pb: ['md_24_36', null, null, 'dl_16_36'],
              }}
            >
              <Flex sx={{ flexDirection: ['column', null, null, 'row'] }}>
                <Box>
                  <Text
                    variant="h5_medium"
                    sx={{ mr: ['md_11_16', null, null, 'dl_11_24'] }}
                  >
                    {item.date}
                  </Text>
                  <Text
                    variant="h5_medium"
                    sx={{ mr: [null, null, null, 'dl_36_81'] }}
                  >
                    {item.time}
                  </Text>
                </Box>
                <Text variant="h5_medium">{item.name}</Text>
              </Flex>

              <SvgWrapper width={[16, 17, 14, 20]} sx={{ alignSelf: 'start' }}>
                <Arrow />
              </SvgWrapper>
            </Link>
          );
        })}
      </Flex>
    </>
  );
};

export default EventItem;
