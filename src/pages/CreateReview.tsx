import { Box } from '@mui/material';
import { LENS_BOARD_IMG_3 } from '../common/constants.ts';
import { Create } from '@mui/icons-material';
import CreateReviewForm from '../components/CreateReview/CreateReviewForm.tsx';

const CreateReview = () => {
    return (
        <Box>
            <CreateReviewForm />
        </Box>
    );
};

export default CreateReview;
