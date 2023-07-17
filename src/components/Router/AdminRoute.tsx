import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../common/userEnum.ts';
import useAuthStore from '../../store/authStore.ts';

interface Props {
    children: JSX.Element;
}

const AdminRoute = ({ children }: Props): JSX.Element => {
    const role = useAuthStore((s) => s.userData?.role);

    const navigate = useNavigate();

    console.table(role);

    useEffect(() => {
        if (role !== Roles.ADMIN) {
            navigate('/not-found');
        }
    }, [role]);

    return children;
};

export default AdminRoute;
