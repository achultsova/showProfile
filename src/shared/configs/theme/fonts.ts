import { TextStyles } from './types';
import { fallbackFontFamily, fontSizes } from './fontSizes';
import { adaptive } from '../styles/utils';
import { breakpoints } from './breakpoints';

/*
  Patron font family - please reference https://assets.choco.com/fonts/Patron/font.css

  Our previous solution was to have "Patron Medium" and "Patron Light" font families, 
  that by default have the styling related to their font-weight

  In case the fonts will fail to load, we have a fallback font family list of fonts to show

  THE PROBLEM WE HAD:
  As the fonts have the styling related to their font-weight, when we fail to load them and 
  we fallback this fallback will never be bold because the typography doesn't set a font-weight 

  THE SOLUTION WE FOUND:
  We have changed in the font.css file the definition of the font face by calling
  all the different font families with the name "Patron" and specifying the different styling
  for them so we know what to reference

  REAL EXAMPLE:

  @font-face {
    src: url("PatronWEB-Medium.woff?v=01") format("woff"),
      url("PatronWEB-Medium.woff2?v=01") format("woff2");
    
    font-family: "Patron";
    font-weight: 700;
  }

  @font-face {
    src: url("PatronWEB-Light.woff?v=01") format("woff"),
    url("PatronWEB-Light.woff2?v=01") format("woff2");
    
    font-family: "Patron";
    font-weight: 400;
  }

  now, whenever i want to reference "Patron Medium" i just need to specify
  
  `font-family: "Patron" AND font-weight: 700 (same as in the font.css)`
*/

