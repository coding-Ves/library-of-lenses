import {
    DataSnapshot,
    DatabaseReference,
    get,
    orderByChild,
    push,
    query,
    ref,
    update,
} from 'firebase/database';
import { LensMounts } from '../common/lensMountEnum.ts';
import { db } from '../config/firebase.ts';
import { updateUserReviews } from './user.service.ts';

export const addReview = (
    lensName: string,
    lensImageURL: string,
    lensMount: LensMounts,
    prime: boolean,
    focalLength: number,
    minAperture: number,
    maxAperture: number,
    minFocusDistance: number,
    filterSize: number,
    weight: number,
    rating: number,
    reviewStory: string,
    reviewHandling: string,
    reviewOptical: string,
    reviewVerdict: string,
    galleryURL: string,
    authorUsername: string | undefined
) => {
    return push(ref(db, 'reviews'), {
        lensName: lensName,
        lensImageURL: lensImageURL,
        lensMount: lensMount,
        prime: prime,
        focalLength: focalLength,
        minAperture: minAperture,
        maxAperture: maxAperture,
        minFocusDistance: minFocusDistance,
        filterSize: filterSize,
        weight: weight,
        rating: rating,
        reviewStory: reviewStory,
        reviewHandling: reviewHandling,
        reviewOptical: reviewOptical,
        reviewVerdict: reviewVerdict,
        galleryURL: galleryURL,
        authorUsername: authorUsername,
        createdOn: Date.now(),
    }).then((snapshot) => {
        updateUserReviews(authorUsername, snapshot.key);
        update(ref(db, `reviews/${snapshot.key}`), {
            reviewID: snapshot.key,
        });
    });
};

export const getReviewByID = (reviewID: string) => {
    return get(ref(db, `reviews/${reviewID}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Thread with id ${reviewID} does not exist!`);
        }
        const thread = result.val();
        thread.createdOn = new Date(thread.createdOn);

        return thread;
    });
};

const fromReviewsDocument = (snapshot: DataSnapshot) => {
    const ReviewsDocument = snapshot.val();

    return Object.keys(ReviewsDocument).map((key) => {
        const review = ReviewsDocument[key];

        return {
            ...review,
            reviewID: key,
            createdOn: new Date(review.createdOn),
        };
    });
};

export const getAllReviews = () => {
    return get(ref(db, 'reviews')).then((snapshot) => {
        if (!snapshot.exists()) {
            return [];
        }
        return fromReviewsDocument(snapshot);
    });
};
