import * as yup from 'yup'

export const LoginFormSchemas = yup.object().shape({
    emailorusername: yup.string().required('EmailorUsername is required'),
    password: yup.string().required('Password is required').min(6, 'must be at least 6 characters long')
})