import { Grid, Typography } from '@mui/material';
import ReviewCard from './ReviewCard.tsx';
import { useState, useEffect } from 'react';
import { getAllReviews } from '../../services/reviews.service.ts';
import { LensReview } from '../../types/types.ts';

const ReviewList = () => {
    const [reviews, setReviews] = useState<LensReview[]>([]);

    useEffect(() => {
        getAllReviews().then((fetchedReviews) => {
            setReviews(fetchedReviews);
        });
    });

    return (
        <>
            <Grid container spacing={2}>
                {reviews.map((review) => {
                    return <></>;
                })}
            </Grid>
        </>
    );
};

export default ReviewList;
