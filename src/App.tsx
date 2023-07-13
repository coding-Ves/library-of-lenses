import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/config/firebase.ts';
import GlobalSnackbar from './components/GlobalSnackbar/GlobalSnackbar.tsx';
import Loader from './components/Loader/Loader.tsx';
import NavBar from './components/NavBar/NavBar.tsx';

import useLoadingStore from './store/loadingStore.ts';

// App.tsx is used as a Layout component for react router

const App = () => {
    const loading = useLoadingStore((s) => s.loading);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user === null) {
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            {loading && <Loader />}
            <NavBar />
            <Typography variant='h1'>App.js outlet</Typography>
            <Outlet />
            <GlobalSnackbar />
        </>
    );
};

export default App;
