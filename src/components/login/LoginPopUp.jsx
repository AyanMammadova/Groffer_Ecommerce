import React, { useState } from 'react'
import LoginElement from './LoginElement'
import RegisterElement from './RegisterElement'
import ForgotPasswordElement from './ForgotPasswordElement'

function LoginPopUp() {
    // localStorage.clear()
    const registeredstat=Number(localStorage.getItem("registeredemail"))
    const registeredstatus=registeredstat==201 ? true : false
    console.log('regsier' + registeredstatus)
    const confirmeduser=localStorage.getItem("confirmeduser")
    
    const [isSignin, setIsSignin] = useState(confirmeduser ? true :false)
    const [forgot, setForgot] = useState(false)

    console.log('confirmed user: ' + confirmeduser)
    return (    
        <>
            <div onClick={(e) => { e.stopPropagation() }} className='w-[90%] mx-auto sm:w-[500px] z-50 bg-white '>
               
                <div>
                    <div className='flex'>
                        <div
                            onClick={() => { setIsSignin(true), setForgot(false) }}
                            className={`${isSignin || registeredstatus ? '' : 'bg-[#136450] text-white'} cursor-pointer w-[50%] py-[20px] text-center font-bold`}>
                            Sign in

                        </div>
                        <div 
                            onClick={() => { setIsSignin(false), setForgot(false) }}
                            className={`${isSignin ? 'bg-[#136450] text-white' : ''} cursor-pointer w-[50%] py-[20px] text-center font-bold`}>
                            New Account

                        </div>
                    </div>

                    <div className={`${(isSignin || registeredstatus) && (!forgot || registeredstatus) ? 'block' : 'hidden'} relative`}>
                        {/* <p className='p-[20px] text-[1.5em] font-[500]'>Login</p> */}
                        <LoginElement type={'popup'} />
                        <div
                            onClick={() => { setForgot(true), setIsSignin(true) }}
                            className='absolute text-center w-[100%] cursor-pointer text-white -bottom-[30px]'>
                            {/* <p>Forgot Your Password</p> */}
                        </div>
                    </div>
                    <div className={`${forgot ? 'block' : 'hidden'} relative`}>
                        <ForgotPasswordElement type={'popup'} />
                        <div
                            onClick={() => { setForgot(false), setIsSignin(true) }}
                            className='absolute cursor-pointer text-center w-[100%] text-white -bottom-[30px]'>
                            <p>Back to Login</p>
                        </div>
                    </div>

                    <div className={`${isSignin || forgot ? 'hidden' : 'block'}`}>
                    {/* <p className='p-[20px] text-[1.5em] font-[500]'>Register for best experience</p> */}
                        <RegisterElement type={'popup'} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginPopUp
