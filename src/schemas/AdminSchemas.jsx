import * as yup from 'yup'

export const CategorySchemas = yup.object().shape({
    category: yup.string().
        required('Category is required')
        .matches(/^[a-zA-Z0-9\s]*$/, 'Symbols are not allowed')
})
export const TagSchemas = yup.object().shape({
    tag: yup.string().
        required('Tag is required')
        .matches(/^[a-zA-Z0-9\s]*$/, 'Symbols are not allowed')
})
export const SubCatgeorySchemas = yup.object().shape({
    tag: yup.string().
        required('SubCatgeory is required')
        .matches(/^[a-zA-Z0-9\s\-,.]+$/, 'Symbols are not allowed')
})

export const ProductSchemas = yup.object().shape({
    title: yup
        .string()
        .required('Title cannot be empty')
        .min(3, 'Title must be at least 3 characters long')
        .matches(/^[a-zA-Z0-9\s\-,.]+$/, 'Title can only contain letters, numbers, spaces, and hyphens'),

    description: yup
        .string()
        .required('Description cannot be empty')
        .min(10, 'Description must be at least 10 characters long'),
    price: yup
        .number()
        .required('Price cannot be empty')
        .typeError('Must be number')
        .positive('Price must be a positive number'),
    discount: yup
        .number()
        .required('Discount cannot be empty')
        .typeError('Must be number')
        .min(0, 'Discount cannot be negative')
        .max(100, 'Discount cannot be greater than 100%'),
    category: yup
        .string()
        .required('Category is required')
        .notOneOf(['default'], 'Please select a valid category'),
    subcategory: yup
        .string()
        .required('Subcategory is required')
        .notOneOf(['default'], 'Please select a valid subcategory'),
    tags: yup
        .array()
        .required('Tags are reuired')
        .min(1, 'At least one tag is required'),
    images: yup
        .array()
        .min(1, 'At least one image is required'),
});
