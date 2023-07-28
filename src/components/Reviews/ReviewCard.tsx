import { Camera } from '@mui/icons-material';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { fetchPhotoById } from '../../services/flickr.service.ts';
import { LensReview } from '../../types/types.ts';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateSnackbar } from '../../store/snackbarStore.ts';
import { SkeletonCard } from './../SkeletonList/SkeletonCard.tsx';

interface ReviewCardProps {
    lensReview: LensReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ lensReview }) => {
    const [lensImage, setLensImage] = useState<string>('');
    const [lensGalleryImage, setLensGalleryImage] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPhotoById(lensReview.lensImageURL)
            .then((result) => {
                setLensImage(result.sizes.size[6].source);
            })

            .catch((error) => {
                setLoading(false);
                updateSnackbar('error', error.message, true);
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {!loading ? (
                <Card variant='elevation'>
                    <CardMedia
                        src={lensImage}
                        component='img'
                        loading='lazy'
                        sx={{
                            height: '270px',
                            width: '100%',
                        }}
                        alt={'Lens'}
                    />
                    <CardHeader
                        align='center'
                        title={
                            <Typography
                                variant='button'
                                sx={{ fontSize: '20px', fontWeight: '600' }}
                            >
                                {lensReview.lensName}
                            </Typography>
                        }
                        sx={{ pb: 0 }}
                    />
                    <CardContent>
                        <Stack gap={1}>
                            <Stack direction='row' display='flex'>
                                <Typography
                                    variant='button'
                                    sx={{
                                        borderRadius: 1,
                                        pt: 0.5,
                                        pb: 0.5,
                                        pl: 1,
                                        pr: 1,
                                        mr: 1,
                                        backgroundColor: 'info.dark',
                                        color: 'secondary.light',
                                    }}
                                >
                                    {lensReview.lensMount}
                                </Typography>
                                <Typography
                                    variant='button'
                                    sx={{
                                        borderRadius: 1,
                                        pt: 0.5,
                                        pb: 0.5,
                                        pl: 1,
                                        pr: 1,
                                        mr: 'auto',
                                        backgroundColor: 'info.main',
                                        color: 'secondary.light',
                                    }}
                                >
                                    {lensReview.prime ? 'Prime' : 'Vario'}
                                </Typography>
                                <Rating
                                    disabled
                                    value={lensReview.rating}
                                    precision={0.5}
                                    icon={
                                        <Camera
                                            sx={{ color: 'info.dark' }}
                                            fontSize='large'
                                        />
                                    }
                                    emptyIcon={
                                        <Camera
                                            sx={{ color: 'secondary.dark' }}
                                            fontSize='large'
                                        />
                                    }
                                    sx={{ ml: 'auto', mr: 1 }}
                                />
                            </Stack>
                            <Divider></Divider>
                            <Typography mt={1}>
                                {lensReview.reviewVerdict.slice(0, 220) + '...'}
                            </Typography>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='medium'
                            variant='contained'
                            color='primary'
                            fullWidth
                            sx={{ ml: 'auto', mr: '5px' }}
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                                to={`/reviews/${lensReview.lensName}`}
                                state={{ lensReview, lensImage }}
                            >
                                Full Review
                            </Link>
                        </Button>
                    </CardActions>
                    <Stack m={1} direction='row' justifyContent='space-between'>
                        <Typography variant='button'>
                            Date: {lensReview.createdOn.toLocaleDateString()}
                        </Typography>
                        <Typography variant='button'>
                            Author: {lensReview.authorUsername}
                        </Typography>
                    </Stack>
                </Card>
            ) : (
                <SkeletonCard />
            )}
        </>
    );
};

export default ReviewCard;
