import { create } from 'zustand';

interface useLoadingType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const useLoadingStore = create<useLoadingType>((set) => ({
    loading: false,
    setLoading: (loading: boolean) => {
        set({ loading });
    },
}));

export const updateLoading = (loading: boolean) => {
    useLoadingStore.getState().setLoading(loading);
};

export default useLoadingStore;
