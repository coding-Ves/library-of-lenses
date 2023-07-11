import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#272727',
            light: '#525252',
            dark: '#1B1B1B',
            contrastText: '#fff',
        },
        secondary: {
            main: '#F7F7FF',
            light: '#E5ECF3',
            dark: '#9CA2A8',
            contrastText: '#3B3B3B',
        },
        error: {
            main: '##BF595C',
            light: '#CB7A7C',
            dark: '#853E40',
        },
        background: {
            paper: '#fff',
            default: '#EEE5E9',
        },
        divider: '#192039',
    },
    shape: {
        borderRadius: 10,
    },
});
