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
import {
    getUserByUID,
    getUserByUsername,
} from '../../services/user.service.ts';
import { updateUser, updateUserData } from '../../store/authStore.ts';
import { updateSnackbar } from '../../store/snackbarStore.ts';
import GlobalSnackbar from '../GlobalSnackbar/GlobalSnackbar.tsx';
import useAuthStore from '../../store/authStore.ts';

export const LoginForm = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const user = useAuthStore((s) => s.user);
    const userData = useAuthStore((s) => s.userData);
    const navigate = useNavigate();

    interface IFormInputs {
        email: string;
        password: string;
    }

    type FormData = {
        email: string;
        password: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setButtonLoading(true);
        loginUser(data.email, data.password)
            .then((credential) => {
                console.log(credential.user);
                updateUser(credential.user);
                getUserByUID(credential.user.uid)
                    .then((snapshot) => {
                        updateUserData(
                            snapshot.val()[Object.keys(snapshot.val())[0]]
                        );
                    })
                    .catch((error) => {
                        updateSnackbar('error', error.message, true);
                    });
            })
            .then(() => {
                setTimeout(() => {
                    navigate('/');
                    updateSnackbar('success', 'message', false);
                }, 5000);
                updateSnackbar('success', 'Login Successful!', true);
            })
            .catch((error) => {
                updateSnackbar('error', error.message, true);
                alert(error.message);
            });
        // .finally(() => {
        //     setButtonLoading(false);
        //     updateSnackbar('success', 'message', false);
        // });
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
                        noValidate
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
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label='Password'
                                    required
                                    type='password'
                                    id='password'
                                    autoComplete='new-password'
                                    {...register('password')}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
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
