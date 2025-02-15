import * as yup from 'yup'

export const CategorySchemas = yup.object().shape({
    category: yup.string().required('Category is required').matches(/^[a-zA-Z0-9\s]*$/, 'Symbols are not allowed')
})
export const AdminLoginSchemas = yup.object().shape({
    emailorusername: yup.string().required('EmailorUsername is required'),
    password: yup.string().required('Password is required').min(6, 'must be at least 6 characters long')

})