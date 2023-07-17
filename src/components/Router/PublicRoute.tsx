import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore.ts';

interface Props {
    children: JSX.Element;
}

const PublicRoute = ({ children }: Props): JSX.Element => {
    const user = useAuthStore((s) => s.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            navigate('/');
        }
    }, [user]);

    return children;
};

export default PublicRoute;
