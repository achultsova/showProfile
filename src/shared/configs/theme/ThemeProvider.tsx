import React, { FC, Fragment } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'theme-ui';

import theme from './theme';

import GlobalStyles from './GlobalStyles';

const ThemeProvider: FC = ({ children }) => {
  return (
    <DefaultThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles theme={theme} />
        {children}
      </Fragment>
    </DefaultThemeProvider>
  );
};

export default ThemeProvider;
