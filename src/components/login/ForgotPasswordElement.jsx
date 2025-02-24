import React from 'react'
import { useFormik } from 'formik';
import { ForgotPasswordFormSchemas } from '../../schemas/ForgotPasswordSchemas';
import apiInstance from '../../services/axiosInstance';
import toast from 'react-hot-toast';

function ForgotPasswordElement({ type }) {
    function submit(values,actions) {
        const formData = new FormData();
        formData.append('Email', values.email);

        apiInstance.post(
            'Auth/forgot-password',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        .then(response => {
            toast.success('If you were rgistered,reset link sent to you email succesfully')
            console.log('Success:', response.data);
            actions.resetForm();
        })
        .catch(error => {
            toast.error('Failed to sedn your reset link')
            console.error('Error:', error);
        });
    }
    const { values, errors, handleSubmit, handleChange,actions } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: ForgotPasswordFormSchemas,
        onSubmit: submit
    });
    return (
        <>
            <div className={`flex flex-col gap-[20px] relative py-[20px]`}>
                <div className={`${type == 'page' ? 'hidden' : 'block'} w-[90%] mx-auto border-l-2 border-yellow-500 px-[5px] font-[500]`}>
                    <p>Lost your password? Please enter your email address. You will receive mail with link to set new password.</p>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='w-[90%] flex mb-[20px] items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                        <input
                            value={values.email}
                            onChange={handleChange}
                            type="text"
                            name='email'
                            className='focus:outline-hidden pl-[10px] w-[100%]'
                            placeholder='Email*' />

                    </div>
                    {errors.email && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.email}</p>}


                    <button
                        type='submit'
                        className={`${type == 'page' ? 'w-[50%]' : 'w-[90%] '} mx-[5%] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450]  hover:text-[#136450] cursor-pointer hover:bg-white`}>
                        Reset Password
                    </button>
                </form>


            </div>
        </>
    )
}

export default ForgotPasswordElement
