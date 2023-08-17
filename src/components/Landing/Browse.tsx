import { Button, Card, Typography } from '@mui/material';

export const Browse = () => {
    return (
        <>
            <Card
                sx={{
                    mt: '40vh',
                    // ml: '44vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    opacity: '80%',
                    textAlign: 'center',
                    width: '100vw',
                }}
            >
                <Typography sx={{ width: '30vw' }} variant='button'>
                    READY TO ENTER THE LIBRARY?
                </Typography>
            </Card>

            <Button
                sx={{
                    ml: '40%',
                    mt: 2,
                    width: '20vw',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '85%',
                    textAlign: 'center',
                    borderRadius: 30,
                }}
                variant='contained'
                href='/login'
            >
                Login
            </Button>

            <Button
                sx={{
                    ml: '40%',
                    mt: 2,
                    width: '20vw',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '85%',
                    textAlign: 'center',
                    borderRadius: 30,
                }}
                variant='contained'
                href='/register'
            >
                Register
            </Button>
        </>
    );
};

export default Browse;
