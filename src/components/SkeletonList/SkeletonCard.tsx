import { Skeleton, Card, Grid } from '@mui/material';

export const SkeletonCard = () => {
    return (
        <Card sx={{ p: 2 }}>
            <Skeleton
                variant='rounded'
                width={'100%'}
                height={'270px'}
                sx={{ p: 1 }}
            />
            <Skeleton
                variant='rounded'
                width={'223px'}
                height={'22px'}
                sx={{ ml: 'auto', mr: 'auto', mt: 1, mb: 1 }}
            />
            <Skeleton variant='rounded' width={'100%'} height={'35px'} />
            <Skeleton variant='text' width={'100%'} height={'96px'} />
            <Skeleton variant='rounded' width={'100%'} height={'50px'} />
        </Card>
    );
};

export default SkeletonCard;
