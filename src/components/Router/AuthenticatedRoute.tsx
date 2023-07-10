import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore.ts';

interface Props {
    children: JSX.Element;
}

const AuthenticatedRoute = ({ children }: Props): JSX.Element => {
    const user = useAuthStore((s) => s.user);
    const loading = useAuthStore((s) => s.loading);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (user == null) {
                navigate('/login');
            } else if (location.pathname === '/') {
                navigate('/home');
            }
        }
    }, [user, loading, navigate]);

    return children;
};

export default AuthenticatedRoute;
