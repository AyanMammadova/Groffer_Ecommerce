import * as yup from 'yup'

export const ResetPasswordSchemas = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'must be at least 6 characters long').matches(/[A-Z]/, 'Must include at least one uppercase letter').matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?`~]/, 'Must include at least one special character'),
    confirmpassword: yup.string().required('Password is required').min(6, 'must be at least 6 characters long')
        .oneOf([yup.ref('password', yup.password)],'Passwords dont match')
})