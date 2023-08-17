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
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${
        import.meta.env.VITE_FLICKR_API_KEY
    }&photo_id=${photoId}&format=json&nojsoncallback=1`;

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
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${
        import.meta.env.VITE_FLICKR_API_KEY
    }&photoset_id=${galleryID}&format=json&nojsoncallback=1`;

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

export const getPhotosByGallery = (
    gallery: Array<galleryItem>
): Array<string> => {
    const galleryArray: Array<string> = [];
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

export const getMostPopularPhotos = async () => {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=${
        import.meta.env.VITE_FLICKR_API_KEY
    }&user_id=169368872%40N02&per_page=10&page=12&format=json&nojsoncallback=1`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }

        const data = await response.json();
        return data.photos.photo;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch photos');
    }
};

export const getLandingGalleryPhotos = async (): Promise<Array<string>> => {
    const popularPhotos = await getMostPopularPhotos();
    const gallery = await getPhotosByGallery(popularPhotos);
    return gallery;
};
