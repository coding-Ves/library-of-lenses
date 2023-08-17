import { Card, Typography } from '@mui/material';

export const Hero = () => {
    return (
        <>
            <Card
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    mt: '45vh',
                    justifyContent: 'center',
                    minWidth: '100vw',
                    textAlign: 'center',
                }}
            >
                <Typography variant='h2'>LIBRARY OF LENSES</Typography>
            </Card>
            <Card
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    mt: '10px',
                    justifyContent: 'center',
                    minWidth: '100vw',
                    opacity: '80%',
                    textAlign: 'center',
                }}
            >
                <Typography variant='h5'>
                    Vintage Lenses. Reviews. Stories.
                </Typography>
            </Card>
        </>
    );
};

export default Hero;
