import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Link as MuiLink,
    Select,
    TextField,
    Typography,
    MenuItem,
    InputLabel,
    SelectChangeEvent,
    Rating,
    Switch,
    InputAdornment,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth.service.ts';
import errorHandler from '../../services/errors.service.ts';
import { getUserByUID } from '../../services/user.service.ts';
import { updateUser, updateUserData } from '../../store/authStore.ts';
import { updateSnackbar } from '../../store/snackbarStore.ts';
import GlobalSnackbar from '../GlobalSnackbar/GlobalSnackbar.tsx';
import { LensMounts } from '../../common/lensMountEnum.ts';
import { Camera } from '@mui/icons-material';

export const CreateReviewForm = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();

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

    type FormData = {
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

    const { register, handleSubmit } = useForm<FormData>();

    const [lensMount, setLensMount] = useState('');
    const [rating, setRating] = useState(0);

    const handleRatingChange = (event: any) => {
        setRating(event.target.value);
        register('rating', { value: event.target.value });
    };

    const handleSelectChange = (event: SelectChangeEvent) => {
        setLensMount(event.target.value as string);
    };

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
        // setButtonLoading(true);

        // const message = errorHandler(error);
        //     updateSnackbar('error', message, true);
        //     setButtonLoading(false);
    };

    return (
        <>
            <GlobalSnackbar />
            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
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
                        <Switch id='prime' autoFocus {...register('prime')} />
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
                            sx={{ width: '50%' }}
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
                        <InputLabel id='prime'>Overall Rating</InputLabel>
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
                </Grid>
                <Button
                    type='submit'
                    variant='contained'
                    disabled={buttonLoading}
                    sx={{
                        mt: 3,
                        mb: 2,
                        height: '40px',
                    }}
                >
                    {!buttonLoading ? (
                        'Create Review'
                    ) : (
                        <CircularProgress color='secondary' size={20} />
                    )}
                </Button>
            </Box>
        </>
    );
};

export default CreateReviewForm;
