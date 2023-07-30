import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFullReviewData } from '../../services/reviews.service.ts';
import { LensReview } from '../../types/types.ts';
import SkeletonList from '../SkeletonList/SkeletonList.tsx';
import ReviewCard from './ReviewCard.tsx';
const ReviewList = () => {
    const [reviews, setReviews] = useState<LensReview[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (reviews.length === 0) {
            setLoading(true);
            getFullReviewData()
                .then((result) => {
                    setReviews(result);
                })
                .then(() => {
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                });
        }
    }, [reviews]);

    return (
        <>
            <Typography variant='h2' align='center' mb={3}>
                Reviews
            </Typography>
            {console.log(reviews)}
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
