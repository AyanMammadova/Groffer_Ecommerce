import React, { useState } from 'react'

function LoginPopUp() {
    const [isSignin, setIsSignin] = useState(false)
    const [eye, setEye] = useState(false)
    const [confirmeye, setConfirmEye] = useState(false)
    return (
        <>
            <div className='w-[280px] sm:w-[500px]  bg-white '>
                <div className='flex'>
                    <div
                        onClick={() => { setIsSignin(!isSignin) }}
                        className={`${isSignin ? 'bggreen text-white' : ''} cursor-pointer w-[50%] py-[10px] text-center font-bold`}>
                        Sign in

                    </div>
                    <div
                        onClick={() => { setIsSignin(!isSignin) }}
                        className={`${isSignin ? '' : 'bggreen text-white'} cursor-pointer w-[50%] py-[10px] text-center font-bold`}>
                        New Account

                    </div>
                </div>

                <div className={`${isSignin ? 'flex' : 'hidden'}  flex-col gap-[20px] py-[20px]`}>
                    <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                        <input type="text" className='focus:outline-hidden pl-[10px]' placeholder='Username*' />
                    </div>
                    <div className=' flex justify-between gap-[15px] mx-auto items-center w-[90%]'>
                        <div className='w-[48%] flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                            <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                            <input type="text" className='focus:outline-hidden pl-[10px]' placeholder='Fist name*' />
                        </div>
                        <div className='w-[48%] flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                            <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-username.svg" alt="" />
                            <input type="text" className='focus:outline-hidden pl-[10px]' placeholder='Last name*' />
                        </div>
                    </div>
                    <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                        <input type="text" className='focus:outline-hidden pl-[10px]' placeholder='Email*' />
                    </div>
                    <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                        <input type={eye ? 'text' : 'password'} className='focus:outline-hidden pl-[10px]' placeholder='Password' />
                        <img
                            onClick={() => { setEye(!eye) }}
                            className={`${eye ? 'absolute' : 'hidden' } right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                        <img
                            onClick={() => { setEye(!eye) }}
                            className={`${eye ? 'hidden' : 'absolute' } right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                    </div>

                    <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                        <input type={confirmeye ? 'text' : 'password'} className='focus:outline-hidden pl-[10px]' placeholder='Confirm Password' />
                        <img
                            onClick={() => { setConfirmEye(!confirmeye) }}
                            className={`${confirmeye ? 'absolute' : 'hidden' } right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                        <img
                            onClick={() => { setConfirmEye(!confirmeye) }}
                            className={`${confirmeye ? 'hidden' : 'absolute' } right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                    </div>
                    <div className='w-[90%] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] mx-auto hover:text-[#136450] cursor-pointer hover:bg-white'>
                        Create Account
                    </div>

                </div>
                <div className={`${isSignin ? 'hidden' : 'flex'}  flex-col gap-[20px] py-[20px]`}>


                    <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                        <input type="text" className='focus:outline-hidden pl-[10px]' placeholder='Email or Username' />
                    </div>
                    <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                        <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                        <input type={eye ? 'text' : 'password'} className='focus:outline-hidden pl-[10px]' placeholder='Password' />
                        <img
                            onClick={() => { setEye(!eye) }}
                            className={`${eye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                        <img
                            onClick={() => { setEye(!eye) }}
                            className={`${eye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                    </div>
                    <div className='w-[90%] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] mx-auto hover:text-[#136450] cursor-pointer hover:bg-white'>
                        Log in
                    </div>

                </div>

            </div>
        </>
    )
}

export default LoginPopUp