export const text: TextStyles = {
  default: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    textTransform: 'inherit',
    fontWeight: 'inherit',
  },
  // Надпись iTechArt Events
  H1: {
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    fontSize: ['8', '9', '10'],
    fontWeight: '300',
  },
  // Бегущая строка
  H2: {
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    fontSize: [8, 9, 10],
    fontWeight: '300',
  },
  // Заголовки
  H3: {
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    fontSize: [6, 7, 8],
    fontWeight: 300,
  },
  // Подзаголовки
  H4: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontSize: [3, 4, 5],
  },
  // Блок описания
  H5: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontSize: [2, 3],
    fontWeight: 300,
  },
  // Текст
  H6: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontSize: [1, 2, 3],
    fontWeight: 300,
  },
  // Название фильтра
  FilterCategory: {
    fontFamily: `IBM Plex Sans`,
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 500,
  },
  // Кнопка сброса
  FilterReset: {
    fontFamily: `IBM Plex Sans`,
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 300,
  },

  // Название элемента фильтра
  FilterButton: {
    fontFamily: `IBM Plex Sans`,
    fontSize: '19px',
    lineHeight: '28px',
    fontWeight: 300,
  },
  NameCategoruEvents: {
    fontFamily: `IBM Plex Serif`,
    fontSize: '19px',
    lineHeight: '28px',
    fontWeight: 300,
  },

  Body: {
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 300,
  },
  LinksFooter: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontSize: [0, 1],
    fontWeight: 300,
  },
  // Спикер
  Text: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontSize: [0, 3],
    fontWeight: 500,
  },
  Button: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontSize: ['Large', 'Regular'],
    fontWeight: 500,
  },
  Ticker: {
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    fontWeight: '300',
    fontSize: [6, 7, 9],
  },
  Speakers: {
    fontFamily: `IBM Plex Sans`,
    fontWeight: 500,
    fontSize: [3, 5],
  },
  f36t54t81: {
    fontFamily: `IBM Plex Serif`,
    fontWeight: '300',
    fontSize: [
      adaptive(fontSizes.f36, fontSizes.f54, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f54,
        fontSizes.f81,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f24t36t81: {
    fontFamily: `IBM Plex Serif`,
    fontWeight: '300',
    fontSize: [
      adaptive(fontSizes.f24, fontSizes.f36, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f36,
        fontSizes.f81,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f19t24: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontWeight: '300',
    fontSize: [
      'Small',
      null,
      null,
      adaptive(
        fontSizes.f19,
        fontSizes.f24,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f19t30: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontWeight: '300',
    fontSize: [
      'Small',
      null,
      null,
      adaptive(
        fontSizes.f19,
        fontSizes.f30,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f16t19: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontWeight: '300',
    fontSize: [
      'xSmall',
      null,
      null,
      adaptive(
        fontSizes.f16,
        fontSizes.f19,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f16t24: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontWeight: '300',
    fontSize: [
      'xSmall',
      null,
      null,
      adaptive(
        fontSizes.f16,
        fontSizes.f24,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f16t30: {
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    fontWeight: '300',
    fontSize: [
      'xSmall',
      null,
      null,
      adaptive(
        fontSizes.f16,
        fontSizes.f30,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },
  f36t81: {
    fontFamily: `IBM Plex Serif`,
    fontWeight: '300',
    fontSize: [
      'xLarge',
      null,
      null,
      adaptive(
        fontSizes.f36,
        fontSizes.f81,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
  },

  //New variants, based on Scale Strategy
  h1: {
    fontSize: [
      adaptive(fontSizes.f54, fontSizes.f130, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f81,
        fontSizes.f170,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    lineHeight: 1.25,
    fontWeight: 300,
  },
  h2: {
    fontSize: [
      adaptive(fontSizes.f54, fontSizes.f100, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f45,
        fontSizes.f130,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    lineHeight: 1.25,
    fontWeight: 300,
  },
  h3: {
    fontSize: [
      adaptive(fontSizes.f36, fontSizes.f54, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f30,
        fontSizes.f81,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    lineHeight: 1.25,
    fontWeight: 300,
  },
  h4_light: {
    fontSize: [
      adaptive(fontSizes.f27, fontSizes.f30, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f22,
        fontSizes.f36,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  h4_medium: {
    fontSize: [
      adaptive(fontSizes.f27, fontSizes.f30, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f22,
        fontSizes.f36,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  h5_light: {
    fontSize: [
      adaptive(fontSizes.f24, fontSizes.f27, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f19,
        fontSizes.f30,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  h5_medium: {
    fontSize: [
      adaptive(fontSizes.f24, fontSizes.f27, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f19,
        fontSizes.f30,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  b1_light: {
    fontSize: [
      adaptive(fontSizes.f16, fontSizes.f27, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f19,
        fontSizes.f30,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  b1_medium: {
    fontSize: [
      adaptive(fontSizes.f16, fontSizes.f27, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f19,
        fontSizes.f30,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  b2: {
    fontSize: [
      adaptive(fontSizes.f19, fontSizes.f22, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f16,
        fontSizes.f24,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  b3_light: {
    fontSize: [
      adaptive(fontSizes.f14, fontSizes.f16, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f11,
        fontSizes.f19,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  b3_medium: {
    fontSize: [
      adaptive(fontSizes.f14, fontSizes.f16, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f11,
        fontSizes.f19,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  Marquee: {
    fontSize: [
      adaptive(fontSizes.f45, fontSizes.f81, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f36,
        fontSizes.f120,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    lineHeight: 1.25,
    fontWeight: 300,
  },
  BigFigures: {
    fontSize: [
      adaptive(fontSizes.f81, fontSizes.f100, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f67,
        fontSizes.f130,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
  },
  ContactForm: {
    fontSize: [
      adaptive(fontSizes.f16, fontSizes.f19, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f14,
        fontSizes.f22,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
  },
  Caption: {
    fontSize: [
      adaptive(fontSizes.f11, fontSizes.f11, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f7,
        fontSizes.f11,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
  },
  Headline_horizontal: {
    fontSize: [
      adaptive(fontSizes.f30, fontSizes.f45, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f30,
        fontSizes.f81,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    lineHeight: 1.25,
  },
  Headline_vertical: {
    fontSize: [fontSizes.f36],
    fontFamily: `IBM Plex Serif,${fallbackFontFamily}`,
    lineHeight: 1.25,
  },
  Books_cat: {
    fontSize: [
      adaptive(fontSizes.f11, fontSizes.f16, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f16,
        fontSizes.f24,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  Books_speaker: {
    fontSize: [
      adaptive(fontSizes.f11, fontSizes.f16, 375, breakpoints.laptop),
      null,
      null,
      adaptive(
        fontSizes.f16,
        fontSizes.f24,
        breakpoints.laptop,
        breakpoints.largeScreen
      ),
    ],
    fontFamily: `IBM Plex Sans,${fallbackFontFamily}`,
    lineHeight: 1.5,
    fontWeight: 200,
  },
};
