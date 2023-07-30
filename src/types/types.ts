import { LensMounts } from '../common/lensMountEnum.ts';

export type LensReview = {
    authorUsername: string;
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
    createdOn: Date;
    reviewID: string;
    gallery?: Array<[galleryItem]>;
    lensImage?: string;
};

export type galleryItem = {
    farm: number;
    id: string;
    isfamily: boolean;
    isfriend: boolean;
    isprimary: boolean;
    ispublic: number;
    secret: string;
    server: string;
    title: string;
};
