import { Button, Card } from '@mui/material';
import {
    GITHUB_ICON,
    GITHUB_PROFILE_URL,
    GITLAB_ICON,
    GITLAB_PROFILE_URL,
    LINKEDIN_ICON,
    LINKEDIN_PROFILE_ULR,
} from '../../common/constants.ts';

const Contacts = () => {
    return (
        <Card
            component='div'
            sx={{
                position: 'fixed',
                top: 10,
                left: 5,
                zIndex: 1,
                height: '30px',
            }}
        >
            <Button
                variant='text'
                sx={{
                    backgroundImage: `url(${LINKEDIN_ICON})`,
                    backgroundColor: 'transparent',
                    backgroundSize: '20px 20px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: '90%',
                    height: '100%',
                    width: '25px',
                }}
                href={LINKEDIN_PROFILE_ULR}
                target='_blank'
            ></Button>
            <Button
                variant='text'
                sx={{
                    backgroundImage: `url(${GITHUB_ICON})`,
                    backgroundColor: 'transparent',
                    backgroundSize: '25px 25px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: '90%',
                    height: '100%',
                }}
                href={GITHUB_PROFILE_URL}
                target='_blank'
            ></Button>
            <Button
                variant='text'
                sx={{
                    backgroundImage: `url(${GITLAB_ICON})`,
                    backgroundColor: 'transparent',
                    backgroundSize: '25px 25px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: '90%',
                    height: '100%',
                }}
                href={GITLAB_PROFILE_URL}
                target='_blank'
            ></Button>
        </Card>
    );
};

export default Contacts;
