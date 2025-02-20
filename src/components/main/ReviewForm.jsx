import { useFormik } from 'formik';
import React, { useState } from 'react'
import apiInstance from '../../services/axiosInstance';
import { ReviewSchemas } from '../../schemas/ReviewSchemas';

function ReviewForm() {
    const [focusedField, setFocusedField] = useState('')
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            review: '',
            name: '',
            email: ''
        },
        validationSchema: ReviewSchemas,
        onSubmit: submit
    });
    function submit(values, action) {
        apiInstance.post(
            'Review/add',

        )
            .then(res => {

            })
        // .catch(err =>

        // );
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className='text-gray-600 text-[.8em]'>Your email address will not be published. Required fields are marked *</p>
                <div className=''>
                    <label htmlFor="review">Your review*</label>
                    <textarea
                        value={values.review}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('review')}
                        onBlur={() => setFocusedField(null)}
                        type="text"
                        name='review'
                        className='focus:outline-hidden pl-[10px] w-[100%] my-[10px] flex items-center py-[10px]  px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>

                        </textarea>
                </div>
                {focusedField === 'review' && errors.review && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.review}</p>}



                <div className=''>
                    <label htmlFor="name">Your name*</label>
                    <input
                        value={values.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        type="text"
                        name='name'
                        className='focus:outline-hidden pl-[10px] my-[10px] w-[60%] flex items-center py-[10px]  px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 ' />
                </div>
                {focusedField === 'name' && errors.name && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.name}</p>}

                <div className=''>
                    <label htmlFor="email">Your email*</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        type="text"
                        name='email'
                        className='focus:outline-hidden pl-[10px] w-[60%] flex items-center py-[10px]  px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 ' />
                </div>
                {focusedField === 'email' && errors.email && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.email}</p>}


            </form>
        </>
    )
}

export default ReviewForm
