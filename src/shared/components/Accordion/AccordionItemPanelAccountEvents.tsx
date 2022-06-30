import { FC, useState } from 'react';
import { Flex, Grid, Text, Link } from 'theme-ui';
import SvgWrapper from '../common/SvgWrapper/Svgwrapper';
import Arrow from '../../assets/icons/arrow-active-link.svg';
import { useRouter } from 'next/router';

const AccordionItemPanelAccountEvents: FC = () => {
  const router = useRouter();
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [isPast, setIsPast] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <Grid
        sx={{
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            gridColumn: ['1/4', '2/4', null, '1/4'],
            mt: ['md_11_16', null, null, 'dl_11_24'],
          }}
        >
          <Link
            variant="b2"
            sx={{ textDecoration: 'none', color: 'black', display: 'flex' }}
            href="##"
            onClick={(e) => {
              e.stopPropagation();
              setIsUpcoming(!isUpcoming);
            }}
          >
            <SvgWrapper
              width={[11, 11, 7, 11]}
              sx={{
                mr: ['7px', null, null, 'dl_5_11'],
                display: isUpcoming ? 'flex' : 'none',
              }}
            >
              <Arrow />
            </SvgWrapper>
            <Text>Upcoming events</Text>
          </Link>
          <Link
            variant="b2"
            sx={{ textDecoration: 'none', color: 'black', display: 'flex' }}
            href="##"
            onClick={(e) => {
              e.stopPropagation();
              setIsPast(!isPast);
            }}
          >
            <SvgWrapper
              width={[11, 11, 7, 11]}
              sx={{
                mr: ['7px', null, null, 'dl_5_11'],
                display: isPast ? 'flex' : 'none',
              }}
            >
              <Arrow />
            </SvgWrapper>
            <Text>Past events</Text>
          </Link>
          <Link
            variant="b2"
            sx={{ textDecoration: 'none', color: 'black', display: 'flex' }}
            href="##"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <SvgWrapper
              width={[11, 11, 7, 11]}
              sx={{
                mr: ['7px', null, null, 'dl_5_11'],
                display: isFavorite ? 'flex' : 'none',
              }}
            >
              <Arrow />
            </SvgWrapper>
            <Text>Favorites</Text>
          </Link>
        </Flex>
      </Grid>
    </>
  );
};

export default AccordionItemPanelAccountEvents;
