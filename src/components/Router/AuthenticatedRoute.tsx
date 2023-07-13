import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore.ts';

interface Props {
    children: JSX.Element;
}

const AuthenticatedRoute = ({ children }: Props): JSX.Element => {
    const user = useAuthStore((s) => s.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user == null) {
            navigate('/login');
        } else if (location.pathname === '/') {
            navigate('/landing');
        }
    }, [user, navigate]);

    return children;
};

export default AuthenticatedRoute;
