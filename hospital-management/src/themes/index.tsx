import { MantineThemeOverride } from '@mantine/core';
import fjallaOne from '@fonts/FjallaOne-Regular.ttf';

export const defaultTheme: MantineThemeOverride = {
  colors: {
    dark: [
      '#E8E8E8',
      '#767676',
      '#656565',
      '#545454',
      '#4c4c4c',
      '#434343',
      '#3b3b3b',
      '#323232',
      '#2a2a2a',
      '#080808',
    ],
    light: [
      '#FFFFFF',
      '#F8F9FA',
      '#F1F3F5',
      '#E9ECEF',
      '#DEE2E6',
      '#CED4DA',
      '#ADB5BD',
      '#868E96',
      '#495057',
      '#343A40',
    ],
    blue: [
      '#B2DDED',
      '#709dcf',
      '#5e90c9',
      '#B2DDED',
      '#4c84c3',
      '#4477b0',
      '#3d6a9c',
      '#355c89',
      '#2e4f75',
      '#264262',
    ],
    red: [
      '#FFF5F5',
      '#FFE3E3',
      '#FFC9C9',
      '#FFA8A8',
      '#555555',
      '#FF6B6B',
      '#FA5252',
      '#F03E3E',
      '#E03131',
      '#B00020',
    ],
  },

  fontSizes: {
    xxxs: '13px',
    xxs: '14px',
    xs: '15px',
    s: '16px',
    m: '18px',
    xm: '20px',
    xxm: '23px',
    l: '24px',
    xl: '28px',
    xxl: '30px',
    xxxl: '40px',
  },

  fontFamily: 'Open Sans,  sans-serif',

  other: {
    globalStyles: () => ({
      '@font-face': {
        fontFamily: 'Fjalla One',
        src: `url('${fjallaOne}') format("woff2")`,
        fontWeight: 600,
        fontStyle: 'normal',
      },
    }),

    fonts: ['Roboto', 'Montserrat', 'Fjalla One'],
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
  },
};
