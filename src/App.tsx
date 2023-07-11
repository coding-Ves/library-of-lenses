import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Loader from './components/Loader/Loader.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import useLoadingStore from './store/loadingStore.ts';

// App.tsx is used as a Layout component for react router

const App = () => {
    const loading = useLoadingStore((s) => s.loading);

    return (
        <>
            {loading && <Loader />}
            <NavBar />
            <Typography variant='h1'>App.js outlet</Typography>
            <Outlet />
        </>
    );
};

export default App;
