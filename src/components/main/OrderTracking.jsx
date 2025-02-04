import React, { useState } from 'react'
import BreadCrumps from './BreadCrumps'
import { MdError } from 'react-icons/md'

function OrderTracking() {
    const [error,setError]=useState(false)
    return (
        <>
            <BreadCrumps page={[
                {
                    name: 'Order Tracking',
                    slug: 'order-tracking'
                }
            ]} />
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>Order Tracking</p>
            <div className={`${error ? 'block' : 'hidden'} w-[95%] bg-gray-100 mx-auto border-t-[4px] px-[5px] border-[#B81C23]  py-[20px] mt-[20px]`}>
                <p className=' text-gray-800 text-[1.1em] flex gap-[20px] items-center'><MdError className='text-[#B81C23] text-[1.3em]'/>Sorry, the order could not be found. Please contact us if you are having difficulty finding your order details.</p>
            </div>
            <div className='p-[10px] w-[100%] mb-[30px] pt-[20px] md:px-[40px]'>
                <p className='text-[1.2em]'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <div className='sm:flex w-[100%] my-[20px] justify-between'>
                    <div className='w-[100%] sm:w-[47%]'>
                        <p className='font-bold text-[1.3em] '>Order ID</p>
                        <input type="text" className='rounded-sm px-[10px] py-[20px] w-[100%] border-[1px] border-gray-300 ' />
                    </div>
                    <div className='w-[100%] sm:w-[47%]'>
                        <p className='font-bold text-[1.3em] '>Billing email</p>
                        <input type="text" className='rounded-sm px-[10px] py-[20px] w-[100%] border-[1px] border-gray-300 ' />
                    </div>
                </div>
                <button 
                onClick={()=>{setError(true)}}
                className='font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all px-[20px] duration-200 bg-[#136450] text-white border-[#136450] hover:text-[#136450] cursor-pointer hover:bg-white'>
                    Track
                </button>
            </div>
        </>
    )
}

export default OrderTracking
