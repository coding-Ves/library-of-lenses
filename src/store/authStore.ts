import { auth } from '../config/firebase.ts';
import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth';
import { create } from 'zustand';
import { Roles } from '../common/userEnum.ts';

interface useAuthType {
    user: FirebaseUser | null;
    userRole: 'unauthorized' | Roles.USER | Roles.BANNED | Roles.ADMIN;
    loading: boolean;
    setUserData: (user: FirebaseUser | null) => void;
    setLoading: (loading: boolean) => void;
}

const useAuthStore = create<useAuthType>((set) => ({
    user: null,
    loading: true,
    userRole: 'unauthorized',
    setUserData: (user: FirebaseUser | null) => {
        set({ user });
    },
    setLoading: (loading: boolean) => {
        set({ loading });
    },
}));

onAuthStateChanged(auth, (user) => {
    if (user != null) {
        useAuthStore.getState().setUserData(user);
        useAuthStore.getState().setLoading(false);
    } else {
        useAuthStore.getState().setUserData(null);
        useAuthStore.getState().setLoading(false);
    }
});

export const updateLoading = (loading: boolean) => {
    useAuthStore.getState().setLoading(loading);
};

export default useAuthStore;
