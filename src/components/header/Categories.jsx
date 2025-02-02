import React from 'react'
import { FaAppleAlt } from 'react-icons/fa'
import { FaFish } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'

function Categories() {
    return (
        <>
            <div className='absolute group-hover:max-h-[100vh] group-hover:opacity-100 max-h-0 opacity-0 top-[50px] bg-white z-50 w-[100%]'>
                <div className='flex group relative justify-between  px-[10px] items-center'>
                    <FaAppleAlt/>
                    <p className='text-[1.2em] p-[10px] font-[500]'>Fresh vegetables</p>
                    <IoIosArrowForward/>
                    {/* <div className='w-[100px] h-[50px] bg-red-300 absolute -right-[100px] group-hover:max-h-[100vh] group-hover:opacity-100 max-h-0 opacity-0'>
                    </div> */}
                </div>
                <div className='flex group relative justify-between  px-[10px] items-center'>
                    <FaFish/>
                    <p className='text-[1.2em] p-[10px] font-[500]'>Meat and Seafood</p>
                    <IoIosArrowForward/>
                    {/* <div className='w-[100px] h-[50px] bg-red-300 absolute -right-[100px] group-hover:max-h-[100vh] group-hover:opacity-100 max-h-0 opacity-0'>
                    </div> */}
                </div>
                <div className='flex group relative justify-between  px-[10px] items-center'>
                    <FaAppleAlt/>
                    <p className='text-[1.2em] p-[10px] font-[500]'>Fresh vegetables</p>
                    <IoIosArrowForward/>
                    {/* <div className='w-[100px] h-[50px] bg-red-300 absolute -right-[100px] group-hover:max-h-[100vh] group-hover:opacity-100 max-h-0 opacity-0'>
                    </div> */}
                </div>
                <div className='flex group relative justify-between  px-[10px] items-center'>
                    <FaFish/>
                    <p className='text-[1.2em] p-[10px] font-[500]'>Meat and Seafood</p>
                    <IoIosArrowForward/>
                    {/* <div className='w-[100px] h-[50px] bg-red-300 absolute -right-[100px] group-hover:max-h-[100vh] group-hover:opacity-100 max-h-0 opacity-0'>
                    </div> */}
                </div>
                
            </div>
        </>
    )
}

export default Categories
