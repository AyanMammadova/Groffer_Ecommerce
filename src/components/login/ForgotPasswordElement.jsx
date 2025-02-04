import React, { useEffect, useRef } from 'react'

function ForgotPasswordElement({type}) {
    return (
        <>
            <div className={`flex flex-col gap-[20px] relative py-[20px]`}>
                <div className={`${type=='page' ? 'hidden' : 'block'} w-[90%] mx-auto border-l-2 border-yellow-500 px-[5px] font-[500]`}>
                    <p>Lost your password? Please enter your email address. You will receive mail with link to set new password.</p>
                </div>
                <div className='w-[90%] flex items-center py-[20px] px-[3px] bg-[#F7F7F7] rounded-md border-[1px] border-gray-300 mx-auto'>
                    <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
                    <input type="text"  className='focus:outline-hidden pl-[10px] w-[100%]' placeholder='Email or Username' />
                </div>

                <div className={`${type == 'page' ? 'w-[50%]' : 'w-[90%] '} mx-[5%] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450]  hover:text-[#136450] cursor-pointer hover:bg-white`}>
                    Reset Password
                </div>


            </div>
        </>
    )
}

export default ForgotPasswordElement
