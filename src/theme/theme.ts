import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#236793',
            light: '#287ab0',
            dark: '#2D4B67',
        },
        secondary: {
            main: '#cce3ef',
            light: '#D6E8F2',
            dark: '#8E9EA7',
            contrastText: '#3B3B3B',
        },
        error: {
            main: '##BF595C',
            light: '#CB7A7C',
            dark: '#853E40',
        },
        background: {
            paper: '#fff',
            default: '#EFF7F8',
        },
        divider: '#192039',
    },
    shape: {
        borderRadius: 20,
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#236793',
            light: '#287ab0',
            dark: '#2D4B67',
        },
        secondary: {
            main: '#cce3ef',
            light: '#D6E8F2',
            dark: '#8E9EA7',
            contrastText: '#3B3B3B',
        },
        error: {
            main: '##BF595C',
            light: '#CB7A7C',
            dark: '#853E40',
        },
        background: {
            paper: '#fff',
            default: '#EFF7F8',
        },
        divider: '#192039',
    },
    shape: {
        borderRadius: 20,
    },
});
