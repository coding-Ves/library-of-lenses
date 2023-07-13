import { type User as FirebaseUser } from 'firebase/auth';
import { create } from 'zustand';
import { Roles } from '../common/userEnum.ts';

type UserData = {
    uid: string;
    username: string;
    email: string;
    role: Roles;
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
    setUser: (user: FirebaseUser | null) => void;
    setUserData: (setUserData: UserData | null) => void;
}

const useAuthStore = create<useAuthType>((set) => ({
    user: null,
    userData: <UserData | null>null,
    setUser: (user: FirebaseUser | null) => {
        set({ user });
    },
    setUserData: (userData: UserData | null) => {
        set({ userData });
    },
}));

export const updateUser = (user: FirebaseUser | null) => {
    useAuthStore.getState().setUser(user);
};

export const updateUserData = (user: UserData) => {
    useAuthStore.getState().setUserData(user);
};

export const resetUser = () => {
    useAuthStore.getState().setUserData(null);
    useAuthStore.getState().setUser(null);
};

export default useAuthStore;
