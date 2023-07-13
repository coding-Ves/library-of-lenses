import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../common/userEnum.ts';
import useAuthStore from '../../store/authStore.ts';

interface Props {
    children: JSX.Element;
}

const AdminRoute = ({ children }: Props): JSX.Element => {
    const userData = useAuthStore((s) => s.userData);
    const navigate = useNavigate();

    useEffect(() => {
        if (userData?.role !== Roles.ADMIN) {
            navigate('/not-found');
        } else if (location.pathname === '/') {
            navigate('/admin');
        }
    }, [userData, navigate]);

    return children;
};

export default AdminRoute;
