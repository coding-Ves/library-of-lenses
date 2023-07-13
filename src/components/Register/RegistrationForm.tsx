import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Link as MuiLink,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
    checkUniqueEmail,
    checkUniqueUsername,
    registerUser,
} from '../../services/auth.service.ts';
import { createUser, getUserByUsername } from '../../services/user.service.ts';
import { updateUser, updateUserData } from '../../store/authStore.ts';
import { updateSnackbar } from '../../store/snackbarStore.ts';
import GlobalSnackbar from '../GlobalSnackbar/GlobalSnackbar.tsx';
import registrationValidationSchema from './registrationFormScheme.tsx';

export const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);

    const navigate = useNavigate();

    interface IFormInputs {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    type FormData = {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(registrationValidationSchema),
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setButtonLoading(true);
        const uniqueEmail = checkUniqueEmail(data.email);
        const uniqueUsername = checkUniqueUsername(data.username);
        if (!uniqueEmail) {
            const error = new Error();
            error.name = 'auth/username-already-exists';
            error.message = 'Username has already been taken!';
            throw error;
        }
        if (!uniqueUsername) {
            const error = new Error();
            error.name = 'auth/user-already-exists';
            error.message = 'Username has already been taken!';
            throw error;
        }
        return registerUser(data.email, data.password)
            .then((credential) => {
                updateUser(credential.user);
                return createUser(
                    data.username,
                    credential.user.uid,
                    data.email
                );
            })
            .then(() => {
                getUserByUsername(data.username).then((user) => {
                    updateUserData(user.val());
                });
            })
            .then(() => {
                updateSnackbar('success', 'Registration Complete!', true);
            })
            .then(() => {
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((error) => {
                updateSnackbar('error', error.message, true);
            })
            .finally(() => {
                setButtonLoading(false);
                updateSnackbar('success', 'message', false);
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
                        Register
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
                                    autoComplete='username'
                                    required
                                    fullWidth
                                    id='username'
                                    label='Username'
                                    autoFocus
                                    {...register('username')}
                                    error={!!errors.username}
                                    helperText={errors.username?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id='email'
                                    required
                                    label='Email Address'
                                    autoComplete='email'
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
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    autoComplete='new-password'
                                    {...register('password')}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                    edge='end'
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label='Confirm Password'
                                    id='confirmPassword'
                                    autoComplete='new-password'
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    {...register('confirmPassword')}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    onClick={() =>
                                                        setShowConfirmPassword(
                                                            !showConfirmPassword
                                                        )
                                                    }
                                                    edge='end'
                                                >
                                                    {showConfirmPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
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
                                'Register'
                            ) : (
                                <CircularProgress color='secondary' size={20} />
                            )}
                        </Button>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <MuiLink
                                    component={Link}
                                    to='/login'
                                    variant='body2'
                                >
                                    Already have an account? Sign in
                                </MuiLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default RegistrationForm;
