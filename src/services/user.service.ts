import {
    equalTo,
    get,
    orderByChild,
    query,
    ref,
    set,
    update,
    type DataSnapshot,
    type Query,
} from 'firebase/database';
import { DICEBEAR_AVATAR_BASE_URL } from '../common/constants.ts';
import { Roles } from '../common/userEnum.ts';
import { db } from '../config/firebase.ts';

export const createUser = (
    username: string,
    uid: string,
    email: string
): Promise<void> => {
    return set(ref(db, `users/${username}`), {
        username: username,
        uid: uid,
        email: email,
        role: Roles.USER,
        createdOn: Date.now(),
        avatarURL: DICEBEAR_AVATAR_BASE_URL + username,
    });
};

export const getUserByUsername = (username: string): Promise<DataSnapshot> => {
    return get(ref(db, `users/${username}`));
};

export const getUserByUID = (uid: string): Promise<DataSnapshot> => {
    return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};

export const getUsers = (): Query => {
    return query(ref(db, 'users'), orderByChild('uuid'));
};

export const updateUserAvatar = (
    username: string,
    url: string
): Promise<void> => {
    return update(ref(db), {
        [`/users/${username}/avatarURL`]: url,
    });
};

export const updateUserReviews = (
    username: string | undefined,
    reviewID: string | null
): Promise<void> => {
    return update(ref(db), {
        [`/users/${username}/reviews/${reviewID}`]: true,
    });
};
