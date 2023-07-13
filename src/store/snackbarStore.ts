import { create } from 'zustand';
import { AlertColor } from '@mui/material';

interface useSnackbarType {
    severity: string;
    message: string;
    visibility: boolean;
    setSnackbar: (
        severity: AlertColor,
        message: string,
        visibility: boolean
    ) => void;
}

export const useSnackbarStore = create<useSnackbarType>((set) => ({
    severity: 'success',
    message: 'Message',
    visibility: false,
    setSnackbar: (
        severity: AlertColor,
        message: string,
        visibility: boolean
    ) => {
        set({ severity, message, visibility });
    },
}));

export const updateSnackbar = (
    severity: AlertColor,
    message: string,
    visibility: boolean
) => {
    useSnackbarStore.getState().setSnackbar(severity, message, visibility);
};

export const resetSnackbar = () => {
    useSnackbarStore.getState().setSnackbar('success', 'Message', false);
};

export default useSnackbarStore;
