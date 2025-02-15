import * as yup from 'yup'

export const ForgotPasswordFormSchemas = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required')
})