import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    type UserCredential,
} from 'firebase/auth';
import { equalTo, get, orderByChild, query, ref } from 'firebase/database';
import { auth, db } from '../config/firebase.ts';

export const registerUser = (
    email: string,
    password: string
): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (
    email: string,
    password: string
): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
    return signOut(auth);
};

export const checkUniqueEmail = (email: string): Promise<boolean> => {
    return get(
        query(ref(db, 'users'), orderByChild('email'), equalTo(email))
    ).then((snapshot) => {
        if (snapshot.exists()) {
            return false;
        }
        return true;
    });
};

export const checkUniqueUsername = (username: string): Promise<boolean> => {
    return get(
        query(ref(db, 'users'), orderByChild('username'), equalTo(username))
    ).then((snapshot) => {
        if (snapshot.exists()) {
            return false;
        }
        return true;
    });
};
