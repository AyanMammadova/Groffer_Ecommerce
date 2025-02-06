import React from 'react'
import BreadCrumps from './BreadCrumps'
import { FaTableColumns } from 'react-icons/fa6'

function CheckOut() {
    return (
        <>
            <BreadCrumps page={[
                {
                    name: 'Checkout',
                    slug: 'checkout'
                }
            ]} />
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>Checkout</p>
            <div className='w-[95%] mb-[20px] bg-gray-100 mx-auto border-t-[4px] px-[5px] border-[#136450]  py-[20px] mt-[20px]'>
                <p className=' text-[1.1em] flex gap-[20px] items-center  text-[#136450]'> <FaTableColumns/>Have a coupon? Click here to enter your code</p>
            </div>
        </>
    )
}

export default CheckOut
