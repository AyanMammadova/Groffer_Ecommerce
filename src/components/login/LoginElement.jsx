import React, { useState } from 'react'


function LoginElement({ type }) {
    const [eye, setEye] = useState(false)
    return (
        <>
            <div className={`flex flex-col gap-[20px] relative py-[20px]`}>
                <div className='w-[90%] flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                    <input type="text" className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Email or Username' />
                </div>
                <div className='w-[90%] relative flex items-center py-[20px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
                    <input type={eye ? 'text' : 'password'} className='focus:outline-hidden pl-[10px]  w-[100%]' placeholder='Password' />
                    <img
                        onClick={() => { setEye(!eye) }}
                        className={`${eye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
                    <img
                        onClick={() => { setEye(!eye) }}
                        className={`${eye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
                </div>
                <div className={`${type=='page' ? 'flex' : 'block'}`}>
                    <div className={`${type == 'page' ? 'w-[50%]' : 'w-[90%] '} mx-[5%]  font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] hover:text-[#136450] cursor-pointer hover:bg-white`}>
                        Log in
                    </div>
                    <div className='flex items-center gap-[10px] mx-[5%]'>
                        <input type='checkbox' />
                        <p>Remember me</p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default LoginElement
