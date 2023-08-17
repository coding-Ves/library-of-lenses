import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.tsx';
import CreateReview from '../../pages/CreateReview.tsx';
import Login from '../../pages/Login.tsx';
import NotFound from '../../pages/NotFound.tsx';
import Register from '../../pages/Register.tsx';
import Reviews from '../../pages/Reviews.tsx';
import SingleReview from '../../pages/SingleReview.tsx';
import Welcome from '../../pages/Welcome.tsx';
import AdminRoute from './AdminRoute.tsx';
import AuthenticatedRoute from './AuthenticatedRoute.tsx';
import PublicRoute from './PublicRoute.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthenticatedRoute>
                <App />
            </AuthenticatedRoute>
        ),
        children: [
            { path: 'home', element: <Welcome /> },
            {
                path: '/reviews',
                element: <Reviews />,
            },
            {
                path: 'reviews/:lensName',
                element: (
                    <AuthenticatedRoute>
                        <SingleReview />
                    </AuthenticatedRoute>
                ),
            },
            {
                path: 'create-review',
                element: (
                    <AdminRoute>
                        <CreateReview />
                    </AdminRoute>
                ),
            },
        ],
    },
    {
        path: '/welcome',
        element: (
            <PublicRoute>
                <Welcome />
            </PublicRoute>
        ),
    },

    {
        path: '/login',
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: '/register',
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        ),
    },

    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
