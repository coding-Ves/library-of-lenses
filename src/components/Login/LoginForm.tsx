import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Link as MuiLink,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth.service.ts';
import errorHandler from '../../services/errors.service.ts';
import { updateSnackbar } from '../../store/snackbarStore.ts';
import GlobalSnackbar from '../GlobalSnackbar/GlobalSnackbar.tsx';

export const LoginForm = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();

    type FormData = {
        email: string;
        password: string;
    };

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setButtonLoading(true);
        loginUser(data.email, data.password)
            .then(() => {
                setTimeout(() => {
                    navigate('/');
                    updateSnackbar('success', 'message', false);
                }, 1000);
                updateSnackbar('success', 'Login Successful!', true);
            })
            .catch((error) => {
                alert(error);
                const message = errorHandler(error);
                updateSnackbar('error', message, true);
                setButtonLoading(false);
            })
            .finally(() => {
                setButtonLoading(false);
            });
    };

    return (
        <>
            <GlobalSnackbar />
            <Container component='main' maxWidth='sm'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'background.paper',
                        p: 5,
                        m: 3,
                        borderRadius: '12px',
                    }}
                >
                    <Link to={'/'}>
                        <Avatar
                            src='/public/white_logo_transparent.png'
                            alt='logo image'
                            sx={{
                                width: '70px',
                                height: '70px',
                                mb: 4,
                            }}
                        />
                    </Link>
                    <Typography component='h1' variant='h5'>
                        Login
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete='email'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email'
                                    autoFocus
                                    {...register('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label='Password'
                                    required
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                    {...register('password')}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            disabled={buttonLoading}
                            sx={{ mt: 3, mb: 2, height: '40px' }}
                        >
                            {!buttonLoading ? (
                                'Login'
                            ) : (
                                <CircularProgress color='secondary' size={20} />
                            )}
                        </Button>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <MuiLink
                                    component={Link}
                                    to='/register'
                                    variant='body2'
                                >
                                    Don't have an account? Register.
                                </MuiLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default LoginForm;
