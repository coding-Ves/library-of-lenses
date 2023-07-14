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
            main: '#BF595C',
            light: '#CB7A7C',
            dark: '#853E40',
        },
        success: {
            main: '##18A558',
            light: '#A3EBB1',
            dark: '#116530',
        },
        info: {
            main: '##48cae4',
            light: '#90e0ef',
            dark: '#00b4d8',
        },
        warning: {
            main: '#f4a261',
            light: '#e9c46a',
            dark: '#e76f51',
        },
        background: {
            paper: '#fff',
            default: '#EEE5E9',
        },
        divider: '#192039',
    },
    components: {
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: '#BF595C',
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                standardSuccess: {
                    backgroundColor: '#18A558',
                    color: 'white',
                },
                standardError: {
                    backgroundColor: '#BF595C',
                    color: 'white',
                },
                standardWarning: {
                    backgroundColor: '#f4a261',
                    color: 'white',
                },
                standardInfo: {
                    backgroundColor: '#9CA2A8',
                    color: 'black',
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: '#90e0ef',
                },
                iconHover: {
                    color: 'primary.light',
                },
                iconEmpty: {
                    color: 'paper',
                },
                iconFocus: {
                    color: '#00b4d8',
                },
            },
        },
    },

    shape: {
        borderRadius: 10,
    },
});
