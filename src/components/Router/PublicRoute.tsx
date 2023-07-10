import useAuthStore from '../../store/authStore.ts';
import { Navigate } from 'react-router-dom';

interface Props {
    children: JSX.Element;
}

const PublicRoute = ({ children }: Props): JSX.Element => {
    const user = useAuthStore((s) => s.user);
    const loading = useAuthStore((s) => s.loading);

    return !loading && user != null ? <Navigate to={'/'} replace /> : children;
};

export default PublicRoute;
