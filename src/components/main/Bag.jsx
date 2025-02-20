import React, { useContext, useState } from 'react'
import BreadCrumps from './BreadCrumps'
import { Link } from 'react-router-dom'
import 'react-medium-image-zoom/dist/styles.css'
import { BASKET } from '../../context/BasketContext'
import { IoClose } from 'react-icons/io5'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { LiaShippingFastSolid } from 'react-icons/lia'

function Bag() {
    const { basketData } = useContext(BASKET)
    return (
        <>
            <BreadCrumps page={[
                {
                    name: 'My Bag',
                    slug: 'cart'
                }
            ]} />
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>Cart</p>
            {
                !basketData ? <>
                    <div className='w-[95%] bg-gray-100 mx-auto border-t-[4px] px-[5px] border-[#136450]  py-[20px] mt-[20px]'>
                        <p className=' text-gray-800 text-[1.1em] '>Your cart is currently empty</p>
                    </div>
                    <div className='p-[10px] mb-[30px] pt-[20px] md:px-[40px]'>
                        <Link to={'/shop/all'} className='w-[200px] p-[5px] mt-[40px] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] mx-auto hover:text-[#136450] cursor-pointer hover:bg-white'>
                            Return to Shop
                        </Link>
                    </div>
                </>

                    : basketData.map((item, i) => {
                        return <div key={i} className='w-[96%] my-[30px] shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] p-[10px] mx-auto flex justify-between'>
                            <div className='hidden md:flex w-[100%] justify-between'>
                                <div className='flex justify-center gap-[20px] items-center'>
                                    <IoClose className='text-[3.5em] text-[#136450]' />
                                    <img className='hidden lg:block h-[100px]' src={item.img} alt="" />
                                    <p className=' text-gray-800 text-[1.1em] font-[500]'>{item.name}</p>
                                </div>
                                <div className='flex justify-center gap-[30px] items-center'>
                                    <p className=' text-gray-800 text-[1.1em] '>{item.price}/piece</p>
                                    <p className=' text-gray-800 bg-[#EFEFEF] rounded-md text-[1.1em] px-[10px] flex items-center'>
                                        <FaMinus className='h-[40px] w-[10px]' />
                                        <input
                                            placeholder={item.count}
                                            type='text'
                                            className=' h-[40px]  w-[30px] text-center' />
                                        <FaPlus className=' h-[40px] w-[10px]' />
                                    </p>
                                    <p className=' text-gray-800 text-[1.1em] '>$ {(item.count * item.price).toFixed(2)} in total</p>
                                </div>
                            </div>


                            <div className='block text-[1.2em] font-[500] md:hidden w-[100%]'>
                                <IoClose className='text-[3.5em] text-[#136450]' />
                                <div className='flex w-[100%] py-[10px] justify-between'>
                                    <p>Product:</p>
                                    <p className='truncate max-w-[70%]'>{item.name}</p>
                                </div>
                                <div className='flex w-[100%] py-[10px] justify-between'>
                                    <p>Price:</p>
                                    <p>{item.price}<span className='font-[400] text-gray-600'>/piece</span></p>
                                </div>
                                <div className='flex w-[100%] py-[10px] justify-between'>
                                    <p>Quantity:</p>
                                    <p className=' text-gray-800 bg-[#EFEFEF] rounded-md text-[1.1em] px-[10px] flex items-center'>
                                        <FaMinus className='h-[40px] w-[10px]' />
                                        <input
                                            placeholder={item.count}
                                            type='text'
                                            className=' h-[40px]  w-[30px] text-center' />
                                        <FaPlus className=' h-[40px] w-[10px]' />
                                    </p>
                                </div>
                                <div className='flex w-[100%] py-[5px] justify-between'>
                                    <p>Subtotal:</p>
                                    <p className=' text-gray-800 text-[1.1em] '>$ {(item.count * item.price).toFixed(2)} <span className='font-[400] text-gray-600'>in total</span></p>                                </div>

                            </div>
                        </div>
                    })

            }
            <div className={`${basketData ? 'md:flex' : 'hidden'} w-[100%] px-[10px] items-center justify-between`}>
                <div className='md:grid grid-cols-2 gap-[20px] my-[20px] items-center'>
                    <input
                        type="text"
                        className='w-[100%]  my-[10px] md:w-[200px] border-[1px] border-gray-200 p-[5px] font-[500] text-[1.4em]  py-[10px]  rounded-md '
                        placeholder='Coupon code...' />

                    <div className=' p-[5px] md:w-[200px]  font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] mx-auto hover:text-[#136450] cursor-pointer hover:bg-white'>
                        Apply Coupon
                    </div>
                </div>
                <div className='w-[100%] md:w-[200px]  p-[5px]  font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 cursor-not-allowed bg-[#89b1a7] text-white border-[#89b1a7]  '>
                    Update Cart
                </div>
            </div>
            <div className={`${basketData ? 'block' : 'hidden'} text-[1.1em] font-[500]  my-[30px] w-[100%] px-[10px] `}>
                <div className='bg-white border-[1px] p-[10px] border-gray-200 w-[100%] flex justify-between'>
                    <p>Subtotal</p>
                    <p>$ 223.00</p>
                </div>
                <div className='bg-[#F9F9F9] border-[1px] p-[10px] border-gray-200 w-[100%] flex justify-between'>
                    <p>Subtotal</p>
                    <div>
                        <p>Flat rate: €100.00</p>
                        <p>Shipping to Azerbaijan.</p>
                        <p className='flex items-center gap-[20px]'>Change Adress <LiaShippingFastSolid /></p>
                    </div>
                </div>
                <div className='bg-white border-[1px] p-[10px] border-gray-200 w-[100%] flex justify-between'>
                    <p>Total</p>
                    <p>$ 230.00</p>
                </div>
            </div>
            <div className='p-[10px] flex justify-between w-[100%] mb-[30px] pt-[20px] md:px-[40px]'>
                <div></div>
                <Link to={'/checkout'} className='w-[100%] sm:w-[300px] p-[5px] mt-[40px] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450]  hover:text-[#136450] cursor-pointer hover:bg-white'>
                    Proceed to checkout
                </Link>
            </div>


        </>
    )
}

export default Bag
