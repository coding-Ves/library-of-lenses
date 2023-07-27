import { Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

const SingleReview = () => {
    const location = useLocation();
    const lensReview = location.state;

    return (
        <>
            {console.log(lensReview)}
            <Typography>{lensReview.lensName}</Typography>
        </>
    );
};

export default SingleReview;
