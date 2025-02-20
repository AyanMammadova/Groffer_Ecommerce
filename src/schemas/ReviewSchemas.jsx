import * as yup from 'yup'

export const ReviewSchemas = yup.object().shape({
    review: yup.string().required('Your review is required'),
    name: yup.string().required('Email is required').min(3,'Min 3 characters'),
    email: yup.string().required('Name is required').email('Enter a valid email adress')
    
})