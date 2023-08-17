import { Typography, Card } from '@mui/material';

export const Features = () => {
    return (
        <>
            <Card
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '50vh',
                    pl: '30%',
                    pr: '30%',
                    justifyContent: 'center',
                    minWidth: '100vw',

                    textAlign: 'center',
                }}
            >
                <Typography variant='h6'>
                    This is the place to learn about different vintage lenses
                    and my experience with them. Some are obscure, others quite
                    common – from cult classics to stuff with zero information
                    online.
                </Typography>
            </Card>
            <Card
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '20px',
                    pl: '30%',
                    pr: '30%',
                    justifyContent: 'center',
                    minWidth: '100vw',
                    opacity: '80%',
                    textAlign: 'center',
                }}
            >
                <Typography mt={2}>
                    You’ll find a variety of diffferent types from the
                    screwmount M42 and M39, to the SLR mounts like Olympus OM,
                    Minolta MD, Pentax PK, Canon FD, Nikon F, Contax RF, Yashica
                    ML, Exakta and some others.
                </Typography>
            </Card>
        </>
    );
};

export default Features;
