import * as yup from 'yup'

export const RegisterFormSchemas = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required').min(6, 'must be at least 6 characters long'),
    confirmpassword: yup.string().required('Password is required').min(6, 'must be at least 6 characters long')
        .oneOf([yup.ref('password', yup.password)],'Passwords dont match')
})