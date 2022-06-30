import {
  get,
  ThemeUIContextValue,
  useThemeUI,
  ThemeUIStyleObject as ThemeUIStyles,
} from 'theme-ui';
import { useResponsiveValue } from '@theme-ui/match-media';

import theme, { ExactThemeType } from './theme';

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactThemeType;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;
export { useResponsiveValue };

export { theme };
export type ThemeType = ExactThemeType;
export type ThemeUIStyleObject = ThemeUIStyles;
export { default as GlobalStyles } from './GlobalStyles';
export { default as ThemeProvider } from './ThemeProvider';

export { get };
