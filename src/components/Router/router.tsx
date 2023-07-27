import { createBrowserRouter } from 'react-router-dom';
import Admin from '../../pages/Admin.tsx';
import CreateReview from '../../pages/CreateReview.tsx';
import Home from '../../pages/Home.tsx';
import Welcome from '../../pages/Welcome.tsx';
import Login from '../../pages/Login.tsx';
import MyAccount from '../../pages/MyAccount.tsx';
import NotFound from '../../pages/NotFound.tsx';
import Register from '../../pages/Register.tsx';
import Reviews from '../../pages/Reviews.tsx';
import SingleReview from '../../pages/SingleReview.tsx';
import Stats from '../../pages/Stats.tsx';
import Users from '../../pages/Users.tsx';
import AdminRoute from './AdminRoute.tsx';
import AuthenticatedRoute from './AuthenticatedRoute.tsx';
import PublicRoute from './PublicRoute.tsx';
import App from '../../App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthenticatedRoute>
                <App />
            </AuthenticatedRoute>
        ),
        children: [
            { path: 'home', element: <Home /> },
            {
                path: 'reviews',
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
            {
                path: 'my-account',
                element: (
                    <AuthenticatedRoute>
                        <MyAccount />
                    </AuthenticatedRoute>
                ),
            },
            {
                path: 'admin',
                element: (
                    <AdminRoute>
                        <Admin />
                    </AdminRoute>
                ),
                children: [
                    {
                        path: 'users',
                        element: (
                            <AdminRoute>
                                <Users />
                            </AdminRoute>
                        ),
                    },
                    { path: 'stats', element: <Stats /> },
                ],
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
