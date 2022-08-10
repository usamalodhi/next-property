import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'poppins, sans-serif',
        color: '#000000',
        backgroundColor: '#FFFAFA',
      },
      a: { textDecoration: 'none !important' },
    },
    '.chakra-box': {
      // borderColor: 'red !important',
      opacity: 1,
      paddingRight: '5em',
    },
  },
  components: {},
  colors: {
    brand: {
      primary: '#FFFAFA',
      secondary: '#000000',
    },
  },
  layerStyles: {
    nav: {
      padding: '2',
      borderBottom: '2px',
      borderColor: 'gray.300',
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;
