import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <>
            <div className='xl:flex mb-[30px] relative justify-center pt-[180px] w-[100%] mx-auto'>
                <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-Contact_bg.jpeg?id=9879" className='min-h-[50vh] object-cover absolute top-0 -z-20' />
                <div className='pb-[40px] text-[1.2em] md:p-[20px] xl:w-[65%] w-[95%] md:w-[60%] mx-auto shadow-lg xl:mx-0 bg-white font-[500]' >
                    <p className='text-[2.5em] pb-[20px] pl-[20px] md:text-[3em] md:pl-[40px] pt-[10px]'>Send Us A Message</p>
                    <ContactForm/>
                </div>
                <div className='flex gap-[30px] p-[30px] text-white flex-col xl:w-[25%] w-[95%] md:w-[60%] mx-auto xl:mx-0 bg-[#136450]'>
                    <div>
                        <img className='h-[50px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-email.svg" alt="" />
                        <p className='text-[2em] font-[500]'>Email Address</p>
                        <p className='text-[1em]'>example1234@gmail.com</p>
                        <p className='text-[1em]'>example1234@gmail.com</p>
                    </div>
                    <div>
                        <img className='h-[50px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-location.svg" alt="" />
                        <p className='text-[2em] font-[500]'>HeadQuarters</p>
                        <p className='text-[1em]'>example location</p>
                        <p className='text-[1em]'>example location</p>
                    </div>
                    <div>
                        <img className='h-[50px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-phone.svg" alt="" />
                        <p className='text-[2em] font-[500]'>Phone Number</p>
                        <p className='text-[1em]'>example1234132897328979</p>
                        <p className='text-[1em]'>example1234320r823047</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
