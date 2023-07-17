import { Typography } from '@mui/material';
import useAuthStore from '../store/authStore.ts';

const Welcome = () => {
    const user = useAuthStore((s) => s.user);

    return (
        <>
            <Typography variant='h1'>Welcome</Typography>
        </>
    );
};

export default Welcome;
