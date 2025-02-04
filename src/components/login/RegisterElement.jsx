import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function RegisterElement({type}) {

    const [eye, setEye] = useState(false)

    const [confirmeye, setConfirmEye] = useState(false)
    return (
        <>
            <div className={`flex  flex-col gap-[20px] py-[20px]`}>
                <div className='w-[90%] flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                    <input type="text" className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Username*' />
                </div>
                {/* <div className=' flex justify-between gap-[15px] mx-auto items-center w-[90%]'>
                    <div className='w-[48%] flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                        <input type="text" className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Fist name*' />
                    </div>
                    <div className='w-[48%] flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                        <input type="text" className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Last name*' />
                    </div>
                </div> */}
                <div className='w-[90%] flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                    <input type="text" className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Email*' />
                </div>
                <div className='w-[90%] relative flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                    <input type={eye ? 'text' : 'password'} className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Password' />
                    <img 
                        onClick={() => { setEye(!eye) }}
                        className={`${eye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                    <img
                        onClick={() => { setEye(!eye) }}
                        className={`${eye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                </div>
                <div className='w-[90%] relative flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                    <input type={confirmeye ? 'text' : 'password'} className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Confirm Password' />
                    <img
                        onClick={() => { setConfirmEye(!confirmeye) }}
                        className={`${confirmeye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                    <img
                        onClick={() => { setConfirmEye(!confirmeye) }}
                        className={`${confirmeye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                </div>
                <Link to={'/my-account/#1'} className={`${type == 'page' ? 'w-[50%]' : 'w-[90%] '} mx-[5%] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] hover:text-[#136450] cursor-pointer hover:bg-white`}>
                    Create Account
                </Link>
            </div>
        </>
    )
}

export default RegisterElement
