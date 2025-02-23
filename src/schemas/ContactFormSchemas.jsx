import * as yup from 'yup'

export const ContactFormSchemas = yup.object().shape({
    fullName: yup
        .string()
        .required('Fullname is required'),
    email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email'),
    phoneNumber: yup
        .string()
        .matches(/^\+994\d{9}$/, "Phone number must start with +994 and contain 9 digits after the country code")
        .required('A phone number is required'),
    subject: yup
        .string()
        .required('Subject is required')
        .min(5, 'Subject should be at least 5 characters'),
    message: yup
        .string()
        .required('Message is required')
        .min(10, 'Message should be at least 10 character')
})