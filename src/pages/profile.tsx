import { FC, useState } from 'react';
import { Box, Container, Grid, Link, Text } from 'theme-ui';
import Accordion from '../shared/components/Accordion';
import AccordionItemPanelAccountEvents from '../shared/components/Accordion/AccordionItemPanelAccountEvents';
import AccordionItemPanelAccountSettings from '../shared/components/Accordion/AccordionItemPanelAccountSettings';
import Button from '../shared/components/common/buttons/Button';

const initial = {
  bg: 'white',
  color: 'black',
  data: [
    {
      headerName: 'Events',
      panel: (
        <div>
          <AccordionItemPanelAccountEvents />
        </div>
      ),
    },
    {
      headerName: 'Settings',
      panel: (
        <div>
          <AccordionItemPanelAccountSettings />
        </div>
      ),
    },
  ],
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

const Profile = ({ children }) => {
  return (
    <Container
      as="section"
      variant="containerXY"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid
        sx={{
          display: 'grid',
          gap: 0,
          gridTemplateColumns: [null, null, null, 'repeat(3, 1fr)'],
          columnGap: '3%',
        }}
      >
        <Box
          sx={{
            gridColumn: ['1/4', null, null, '1/2'],
            borderColor: 'black',
            borderTop: '1px solid',
          }}
        >
          <Accordion
            bg={initial.bg}
            color={initial.color}
            isFilter={false}
            data={initial.data}
          />
        </Box>
        <Box className="lalala" sx={{ gridColumn: [null, null, null, '2/4'] }}>
          {children}
        </Box>
      </Grid>
      <Button
        variant="logoutButton"
        sx={{
          gridColumn: '1/2',
          color: 'black',
          mt: 'auto',
        }}
      >
        <Text variant="b2">Log out</Text>
      </Button>
    </Container>
  );
};

export default Profile;
