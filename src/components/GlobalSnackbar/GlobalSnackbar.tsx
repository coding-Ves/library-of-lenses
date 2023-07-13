import { Alert, AlertColor, Snackbar } from '@mui/material';
import { updateSnackbar, useSnackbarStore } from '../../store/snackbarStore.ts';

const GlobalSnackbar = () => {
    const open = useSnackbarStore((s) => s.visibility);
    const message = useSnackbarStore((s) => s.message);
    const severity = useSnackbarStore((s) => s.severity) as AlertColor;

    const handleClose = () => {
        updateSnackbar(severity, message, false);
    };
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                onClose={handleClose}
                severity={severity as AlertColor}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default GlobalSnackbar;
