import { FLICKR_API_KEY } from '../common/constants.ts';

export const URLPhotoHandler = (url: string): string => {
    const splitUrl = url.split('/');
    return splitUrl[5];
};

export const URLAlbumHandler = (url: string): string => {
    const splitUrl = url.split('/');
    return splitUrl[6];
};

export const fetchPhotoById = (photoId: string) => {
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${FLICKR_API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`;

    const photo = fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch photo');
            }
            const data = response.json();
            return data;
        })
        .catch((error) => {
            console.log(error);
        });

    return photo;
};
