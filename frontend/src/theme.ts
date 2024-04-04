import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#282928',
      },
    },
  },
  colors: {
    nugray: {
        50: '#949494',
        100: '#7e7f7e',
        200: '#696969',
        300: '#535453',
        400: '#3e3e3e',
        500: '#282928',
        600: '#242524',
        700: '#202120',
        800: '#1c1d1c',
        900: '#181918',
    },
    nured: {
        50: '#FFA18F',
        100: '#FF8273',
        200: '#FF6259',
        300: '#FF403F',
        400: '#dc1227',
        500: '#c61023',
        600: '#b00e1f',
        700: '#9a0d1b', 
        800: '#840b17',
      },
  },
});

export default theme;
