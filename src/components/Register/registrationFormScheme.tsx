import * as yup from 'yup';

export const registrationValidationSchema = yup.object({
    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be at most 20 characters')
        .required('Username is required'),
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required')
        .test(
            'one-uppercase character special character and a number',
            'Password must contain at least one uppercase letter, one special character and one number',
            (value) => validatePassword(value)
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

export default registrationValidationSchema;

const validatePassword = (value: string): boolean => {
    if (value === undefined) {
        return false;
    }
    // eslint-disable-next-line no-useless-escape
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{6,}$/.test(
        value
    );
};
