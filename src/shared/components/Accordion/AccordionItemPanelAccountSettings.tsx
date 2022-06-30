import { FC, useState } from 'react';
import { Flex, Grid, Link, Text } from 'theme-ui';
import SvgWrapper from '../common/SvgWrapper/Svgwrapper';
import Arrow from '../../assets/icons/arrow-active-link.svg';
import { useRouter } from 'next/router';

const AccordionItemPanelAccountSettings: FC = () => {
  const router = useRouter();
  const [isInfo, setIsInfo] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selected, setSelectedComponent] = useState('none');
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
              setIsInfo(!isInfo);
            }}
          >
            <SvgWrapper
              width={[11, 11, 7, 11]}
              sx={{
                mr: ['7px', null, null, 'dl_5_11'],
                display: isInfo ? 'flex' : 'none',
              }}
            >
              <Arrow />
            </SvgWrapper>
            <Text>Personal information</Text>
          </Link>
          <Link
            variant="b2"
            sx={{ textDecoration: 'none', color: 'black', display: 'flex' }}
            href="/delete"
            onClick={(e) => {
              e.stopPropagation();
              setIsDelete(!isDelete);
              setSelectedComponent('DeleteAccount');
            }}
          >
            <SvgWrapper
              width={[11, 11, 7, 11]}
              sx={{
                mr: ['7px', null, null, 'dl_5_11'],
                display: isDelete ? 'flex' : 'none',
              }}
            >
              <Arrow />
            </SvgWrapper>
            <Text>Delete account</Text>
          </Link>
        </Flex>
      </Grid>
    </>
  );
};

export default AccordionItemPanelAccountSettings;
