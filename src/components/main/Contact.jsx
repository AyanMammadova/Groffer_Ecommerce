import React from 'react'

function Contact() {
    return (
        <>
            <div className='xl:flex mb-[30px] relative justify-center pt-[180px] w-[100%] mx-auto'>
                <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-Contact_bg.jpeg?id=9879" className='min-h-[50vh] object-cover absolute top-0 -z-20' />
                <div className='pb-[40px] text-[1.2em] md:p-[20px] xl:w-[65%] w-[95%] md:w-[60%] mx-auto shadow-lg xl:mx-0 bg-white font-[500]' >
                    <p className='text-[2.5em] pb-[20px] pl-[20px] md:text-[3em] md:pl-[40px] pt-[10px]'>Send Us A Message</p>
                    <form action="" className='px-[5px] md:px-[30px] text-[1.1em] flex gap-[20px] flex-wrap justify-between'>
                        <div className='w-[100%] lg:w-[45%] '>
                            <p>Full Name</p>
                            <input
                                placeholder='Your Full Name'
                                type="text"
                                className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                            />
                        </div>
                        <div className='w-[100%] lg:w-[45%]'>
                            <p>Email Adress</p>
                            <input
                                placeholder='Email Address'
                                type="text"
                                className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                            />
                        </div>
                        <div className='w-[100%] lg:w-[45%]'>
                            <p>Phone Number</p>
                            <input
                                placeholder='Your Phone Number'
                                type="text"
                                className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                            />
                        </div>
                        <div className='w-[100%] lg:w-[45%]'>
                            <p>Subject</p>
                            <input
                                placeholder='The Message Subject'
                                type="text"
                                className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'
                            />
                        </div>
                        <div className='w-[100%]'>
                            <p>Message</p>
                            <textarea name="" id=""
                                placeholder='Type your Message'
                                className='w-[100%] mt-[10px] p-[5px] py-[10px] md:py-[20px] rounded-sm  bg-gray-100 border-[1px] border-gray-300'>
                            </textarea>
                        </div>
                    </form>
                </div>
                <div className='flex gap-[30px] p-[30px] text-white flex-col xl:w-[25%] w-[95%] md:w-[60%] mx-auto xl:mx-0 bg-[#136450]'>
                    <div>
                        <img className='h-[60px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-email.svg" alt="" />
                        <p className='text-[2em] font-[500]'>Email Address</p>
                        <p className='text-[1.3em]'>example1234@gmail.com</p>
                        <p className='text-[1.3em]'>example1234@gmail.com</p>
                    </div>
                    <div>
                        <img className='h-[60px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-location.svg" alt="" />
                        <p className='text-[2em] font-[500]'>HeadQuarters</p>
                        <p className='text-[1.3em]'>example location</p>
                        <p className='text-[1.3em]'>example location</p>
                    </div>
                    <div>
                        <img className='h-[60px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-phone.svg" alt="" />
                        <p className='text-[2em] font-[500]'>Phone Number</p>
                        <p className='text-[1.3em]'>example1234132897328979</p>
                        <p className='text-[1.3em]'>example1234320r823047</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
