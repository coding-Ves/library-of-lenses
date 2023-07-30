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
    ImageList,
    ImageListItem,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { galleryItem } from '../types/types.ts';
import { fetchGalleryById } from '../services/flickr.service.ts';
import { getPhotosByGallery } from '../services/flickr.service.ts';
import { updateSnackbar } from '../store/snackbarStore.ts';

const SingleReview = () => {
    const location = useLocation();
    const reviewData = location.state;

    return (
        <Card sx={{ width: '70vw', ml: 'auto', mr: 'auto' }}>
            <CardMedia
                image={reviewData.lensReview.lensImage}
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
                <Typography variant='h2' align='center' m={1}>
                    {reviewData.lensReview.lensName.toUpperCase()}
                </Typography>
                <Divider
                    sx={{ width: '60%', mb: 1, ml: 'auto', mr: 'auto' }}
                ></Divider>
                <TableContainer
                    component={Paper}
                    sx={{
                        width: '60%',
                        ml: 'auto',
                        mr: 'auto',
                        mt: 3,
                        mb: 3,
                    }}
                >
                    <Table sx={{ minWidth: '60%' }} aria-label='simple table'>
                        <TableBody>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Lens Mount
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.lensMount}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Focal length{' '}
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
                                    ƒ {reviewData.lensReview.minAperture}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Max. Aperture
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    ƒ {reviewData.lensReview.maxAperture}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Min. Focusing Distance
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.minFocusDistance} mm
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='footer'>
                                    Filter size
                                </TableCell>
                                <TableCell variant='footer' align='right'>
                                    {reviewData.lensReview.filterSize} mm
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Divider
                    sx={{ width: '70%', m: 2, ml: 'auto', mr: 'auto' }}
                ></Divider>
                <Typography
                    variant='h4'
                    align='center'
                    sx={{ fontSize: '40px', m: 2 }}
                >
                    LENS STORY
                </Typography>
                <Typography
                    variant='body1'
                    align='justify'
                    sx={{
                        width: '70%',
                        ml: 'auto',
                        mr: 'auto',
                    }}
                >
                    {reviewData.lensReview.reviewStory}
                </Typography>
                <Divider
                    sx={{ width: '70%', m: 2, ml: 'auto', mr: 'auto' }}
                ></Divider>
                <Typography
                    variant='h4'
                    align='center'
                    sx={{ fontSize: '40px', m: 2 }}
                >
                    LENS HANDLING
                </Typography>
                <Typography
                    variant='body1'
                    align='justify'
                    sx={{
                        width: '70%',
                        ml: 'auto',
                        mr: 'auto',
                    }}
                >
                    {reviewData.lensReview.reviewHandling}
                </Typography>
                <Divider
                    sx={{ width: '70%', m: 2, ml: 'auto', mr: 'auto' }}
                ></Divider>
                <Typography
                    variant='h4'
                    align='center'
                    sx={{ fontSize: '40px', m: 2 }}
                >
                    OPTICAL PERFORMANCE
                </Typography>
                <Typography
                    variant='body1'
                    align='justify'
                    sx={{
                        width: '70%',
                        ml: 'auto',
                        mr: 'auto',
                    }}
                >
                    {reviewData.lensReview.reviewOptical}
                </Typography>
                <Divider
                    sx={{ width: '70%', m: 2, ml: 'auto', mr: 'auto' }}
                ></Divider>
                <Typography
                    variant='h4'
                    align='center'
                    sx={{ fontSize: '40px', m: 2 }}
                >
                    VERDICT
                </Typography>
                <Typography
                    variant='body1'
                    align='justify'
                    sx={{
                        width: '70%',
                        ml: 'auto',
                        mr: 'auto',
                    }}
                >
                    {reviewData.lensReview.reviewVerdict}
                </Typography>
                <ImageList cols={3}>
                    {reviewData.lensReview.gallery.map((item: string) => (
                        <ImageListItem key={item.toString()}>
                            <img
                                src={`${item}`}
                                srcSet={`${item}`}
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </CardContent>
        </Card>
    );
};
export default SingleReview;
