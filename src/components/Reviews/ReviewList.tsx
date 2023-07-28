import { Grid, Typography } from '@mui/material';
import ReviewCard from './ReviewCard.tsx';
import { useState, useEffect } from 'react';
import { getAllReviews } from '../../services/reviews.service.ts';
import { LensReview } from '../../types/types.ts';
import useAuthStore from '../../store/authStore.ts';
import { updateLoading } from './../../store/loadingStore.ts';
import useLoadingStore from '../../store/loadingStore.ts';
import Loader from '../Loader/Loader.tsx';
import SkeletonList from '../SkeletonList/SkeletonList.tsx';

const ReviewList = () => {
    const [reviews, setReviews] = useState<LensReview[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllReviews()
            .then((fetchedReviews) => {
                setReviews(fetchedReviews);
            })
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    return (
        <>
            <Typography variant='h2' align='center' mb={3}>
                Reviews
            </Typography>
            {!loading ? (
                <Grid container spacing={2} p={4}>
                    {reviews.map((review) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                xl={3}
                                key={review.reviewID}
                            >
                                <ReviewCard lensReview={review} />
                            </Grid>
                        );
                    })}
                </Grid>
            ) : (
                <SkeletonList />
            )}
        </>
    );
};

export default ReviewList;
