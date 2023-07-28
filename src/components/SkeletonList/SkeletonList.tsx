import { Skeleton, Card, Grid } from '@mui/material';
import SkeletonCard from './SkeletonCard.tsx';

export const SkeletonList = () => {
    return (
        <Grid container spacing={2} p={4}>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <SkeletonCard />
            </Grid>
        </Grid>
    );
};

export default SkeletonList;
