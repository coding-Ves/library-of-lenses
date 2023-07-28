import { FLICKR_API_KEY } from '../common/constants.ts';
import { galleryItem } from '../types/types.ts';

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

export const fetchGalleryById = async (galleryID: string) => {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${galleryID}&format=json&nojsoncallback=1`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch photos');
    }
};

export const getPhotosByGallery = (gallery: Array<galleryItem>) => {
    const galleryArray: Array<galleryItem> = [];
    gallery.map((photo) => {
        fetchPhotoById(photo.id)
            .then((response) => {
                galleryArray.push(response.sizes.size[9].source);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return galleryArray;
};
