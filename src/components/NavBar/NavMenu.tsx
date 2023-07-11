import {
    AppBar,
    Toolbar,
    Container,
    Tooltip,
    MenuItem,
    Button,
    Menu,
    IconButton,
    Typography,
    Avatar,
    Box,
    Divider,
} from '@mui/material';
import { useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import useAuthStore from '../../store/authStore.ts';
import { logoutUser } from '../../services/auth.service.ts';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const user = useAuthStore((s) => s.user);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
                                to={'/my-account'}
                            >
                                My Account
                            </MenuItem>
                            <MenuItem onClick={logoutUser}>Logout</MenuItem>
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
