import React from 'react'

function FirstSection() {
    return (
        <>
            <div className='relative p-[10px]  pt-[50px] sm:pt-[0px] md:p-[30px] h-[100vh] lg:h-[75vh] xl:h-[80vh] font-space-grotesk'>
                <img
                    className='absolute inset-0 -z-40 h-[100%]  overflow-hidden object-cover object-right'
                    src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slide01-scaled.jpg" alt="" />
                <div className=' relative h-[100%]'>
                    <div className='sm:w-[55%]  w-[100%]'>
                        <p className=' sm:text-[1.5em] lg:text-[2em] pt-[30px] font-bold'>Starting at <span className='text-[#136450]'>$22</span></p>
                        <p data-aos="fade-left" className='text-[3em] sm:text-[2em] md:text-[3em] lg:text-[4em] xl:text-[5em] font-bold'>Grocery Right  <br  className='hidden sm:block'/>At Your Door</p>
                        <p className='text-[.8em] md:text-[1em] sm:w-[40%]'>Only this weekend for the remaining of the month</p>
                        <div className='relative h-[200px] w-[150px]'>
                            <button className='absolute top-[50px] bg-[#FFBA41] font-bold px-[25px] py-[10px] rounded-sm hover:text-[#136450] border-2 border-[#FFBA41] hover:border-[#136450]  transition-all duration-100 hover:bg-white'>
                                <span>Shop Now</span>
                            </button>
                            <div>
                                <img className='w-[100px] absolute -right-[100px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-slider1.png" alt="" />
                                <img className='h-[30px] absolute -right-[40px] top-[40px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Asset-1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block'>
                        <div className='xs:w-[40%] h-[100%] absolute top-0 right-0 overflow-hidden'>
                            <img className='h-[75%] md:h-[100%]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slider_pic.png" alt="" />
                            <img className='h-[20vh] md:h-[25vh] lg:h-[25vh] absolute top-0 right-0 ' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-absolute_veg2.png" alt="" />

                        </div>
                    </div>
                    <div className='absolute -m-[10px] h-[50vh] bottom-0 overflow-hidden sm:hidden'>
                        <img className=' object-cover -mt-[10px] object-top ' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slider_pic.png" alt="" />
                        <img className='h-[20vh] lg:h-[25vh] absolute top-0 right-0 ' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-absolute_veg2.png" alt="" />

                    </div>
                </div>
            </div>



            <div className=' -pt-100px md:flex gap-[30px] md:py-[50px] w-[90%] mx-auto font-space-grotesk justify-around'>
                <div className='flex flex-col w-[80%] mx-auto  items-center justify-center text-center'>
                    <img className='w-[65px] sm:w-[80px] pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-about1.svg" alt="" />
                    <p className='font-bold pt-[10px]'>Grown Today, <br />Delivered Tomorrow</p>
                    <p className='text-gray-500 pt-[10px]'>Our organic fruit and vegetable are grown by farmers who use only natural fertilisers on their.</p>
                </div>
                <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
                    <img className='w-[65px] sm:w-[80px] pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-about2.svg" alt="" />
                    <p className='font-bold pt-[10px]'>Not Your Average <br />Grocery Delivery</p>
                    <p className='text-gray-500 pt-[10px]'>Save yourself time, money and a bit of sanity with these easy and affordable grocery delivery.</p>
                </div>
                <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
                    <img className='w-[65px] sm:w-[80px] pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-about3.svg" alt="" />
                    <p className='font-bold pt-[10px]'>Your Favorites on <br />Autopilot</p>
                    <p className='text-gray-500 pt-[10px]'>Put healthy eating on autopilot with mix the vegetables, fruits and other organic produce.</p>
                </div>
            </div>
            <div className='h-[1px] w-[95%] mx-[auto] bg-gray-300 my-[30px]'></div>

        </>
    )
}

export default FirstSection
