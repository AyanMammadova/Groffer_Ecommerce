import React from 'react'

function FirstSection() {
    return (
        <>
            <div className='relative p-[10px]   md:p-[30px] h-[60vh] lg:h-[75vh] xl:h-[80vh] font-space-grotesk'>
                <img
                    className='absolute inset-0 -z-40 h-[100%]  overflow-hidden object-cover object-right'
                    src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slide01-scaled.jpg" alt="" />
                <div className=' relative '>
                    <div className='xs:w-[55%] '>
                        <p className=' sm:text-[1.5em] lg:text-[2em] pt-[30px] font-bold'>Starting at <span className='text-[#136450]'>$22</span></p>
                        <p data-aos="fade-left" className='text-[3em] sm:text-[2em] md:text-[3em] lg:text-[4em] xl:text-[5em] font-bold'>Grocery Right  <br />At Your Door</p>
                        <p className='text-[.7em] md:text-[1em]'>Only this weekend for the remaining of the month</p>
                        <div className='relative h-[200px] w-[150px]'>
                            <button className='absolute top-[50px] bg-[#FFBA41] font-bold px-[25px] py-[10px] rounded-sm hover:text-[#136450] border-2 border-[#FFBA41] hover:border-[#136450]  transition-all duration-100 hover:bg-white'>
                                <span>Shop Now</span>
                                {/* <span data-aos="fade-left" data-aos-delay="">S</span>
                                <span data-aos="fade-left" data-aos-delay="100">h</span>
                                <span data-aos="fade-left" data-aos-delay="150">o</span>
                                <span data-aos="fade-left" data-aos-delay="200">p</span>
                                <span data-aos="fade-left" data-aos-delay="250"> </span>
                                <span data-aos="fade-left" data-aos-delay="300">N</span>
                                <span data-aos="fade-left" data-aos-delay="350">o</span>
                                <span data-aos="fade-left" data-aos-delay="400">w</span> */}
                            </button>
                            <div>
                                <img className='w-[100px] absolute -right-[100px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-slider1.png" alt="" />
                                <img className='h-[30px] absolute -right-[40px] top-[40px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Asset-1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block'>
                        <div className='xs:w-[40%] h-[100%] absolute top-0 right-0 overflow-hidden'>
                            <img className='h-[80%] md:h-[90%]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slider_pic.png" alt="" />
                            <img className='h-[10vh] md:h-[15vh] lg:h-[25vh] absolute top-0 right-0 ' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-absolute_veg2.png" alt="" />

                        </div>
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
