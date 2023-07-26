import { Grid, Typography } from '@mui/material';
import ReviewCard from './ReviewCard.tsx';
import { useState, useEffect } from 'react';
import { getAllReviews } from '../../services/reviews.service.ts';
import { LensReview } from '../../types/types.ts';
import useAuthStore from '../../store/authStore.ts';
import { updateLoading } from './../../store/loadingStore.ts';
import useLoadingStore from '../../store/loadingStore.ts';
import Loader from '../Loader/Loader.tsx';

const ReviewList = () => {
    const [reviews, setReviews] = useState<LensReview[]>([]);

    useEffect(() => {
        getAllReviews()
            .then((fetchedReviews) => {
                setReviews(fetchedReviews);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Typography variant='h2' align='center' mb={3}>
                Reviews
            </Typography>
            <Grid container spacing={2} p={4}>
                {reviews.map((review) => {
                    return (
                        <Grid item xs={12} md={6} xl={3} key={review.reviewID}>
                            <ReviewCard lensReview={review} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default ReviewList;
