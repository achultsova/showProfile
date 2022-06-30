/** @jsxImportSource theme-ui */
import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../shared/configs/theme';
import '../shared/configs/styles/global.css';
import SimpleReactLightbox from 'simple-react-lightbox';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = (Component as any).getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <SimpleReactLightbox>
        {getLayout(<Component {...pageProps} />)}
      </SimpleReactLightbox>
    </ThemeProvider>
  );
};

export default MyApp;
