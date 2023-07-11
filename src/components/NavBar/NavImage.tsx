import { Stack, Box, CardMedia, Avatar, Toolbar } from '@mui/material';
import { LENS_BOARD_NAV_IMAGE } from '../../common/constants.ts';
import { Link } from 'react-router-dom';

const NavImage = () => {
    return (
        <CardMedia
            component='div'
            image={LENS_BOARD_NAV_IMAGE}
            sx={{
                minHeight: '160px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
                backgroundPosition: 'top',
                backgroundRepeat: 'repeat-x',
            }}
        >
            <Link to='/'>
                <Avatar
                    src='/public/white_logo_transparent.png'
                    alt='logo image'
                    sx={{
                        width: '100px',
                        height: '100px',
                        position: 'center',
                        bottom: '30px',
                    }}
                />
            </Link>
        </CardMedia>
    );
};

export default NavImage;
