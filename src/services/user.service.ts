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
import { DICEBEAR_AVATAR_BASE_URL } from '../common/constants';
import { Roles } from '../common/userEnum';
import { db } from '../config/firebase';

// interface userData {
//     uid: string;
//     username: string;
//     email: string;
//     role: Roles;
//     avatarURL: string;
//     createdOn: string;
//     commentsNumber: number;
//     comments: Array<object> | null;
//     reviewsNumber: number;
//     reviews: Array<object> | null;
// }

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

export const getUserData = (uid: string): Promise<DataSnapshot> => {
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
