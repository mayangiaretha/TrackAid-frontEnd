import { createTheme } from '@mui/material/styles';

export const COLORS = {
  BRAND_1: '#006623',
  BRAND_2: '#B9CDC2',
  BRAND_3: '#EDF1EB',
  BRAND_4: '#F1F6EF',
  WHITE_1: '#FFFFFF',
  WHITE_2: '#FAFAFA',
  WHITE_3: '#F0F0F0',
  GREY_1: '#9D9E9E',
  GREY_2: '#B2B3B3',
  GREY_3: '#C8C8C8',
  GREY_4: '#DBDBDB',
  BLACK_1: '#040A0D',
  BLACK_2: '#1A1F22',
  BLACK_3: '#303436',
  BLACK_4: '#46494B',
  BLACK_5: '#5B5E60',
  BLACK_6: '#000000',
  WARNING_BG: '#FBF2D4',
  WARNING_TEXT: '#3C2B00',
  ERROR: '#B40000',
  INFO: '#FCF7FB',
  PURPLE: '#EDA0E6',
};

// Define font styles to be used throughout the app
export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    NUNITO: ['Nunito', 'sans-serif'].join(','),
  },
  LINE_HEIGHT: {
    HEADER: '110%',
    BODY: '140%',
  },
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  SIZES: {
    36: '2.25rem',
    28: '1.75rem',
    24: '1.5rem',
    20: '1.25rem',
    16: '1rem',
    14: '0.875rem',
    13: '0.8125rem',
    12: '0.75rem',
  },
  STYLE: {
    ITALIC: 'italic',
  },
};

export const BORDERS = {
  BORDER_1: `0.0625rem solid ${COLORS.WHITE_3}`,
  BORDER_2: `0.0625rem solid ${COLORS.GREY_4}`,
  BORDER_3: `0.125rem solid ${COLORS.GREY_4}`,
  BORDER_4: `0.125rem solid ${COLORS.BLACK_1}`,
  BORDER_5: `0.0625rem solid ${COLORS.GREY_2}`,
  BORDER_ERROR: `0.0625rem solid ${COLORS.ERROR}`,
};

/**
 * UX spacing defaults to 4px (converted to rem)
 * Please do not export. Use "theme.spacing(1)" instead
 */
const SPACE_UNIT_IN_REM = 0.25;

/**
 * Base theme allows us to make use of options that are provided by default MUI
 * and custom spacing and breakpoints in lyvTheme declaration below
 */
const baseTheme = createTheme({
  spacing: (factor) => `${SPACE_UNIT_IN_REM * factor}rem`,
});

// Theme used throughout the app
export const theme = createTheme({
  ...baseTheme,
  mixins: {
    /**
     * Mixin for flex container - hack to prevent content grow outside modal
     */
    flexboxOverflowHack: {
      minHeight: 0,
      minWidth: 0,
    },
  },
  palette: {
    text: {
      primary: COLORS.BLACK_1,
      secondary: COLORS.BLACK_5,
      disabled: COLORS.GREY_4,
    },
    primary: {
      main: COLORS.BRAND_1,
      light: COLORS.BRAND_2,
    },
    secondary: {
      main: COLORS.BLACK_1,
    },
    success: {
      main: COLORS.BLACK_3,
      contrastText: COLORS.WHITE_3,
    },
    error: {
      main: COLORS.ERROR,
    },
    warning: {
      main: COLORS.WARNING_BG,
      contrastText: COLORS.WARNING_TEXT,
    },
    info: {
      main: COLORS.BRAND_1,
    },
  },
  typography: {
    fontFamily: FONT.FAMILY.NUNITO,
    h1: {
      fontSize: FONT.SIZES[36],
      lineHeight: FONT.LINE_HEIGHT.HEADER,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h2: {
      fontSize: FONT.SIZES[28],
      lineHeight: FONT.LINE_HEIGHT.HEADER,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h3: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT.HEADER,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h4: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT.HEADER,
      fontWeight: FONT.WEIGHT.SEMIBOLD,
    },
    h5: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT.HEADER,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    subtitle1: {
      fontSize: FONT.SIZES[14],
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    body1: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT.BODY,
      fontWeight: FONT.WEIGHT.MEDIUM,
    },
    body2: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT.BODY,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    caption: {
      fontSize: FONT.SIZES[12],
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    button: {
      textTransform: 'none',
      fontSize: FONT.SIZES[16],
      fontWeight: FONT.WEIGHT.SEMIBOLD,
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          fontStyle: 'italic',
          fontWeight: FONT.WEIGHT.REGULAR,
          fontSize: FONT.SIZES[14],
          lineHeight: FONT.LINE_HEIGHT.BODY,
        },
      },
    },
  },
});
