import { createBrowserRouter } from 'react-router-dom';
import Admin from '../../pages/Admin.tsx';
import CreateReview from '../../pages/CreateReview.tsx';
import Home from '../../pages/Home.tsx';
import Landing from '../../pages/Landing.tsx';
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
        path: '/landing',
        element: (
            <PublicRoute>
                <Landing />
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
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <Home /> },
            {
                path: 'reviews',
                element: <Reviews />,
                children: [
                    {
                        path: ':reviewName',
                        element: (
                            <AuthenticatedRoute>
                                <SingleReview />
                            </AuthenticatedRoute>
                        ),
                    },
                ],
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
                    { path: 'users', element: <Users /> },
                    { path: 'stats', element: <Stats /> },
                ],
            },
        ],
    },

    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
