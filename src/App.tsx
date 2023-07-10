import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Loader from './components/Loader/Loader.tsx';
import useLoadingStore from './store/loadingStore.ts';

// App.tsx is used as a Layout component for react router

const App = () => {
    const loading = useLoadingStore((s) => s.loading);

    return (
        <>
            {loading && <Loader />}
            <Typography variant='h1'>App.js outlet</Typography>
            <Outlet />
        </>
    );
};

export default App;
