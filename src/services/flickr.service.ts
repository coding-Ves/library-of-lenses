export const URLPhotoHandler = (url: string): string => {
    const splitUrl = url.split('/');
    return splitUrl[5];
};

export const URLAlbumHandler = (url: string): string => {
    const splitUrl = url.split('/');
    return splitUrl[6];
};
