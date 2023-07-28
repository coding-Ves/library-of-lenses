import {
    Card,
    CardContent,
    CardMedia,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { galleryItem } from '../types/types.ts';

const SingleReview = () => {
    const location = useLocation();
    const reviewData = location.state;
    const [reviewGallery, setReviewGallery] = useState<Array<galleryItem>>([]);

    // useEffect(() => {
    //     fetchGalleryById(reviewData.lensReview.galleryURL)
    //         .then((result) => {
    //             setReviewGallery(getPhotosByGallery(result.photoset.photo));
    //         })
    //         .catch((error) => {
    //             updateSnackbar('error', error.message, true);
    //             console.log(error);
    //         });
    // }, []);

    return (
        <Card sx={{ width: '70vw', height: '100vh', ml: 'auto', mr: 'auto' }}>
            <CardMedia
                image={reviewData.lensImage}
                sx={{
                    height: '250px',
                    width: '100%',
                    backgroundSize: 'contain',
                    backgroundColor: '#000',
                }}
            >
                A
            </CardMedia>
            <CardContent>
                <Typography variant='button' sx={{ fontSize: '50px' }}>
                    {reviewData.lensReview.lensName}
                </Typography>
                <Divider sx={{ width: '60%' }}></Divider>
                <TableContainer
                    component={Paper}
                    sx={{ width: '50%', ml: 'auto', mr: 'auto', mt: 3 }}
                >
                    <Table sx={{ minWidth: '50%' }} aria-label='simple table'>
                        <TableBody>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Lens Mount :
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.lensMount}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Focal length:{' '}
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.focalLength} mm
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Min. Aperture
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.minAperture}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Max Aperture
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.maxAperture}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};
export default SingleReview;
