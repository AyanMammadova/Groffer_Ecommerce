import React, { useContext } from 'react'
import BreadCrumps from './BreadCrumps'
import { FaTableColumns } from 'react-icons/fa6'
import { BASKET } from '../../context/BasketContext'

function CheckOut() {
    const { basketData,totalAmount } = useContext(BASKET)
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
                <p className=' text-[1.1em] flex gap-[20px] items-center  text-[#136450]'> <FaTableColumns />Have a coupon? Click here to enter your code</p>
            </div>
            <div>
                
            </div>

            <p className='font-[500] text-[2em] p-[10px] sm:p-[30px]'>Your Order</p>
            <div className='p-[10px] w-[100%] sm:p-[30px] '>
                <table className='p-[10px] border-collapse w-[100%]  border-[1px] border-gray-200'>
                    <tbody>
                        {
                            basketData && basketData.map((item, i) => {
                                return <tr>
                                    <td className='border-[2px] p-[10px] border-gray-200'>{item?.product?.name} x {item?.quantity}</td>
                                    <td className='border-[2px] p-[10px] border-gray-200'>{item?.product?.price?.toFixed(2)} $</td>
                                </tr>
                            })
                        }
                        <tr>
                            <td className='border-[2px] p-[10px] font-[500] text-end border-gray-200'>Subtotal</td>
                            <td className='border-[2px] p-[10px]  border-gray-200'>{totalAmount.toFixed(2)}$</td>
                        </tr>
                        {/* <tr>
                            <td className='border-[2px] p-[10px] font-[500] text-end border-gray-200'>Shipping</td>
                            <td className='border-[2px] p-[10px]  border-gray-200'>Flat rate:12.00 $</td>
                        </tr> */}
                        <tr>
                            <td className='border-[2px] p-[10px] font-[500] text-end border-gray-200'>Total</td>
                            <td className='border-[2px] p-[10px]  border-gray-200'>{totalAmount.toFixed(2)} $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CheckOut
