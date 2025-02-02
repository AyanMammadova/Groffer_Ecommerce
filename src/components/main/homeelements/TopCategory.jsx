import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import ProductCard from '../ProductCard'

function TopCategory() {
    return (
        <>
            <div className='p-[30px]'>
                <p className='text-center font-bold text-[2.4em] pb-[30px]'>Top Categories</p>

                <div className='md:flex gap-[30px]'>
                    <div className='w-[90%] sm:w-[80%] pt-[20px] mx-auto md:w-[350px] '>
                        <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-bann_categ1.jpg')] gap-[6px] rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[400px] flex items-center justify-center text-white flex-col">
                            <p className='text-[2em] font-[500]'>Paleo</p>
                            <p>9 products</p>
                            <div className='w-[55%] rounded-lg text-[.9em] py-[10px] flex flex-col items-center justify-center border-[1px] border-white'>
                                <p className='font-[500] md:text-[1.4em] text-center'>View All Items</p>
                            </div>
                        </div>
                    </div>

                    <div className=' pt-[20px] mx-auto gap-[10px] sm:gap-[30px] grid grid-cols-2  lg:grid-cols-4'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>



                    </div>

                </div>
            </div>

            <div className='p-[30px]'>

                <div className='md:flex gap-[30px]'>
                    <div className='w-[90%] md:order-3 sm:w-[80%] pt-[20px] mx-auto md:w-[350px] '>
                        <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-bann_categ1.jpg')] gap-[6px] rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[400px] flex items-center justify-center text-white flex-col">
                            <p className='text-[2em] font-[500]'>Vegan</p>
                            <p>9 products</p>
                            <div className='w-[55%] rounded-lg text-[.9em] py-[10px] flex flex-col items-center justify-center border-[1px] border-white'>
                                <p className='font-[500] md:text-[1.4em] text-center'>View All Items</p>
                            </div>
                        </div>
                    </div>
                    <div className=' pt-[20px] mx-auto gap-[10px] sm:gap-[30px] grid grid-cols-2  lg:grid-cols-4'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>

                    </div>


                </div>
            </div>

        </>
    )
}

export default TopCategory
