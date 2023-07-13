import { Typography, Box } from '@mui/material';
import RegistrationForm from '../components/Register/RegistrationForm.tsx';
import { LENS_BOARD_IMG_1 } from '../common/constants.ts';

const Register = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: 'primary.main',
                display: 'flex',
                backgroundImage: `url(${LENS_BOARD_IMG_1})`,
                backgroundSize: '50%',
                pt: 10,
            }}
        >
            <RegistrationForm />
        </Box>
    );
};

export default Register;
