import { PhotoAlbum } from '@mui/icons-material';
import {
    Button,
    Card,
    ImageList,
    ImageListItem,
    Typography
} from '@mui/material';
import { POPULAR_PHOTOS } from '../../common/constants.ts';

export const Gallery = () => {
    return (
        <>
            <Card
                sx={{
                    mt: '40vh',
                    // ml: '44vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    opacity: '80%',
                    textAlign: 'center',
                    width: '100vw',
                }}
            >
                <Typography sx={{ width: '30vw' }} variant='h4'>
                    POPULAR PHOTOS
                </Typography>
            </Card>
            <Card sx={{ backgroundColor: 'rgba(238, 244, 247, 0.23)' }}>
                <ImageList
                    variant='masonry'
                    cols={3}
                    gap={10}
                    sx={{ ml: '44vw', mt: 2 }}
                >
                    {POPULAR_PHOTOS.map((item) => (
                        <ImageListItem key={item} sx={{}}>
                            <img src={item} srcSet={`${item}`} />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Button
                    fullWidth
                    sx={{
                        flexDirection: 'row',
                        ml: '74vw',
                        pl: 5,
                        justifyContent: 'start',
                        alignItems: 'start',
                        opacity: '85%',
                        textAlign: 'start',
                        mb: 2,
                    }}
                    variant='contained'
                    startIcon={<PhotoAlbum />}
                    href='https://www.flickr.com/photos/libraryoflenses/'
                    target='_blank'
                >
                    BROWSE ALL PHOTOS ON FLICKR
                </Button>
            </Card>
        </>
    );
};

export default Gallery;
