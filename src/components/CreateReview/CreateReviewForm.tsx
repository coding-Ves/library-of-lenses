import { Camera } from '@mui/icons-material';
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Rating,
    Select,
    SelectChangeEvent,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LensMounts } from '../../common/lensMountEnum.ts';
import errorHandler from '../../services/errors.service.ts';
import {
    URLAlbumHandler,
    URLPhotoHandler,
} from '../../services/flickr.service.ts';
import { addReview } from '../../services/reviews.service.ts';
import useAuthStore from '../../store/authStore.ts';
import { updateSnackbar } from '../../store/snackbarStore.ts';
import GlobalSnackbar from '../GlobalSnackbar/GlobalSnackbar.tsx';

export const CreateReviewForm = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<LensReview>();
    const [lensMount, setLensMount] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [rating, setRating] = useState(0);
    const userData = useAuthStore((s) => s.userData);

    interface IFormInputs {
        lensName: string;
        lensImageURL: string;
        lensMount: LensMounts;
        prime: boolean;
        focalLength: number;
        minAperture: number;
        maxAperture: number;
        minFocusDistance: number;
        filterSize: number;
        weight: number;
        rating: number;
        reviewStory: string;
        reviewHandling: string;
        reviewOptical: string;
        reviewVerdict: string;
        galleryURL: string;
    }

    type LensReview = {
        lensName: string;
        lensImageURL: string;
        lensMount: LensMounts;
        prime: boolean;
        focalLength: number;
        minAperture: number;
        maxAperture: number;
        minFocusDistance: number;
        filterSize: number;
        weight: number;
        rating: number;
        reviewStory: string;
        reviewHandling: string;
        reviewOptical: string;
        reviewVerdict: string;
        galleryURL: string;
    };

    const handleRatingChange = (
        // eslint-disable-next-line no-unused-vars
        event: React.SyntheticEvent<Element, Event>,
        value: number | null
    ) => {
        if (value !== null) {
            setRating(value);
            register('rating', { value });
        }
    };

    const handleSelectChange = (event: SelectChangeEvent) => {
        setLensMount(event.target.value as string);
    };

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setButtonLoading(true);
        const imageURL = URLPhotoHandler(data.lensImageURL);
        const galleryURL = URLAlbumHandler(data.galleryURL);
        addReview(
            data.lensName,
            imageURL,
            data.lensMount,
            data.prime,
            data.focalLength,
            data.minAperture,
            data.maxAperture,
            data.minFocusDistance,
            data.filterSize,
            data.weight,
            data.rating,
            data.reviewStory,
            data.reviewHandling,
            data.reviewOptical,
            data.reviewVerdict,
            galleryURL,
            userData?.username
        )
            .then(() => {
                updateSnackbar('success', 'Review created!', true);
                setButtonLoading(false);
            })
            .catch((error) => {
                const message = errorHandler(error);
                updateSnackbar('error', message, true);
                setButtonLoading(false);
            });
    };

    return (
        <>
            <GlobalSnackbar />
            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
            >
                <Typography
                    variant='h4'
                    component={Paper}
                    p={1}
                    sx={{
                        margin: 'auto',
                        mb: 1,
                        ml: '30vw',
                        mr: '30vw',
                        alignContent: 'center',
                    }}
                    align='center'
                >
                    Create Review
                </Typography>
                <Paper
                    component={Stack}
                    direction='row'
                    useFlexGap
                    gap={3}
                    flexWrap='wrap'
                    justifyContent='space-evenly'
                    p={5}
                    sx={{
                        width: '60%',
                        margin: 'auto',
                        mb: 1,
                        alignContent: 'center',
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            width: '50vh',
                            display: 'flex',
                            alignContent: 'start',
                        }}
                    >
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='lensImageURL'
                                label='Lens Flickr Photo URL'
                                autoFocus
                                {...register('lensImageURL')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='galleryURL'
                                label='Flickr Gallery URL'
                                autoFocus
                                {...register('galleryURL')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='lensName'
                                label='Lens Name'
                                autoFocus
                                {...register('lensName')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id='prime'>Prime lens</InputLabel>
                            <Switch
                                id='prime'
                                autoFocus
                                {...register('prime')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id='lensMount'>Lens Mount</InputLabel>
                            <Select
                                value={lensMount}
                                required
                                fullWidth
                                id='lensMount'
                                label='Lens Mount'
                                autoFocus
                                {...register('lensMount')}
                                onChange={handleSelectChange}
                            >
                                {Object.values(LensMounts).map((mount) => (
                                    <MenuItem key={mount} value={mount}>
                                        {[mount]}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='focalLength'
                                label='Focal length'
                                autoFocus
                                {...register('focalLength')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            mm
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ width: '50vh' }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='minAperture'
                                label='Min aperture'
                                autoFocus
                                {...register('minAperture')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            ƒ
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='maxAperture'
                                label='Max aperture'
                                autoFocus
                                {...register('maxAperture')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            ƒ
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='minFocusDistance'
                                label='Min focus distance'
                                autoFocus
                                {...register('minFocusDistance')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            meters
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='filterSize'
                                label='Filter size'
                                autoFocus
                                {...register('filterSize')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            mm
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='weight'
                                label='Weight'
                                autoFocus
                                {...register('weight')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            grams
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel required id='rating'>
                                Overall Rating
                            </InputLabel>
                            <Rating
                                id='rating'
                                autoFocus
                                onChange={handleRatingChange}
                                getLabelText={(value: number) =>
                                    `${value} Camera${value !== 1 ? 's' : ''}`
                                }
                                precision={0.5}
                                icon={<Camera fontSize='large' />}
                                emptyIcon={<Camera fontSize='large' />}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <Paper
                    component={Grid}
                    container
                    spacing={2}
                    p={4}
                    sx={{ width: '60%', margin: 'auto' }}
                >
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            minRows={2}
                            fullWidth
                            id='reviewStory'
                            label='Story'
                            autoFocus
                            {...register('reviewStory')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            minRows={4}
                            fullWidth
                            id='reviewHandling'
                            label='Handling'
                            autoFocus
                            {...register('reviewHandling')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            minRows={4}
                            fullWidth
                            id='reviewOptical'
                            label='Optical Performance'
                            autoFocus
                            {...register('reviewOptical')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            minRows={2}
                            fullWidth
                            id='reviewVerdict'
                            label='Verdict'
                            autoFocus
                            {...register('reviewVerdict')}
                        />
                    </Grid>

                    <Button
                        type='submit'
                        variant='contained'
                        disabled={buttonLoading}
                        sx={{
                            mt: 3,
                            mb: 2,
                            ml: 'auto',
                            mr: 'auto',
                            width: '40%',
                        }}
                    >
                        {!buttonLoading ? (
                            'Create Review'
                        ) : (
                            <CircularProgress color='secondary' size={20} />
                        )}
                    </Button>
                </Paper>
            </Box>
        </>
    );
};

export default CreateReviewForm;
