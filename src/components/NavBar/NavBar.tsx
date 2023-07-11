import { Stack } from '@mui/material';
import NavImage from './NavImage.tsx';
import NavMenu from './NavMenu.tsx';

const NavBar = () => {
    return (
        <Stack>
            <NavImage />
            <NavMenu />
        </Stack>
    );
};

export default NavBar;
