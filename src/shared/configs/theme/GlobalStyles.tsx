import React, { FC } from 'react';
import { Global, css } from '@emotion/react';
import { normalize } from 'polished';

import { ThemeType } from './index';

type GlobalStylesProps = {
  theme: ThemeType;
};

const GlobalStyles: FC<GlobalStylesProps> = ({ theme }) => (
  <Global
    styles={css`
      ${normalize()},
      * {
        outline: 0;
        ${theme.text.Body};
      }
      html {
        height: 100%;
      }
      body {
        display: flex;
        height: 100%;
        width: 100%;
        overscroll-behavior-y: 'none';
      }
      #root {
        display: flex;
        flex: auto;
      }

      input[type='search']::-webkit-search-decoration,
      input[type='search']::-webkit-search-cancel-button,
      input[type='search']::-webkit-search-results-button,
      input[type='search']::-webkit-search-results-decoration {
        display: none;
      }
    `}
  />
);

export default GlobalStyles;
