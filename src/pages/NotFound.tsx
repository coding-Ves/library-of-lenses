import { Card, CardMedia, Typography, Box, Button } from '@mui/material';
import { NOT_FOUND_IMAGE } from '../common/constants.ts';

//<a href="https://www.freepik.com/free-vector/error-404_16446567.htm#page=7&query=404&position=5&from_view=search&track=sph">Image by GarryKillian</a> on Freepik

const NotFound = () => {
    return (
        <>
            <Box
                component='div'
                sx={{
                    direction: 'column',
                    height: '100vh',
                    backgroundColor: '#fff',
                    display: 'flex',
                    backgroundImage: `url(${NOT_FOUND_IMAGE})`,
                    backgroundSize: '40%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <Button
                    variant='outlined'
                    sx={{
                        width: '150px',
                        height: '50px',
                        position: 'fixed',
                        top: 750,
                        left: 700,
                    }}
                    href={'/'}
                >
                    BACK HOME
                </Button>
            </Box>
        </>
    );
};

export default NotFound;
