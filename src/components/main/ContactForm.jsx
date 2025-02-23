import { Formik, useFormik } from 'formik';
import React from 'react'
import { ContactFormSchemas } from '../../schemas/ContactFormSchemas';
import apiInstance from '../../services/axiosInstance';
import toast from 'react-hot-toast';

function ContactForm() {
    const { values, errors, handleSubmit,actions,resetForm, touched, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: ContactFormSchemas,
        onSubmit: submit
    });
    function submit(values, actions) {
        console.log(values)
        apiInstance.post(
            'Contact',
            {
                fullName: values.fullName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                subject: values.subject,
                message: values.message
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => {
                console.log(res)
                actions.resetForm()
                toast.success('Your message sent!')
            })
            .catch(err =>
                console.error('Errorum:', err),

            );
    }
    return (
        <>
            <form onSubmit={(e) => { handleSubmit(), e.preventDefault() }} className='px-[5px] md:px-[30px] text-[1.1em] flex gap-[20px] flex-wrap justify-between'>
                <div className='w-[100%] lg:w-[45%] '>
                    <label>Full Name</label>
                    <input
                        placeholder='Your Full Name'
                        type="text"
                        id='fullName'
                        name='fullName'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.fullName}
                        className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                    />
                    {
                        touched.fullName && errors.fullName ? <p className='text-red-500 text-[.8em]'>{errors.fullName}</p> : ''
                    }
                </div>
                <div className='w-[100%] lg:w-[45%]'>
                    <label>Email Adress</label>
                    <input
                        placeholder='Email Address'
                        type="text"
                        id='email'
                        name='email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                    />
                    {
                        touched.email && errors.email ? <p className='text-red-500 text-[.8em]'>{errors.email}</p> : ''
                    }
                </div>
                <div className='w-[100%] lg:w-[45%]'>
                    <label>Phone Number</label>
                    <input
                        placeholder='Your Phone Number'
                        type="text"
                        id='phoneNumber'
                        name='phoneNumber'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phoneNumber}
                        className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                    />
                    {
                        touched.phoneNumber && errors.phoneNumber ? <p className='text-red-500 text-[.8em]'>{errors.phoneNumber}</p> : ''
                    }
                </div>
                <div className='w-[100%] lg:w-[45%]'>
                    <label>Subject</label>
                    <input
                        placeholder='The Message Subject'
                        type="text"
                        id='subject'
                        name='subject'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.subject}
                        className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                    />
                    {
                        touched.subject && errors.subject ? <p className='text-red-500 text-[.8em]'>{errors.subject}</p> : ''
                    }
                </div>
                <div className='w-[100%]'>
                    <label>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.message}
                        placeholder='Type your Message'
                        className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'>
                    </textarea>
                    {
                        touched.message && errors.message ? <p className='text-red-500 text-[.8em]'>{errors.message}</p> : ''
                    }
                </div>
                <button type='submit' className='bg-[#136450] text-white p-[10px] rounded-md cursor-pointer px-[20px]'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default ContactForm
