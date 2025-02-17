import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { LoginFormSchemas } from '../../schemas/LoginFormSchemas';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { DATA } from '../../context/DataContext';
import apiInstance from '../../services/axiosInstance';
import { useNavigate } from 'react-router-dom';

function LoginElement({ type }) {
    const navigate=useNavigate()
    const [mainError,setMainError]=useState('')
    const  refreshtoken=localStorage.getItem('refreshToken')
    const  role=localStorage.getItem('role')
    const [token,setToken]=useState('')
    
    const [eye, setEye] = useState(false)
    useEffect(() => {
        if (token) {
            const decodedToken=jwtDecode(token)
            const rol=(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
            localStorage.setItem("role",role)
            console.log('refresh: ' + refreshtoken)
            console.log('acces: ' + token)
            console.log('role: ' + rol)
        }
    }, [token]);
    function submit(values, action) {
        const formData = new FormData();
        formData.append('emailorusername', values.emailorusername);
        formData.append('password', values.password);
        apiInstance.post(
            'Auth/login',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
            .then(res => {
                navigate('/my-account')
                console.log('Success:', res.data)
                setToken(res.data.accessToken);
                localStorage.setItem("refreshToken",res.data.refreshToken)
                localStorage.setItem("loginisover",true)
                setMainError('')
            })
            .catch(err => 
                console.error('Errorum:', err),
                setMainError('Username or password is wrong')
            );
    }
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            emailorusername: '',
            password: ''
        },
        validationSchema: LoginFormSchemas,
        onSubmit: submit
    });
    return (
        <>
            <form onSubmit={handleSubmit} className={`flex text-black flex-col gap-[20px] relative w-[100%] py-[20px]`}>
                <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                    <input
                        value={values.emailorusername}
                        onChange={handleChange}
                        type="text"
                        name='emailorusername'
                        className='focus:outline-hidden pl-[10px] w-[100%]'
                        placeholder='Email or Username*' />

                </div>
                {errors.emailorusername && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.emailorusername}</p>}
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
                <p className='text-[1.3em] text-red-500 text-center'>{mainError}</p>
                <div className={`${type == 'page' ? 'flex' : 'block'}`}>
                    <button
                        type='submit'
                        className={`${type == 'page' ? 'w-[50%]' : 'w-[90%] '} mx-[5%]  font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] hover:text-[#136450] cursor-pointer hover:bg-white`}>
                        Log in
                    </button>
                   
                </div>



            </form>
        </>
    )
}

export default LoginElement
