import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../common/userEnum.ts';
import useAuthStore from '../../store/authStore.ts';

interface Props {
    children: JSX.Element;
}

const AdminRoute = ({ children }: Props): JSX.Element => {
    const userRole = useAuthStore((s) => s.userRole);
    const loading = useAuthStore((s) => s.loading);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (userRole !== Roles.ADMIN) {
                navigate('/not-found');
            } else if (location.pathname === '/') {
                navigate('/admin');
            }
        }
    }, [userRole, loading, navigate]);

    return children;
};

export default AdminRoute;
