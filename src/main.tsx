import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './theme/theme.ts';

import { RouterProvider } from 'react-router-dom';
import router from './components/Router/router.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <CssBaseline />
        </ThemeProvider>
    </React.StrictMode>
);
