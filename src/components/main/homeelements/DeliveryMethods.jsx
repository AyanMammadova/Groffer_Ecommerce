import React from 'react'

function DeliveryMethods() {
    return (
        <>
            <div className=' -pt-100px md:flex gap-[30px] md:py-[50px] w-[90%] mx-auto font-space-grotesk justify-around'>
                <div className='flex flex-col w-[80%] mx-auto  items-center justify-center text-center'>
                    <img className=' pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main_service1-150x150.png" alt="" />
                    <p className='font-bold pt-[10px]'>Local Pickup</p>
                    <p className='text-gray-500 pt-[10px]'>Get orders faster while avoiding shipping fees</p>
                </div>
                <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
                    <img className=' hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main_service2-150x150.png" alt="" />
                    <p className='font-bold pt-[10px]'>Local Delivery</p>
                    <p className='text-gray-500 pt-[10px]'>100% curbside recyclable boxes on demand</p>
                </div>
                <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
                    <img className=' hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main_service3-150x150.png" alt="" />
                    <p className='font-bold pt-[10px]'>Conscious Eaters</p>
                    <p className='text-gray-500 pt-[10px]'>We are supporting small farmers and producers</p>
                </div>
                <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
                    <img className='hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main_service4-150x150.png" alt="" />
                    <p className='font-bold pt-[10px]'>Delicious & New Food</p>
                    <p className='text-gray-500 pt-[10px]'>Feel great about what you eat every day</p>
                </div>
            </div>
        </>
    )
}

export default DeliveryMethods
