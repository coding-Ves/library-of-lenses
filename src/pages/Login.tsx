import { Box } from '@mui/material';
import LoginForm from '../components/Login/LoginForm.tsx';
import { LENS_BOARD_IMG_2 } from '../common/constants.ts';

const Login = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: 'primary.main',
                display: 'flex',
                backgroundImage: `url(${LENS_BOARD_IMG_2})`,
                backgroundSize: '50%',
                pt: 10,
            }}
        >
            <LoginForm />
        </Box>
    );
};

export default Login;
