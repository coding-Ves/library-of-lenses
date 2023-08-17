/* eslint-disable no-unused-vars */
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Button,
    Stack,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../services/auth.service.ts';
import useAuthStore, { resetUser } from '../../store/authStore.ts';
import { updateSnackbar } from '../../store/snackbarStore.ts';

const NavMenu = () => {
    const user = useAuthStore((s) => s.user);
    const userData = useAuthStore((s) => s.userData);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                resetUser();
            })
            .catch((error) => {
                updateSnackbar('error', error, true);
            });
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static' sx={{ height: '50px' }} color='secondary'>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}
            >
                <Stack direction='row' m={0.5}>
                    <Button component={Link} to={'/reviews'} variant='text'>
                        Reviews
                    </Button>
                    {userData?.role === 'admin' ? (
                        <Button component={Link} to={'/create-review'}>
                            Create Review
                        </Button>
                    ) : null}
                </Stack>
                {user ? (
                    <>
                        <IconButton
                            size='medium'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenUserMenu}
                            color='inherit'
                        >
                            <Avatar
                                sx={{ width: 30, height: 30 }}
                                alt={userData?.username}
                                src={userData?.avatarURL}
                            />
                        </IconButton>
                        <Menu
                            sx={{ mt: '43px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <IconButton
                            size='medium'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenUserMenu}
                            color='inherit'
                        >
                            <AccountCircle fontSize='large' />
                        </IconButton>
                        <Menu
                            sx={{ mt: '43px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem
                                sx={{ width: '150px' }}
                                component={Link}
                                to={'/register'}
                            >
                                Register
                            </MenuItem>

                            <MenuItem component={Link} to={'/login'}>
                                Login
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;
