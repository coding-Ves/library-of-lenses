import { Avatar, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { LENS_BOARD_NAV_IMAGE } from '../../common/constants.ts';

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
                    src='/white_logo_transparent.png'
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
