import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth';
import { create } from 'zustand';
import { auth } from '../config/firebase.ts';
import { Roles } from '../common/userEnum.ts';

type UserData = {
    uid: string;
    username: string;
    email: string;
    role: Roles.USER | Roles.ADMIN | Roles.BANNED;
    avatarURL: string;
    createdOn: string;
    commentsNumber?: number;
    comments?: Array<object> | null;
    reviewsNumber?: number;
    reviews?: Array<object> | null;
};

interface useAuthType {
    user: FirebaseUser | null;
    userData: UserData | null;
    loading: boolean;
    setUser: (user: FirebaseUser | null) => void;
    setUserData: (user: UserData | null) => void;
    setLoading: (loading: boolean) => void;
}

const useAuthStore = create<useAuthType>((set) => ({
    user: null,
    userData: null,
    loading: true,
    setUser: (user: FirebaseUser | null) => {
        set({ user });
    },
    setUserData: (userData: UserData | null) => {
        set({ userData });
    },
    setLoading: (loading: boolean) => {
        set({ loading });
    },
}));

export const updateUser = (user: FirebaseUser | null) => {
    useAuthStore.getState().setUser(user);
};

export const updateUserData = (userData: UserData | null) => {
    useAuthStore.getState().setUserData(userData);
};

export const resetUser = () => {
    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setUserData(null);
};

export default useAuthStore;
