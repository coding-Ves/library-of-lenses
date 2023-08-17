import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import GlobalSnackbar from './components/GlobalSnackbar/GlobalSnackbar.tsx';
import Contacts from './components/Landing/Contacts.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import { auth } from './config/firebase.ts';
import { getUserByUsername } from './services/user.service.ts';
import useAuthStore, { updateUser, updateUserData } from './store/authStore.ts';
import useLoadingStore from './store/loadingStore.ts';

// App.tsx is used as a Layout component for react router

const App = () => {
    const [user] = useAuthState(auth);
    const currentUser = useAuthStore((s) => s.user);

    useEffect(() => {
        if (user) {
            if (user !== currentUser) {
                updateUser(user);
            }
            updateUser(user);
            getUserByUsername(user?.displayName as string)
                .then((snapshot) => {
                    updateUserData(snapshot.val());
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user, currentUser]);

    return (
        <>
            <NavBar />
            <Contacts />
            <Outlet />
            <GlobalSnackbar />
        </>
    );
};

export default App;
