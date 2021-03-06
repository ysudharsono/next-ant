import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#607D8B' },
      secondary: { main: '#37474F' },
      // Custom color variables
      customBackground: '#f4f5f7',
      drawerColor: '#272c36',
    },
    shape: { borderRadius: 25 }, // default is 4
    spacing: 8, // default is 8
    typography: {
      fontSize: 14, // default is 14
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Manrope"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })
);

export default theme;
