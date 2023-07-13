import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
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
        resetUser();
        logoutUser();
        updateSnackbar('success', 'Logged out. See you later!', true);
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
        <AppBar position='static' sx={{ height: '60px' }} color='primary'>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    p: '5px',
                }}
            >
                <IconButton
                    size='medium'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    onClick={handleOpenNavMenu}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Menu
                    sx={{ mt: '50px' }}
                    id='menu-appbar'
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    <MenuItem sx={{ width: '150px' }} component={Link} to={'/'}>
                        Home
                    </MenuItem>
                    <MenuItem
                        sx={{ width: '150px' }}
                        component={Link}
                        to={'/reviews'}
                    >
                        Reviews
                    </MenuItem>
                </Menu>

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
                                sx={{ width: 35, height: 35 }}
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
                            <MenuItem
                                sx={{ width: '150px' }}
                                component={Link}
                                to={'/my-account'}
                            >
                                My Account
                            </MenuItem>
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
