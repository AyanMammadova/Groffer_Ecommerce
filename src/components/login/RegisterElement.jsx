import React, { useState } from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../../schemas/RegisterFormSchemas';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import apiInstance from '../../services/axiosInstance';

function RegisterElement({ type }) {
    const navigate=useNavigate()
    const registeredEmail = localStorage.getItem("registeredemail")
    const [isRegistered, setIsregistered] = useState(localStorage.getItem("registerstatus"))
    const [eye, setEye] = useState(false)
    const [mainError,setMainError]=useState('')
    const [confirmeye, setConfirmEye] = useState(false)
    function submit(values, action) {
        const userData = {
            username: values.username,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email
        };
        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('firstname', values.firstname);
        formData.append('lastname', values.lastname);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('confirmpassword', values.confirmpassword);
        console.log(formData)
        apiInstance.post(
            'Auth/register',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
            .then(res => {
                localStorage.setItem("registerstatus", res.status)
                localStorage.setItem("registeredemail", values.email)
                localStorage.setItem("userData", JSON.stringify(userData));
                navigate('/submit')
            })
            .catch(err =>{
                setMainError('User already exist,go to sign in'),
                console.log(mainError),
                console.error('Error:', err)
        });
    }
    const { values, errors, handleSubmit, handleChange, handleReset } = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    });
    return (

        <>
            <form
                onSubmit={handleSubmit}
                className={`flex  flex-col gap-[20px] py-[10px]`}
            >
                <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                    <input
                        value={values.username}
                        onChange={handleChange}
                        type="text"
                        name='username'
                        className='focus:outline-hidden pl-[10px] w-[100%]'
                        placeholder='Username*' />

                </div>
                {errors.username && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.username}</p>}

                <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                    <input
                        value={values.firstname}
                        onChange={handleChange}
                        type="text"
                        name='firstname'
                        className='focus:outline-hidden pl-[10px] w-[100%]'
                        placeholder='Firstname*' />

                </div>
                {errors.firstname && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.firstname}</p>}

                <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                    <input
                        value={values.lastname}
                        onChange={handleChange}
                        type="text"
                        name='lastname'
                        className='focus:outline-hidden pl-[10px] w-[100%]'
                        placeholder='Lastname*' />

                </div>
                {errors.lastname && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.lastname}</p>}

                <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
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

                <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                    <input
                        value={values.password}
                        onChange={handleChange}
                        type={eye ? 'text' : 'password'}
                        name='password'
                        className='focus:outline-hidden pl-[10px] w-[100%]'
                        placeholder='Password' />

                    <img
                        onClick={() => { setEye(!eye) }}
                        className={`${eye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                    <img
                        onClick={() => { setEye(!eye) }}
                        className={`${eye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                </div>
                {errors.password && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.password}</p>}

                <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                    <input
                        value={values.confirmpassword}
                        onChange={handleChange}
                        type={confirmeye ? 'text' : 'password'}
                        name='confirmpassword'
                        className='focus:outline-hidden pl-[10px] w-[100%]'
                        placeholder='Confirm Password' />

                    <img
                        onClick={() => { setConfirmEye(!confirmeye) }}
                        className={`${confirmeye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                    <img
                        onClick={() => { setConfirmEye(!confirmeye) }}
                        className={`${confirmeye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                </div>
                {errors.confirmpassword && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.confirmpassword}</p>}
                <p className='text-center text-red-500 text-[1.3em]'>{mainError}</p>
                <button
                    type='submit'
                    className={`${type == 'page' ? 'w-[50%]' : 'w-[90%] '} mx-[5%] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] hover:text-[#136450] cursor-pointer hover:bg-white`}>
                    Create Account
                </button>
            </form>
        </>
    )
}

export default RegisterElement
