import { ThemeUIStyleObject } from '@theme-ui/css';

export const grids: Record<string, ThemeUIStyleObject> = {
  default: {
    gridTemplateColumns: [null, 'repeat(12, 1fr)'],
    gap: [null, 'm', null, 'xl'],
  },
  main: {
    gridTemplateColumns: [null, '.5fr 1fr 1fr', null, 'repeat(3, 1fr)'],
    gap: 0,
    columnGap: '3%',
  },
  mainBanner: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 0,
    columnGap: '3%',
  },
};
