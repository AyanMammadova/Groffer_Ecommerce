import React from 'react'
import Reviews from './homeelements/Reviews'

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function About() {
    return (
        <>
            <div className="w-[100%] text-white flex-col flex items-center justify-center h-[80vh] bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/about-us-header.png?id=9890')] bg-cover bg-center">
                <p className='text-[3em] font-[500] text-center'>About Us at Groffer</p>
                <p className='text-[1.2em] text-center w-[96%] sm:w-[80%] md:w-[60%] mx-auto '>Our organic fruit and vegetable are grown by farmers who are produced by natural farming methods on their own land. At Groffer the organic food is grown without the use of synthetic chemicals.</p>
            </div>
            <div className='md:flex w-[100%] p-[10px] md:p-[30px] justify-between'>
                <div className='w-[100%] md:w-[50%]'>
                    <p className='text-[3em] font-[500]'>Our Mission in the Company</p>
                    <p className='text-[1.2em]'>Candy cane winter lemon tahini dressing picnic salad açai soba noodles chai tea cumin roasted peanuts
                        red lentil curry naga viper fresh lime red pepper shiitake mushrooms cool off raspberries kale caesar salad maple orange tempeh
                        Bolivian rainbow pepper oranges fiery fruit raspberry fizz lemonade chocolate entree.
                        Basil homemade balsamic spiced pumpkin chili sweet potato Chinese five-spice powder sesame soba noodles ultimate bananas cherries
                        blackberries seasonal. Coriander green bowl pine nuts sandwiches bite sized ghost pepper crumbled lentils bruschetta chilies picnic
                        dill Mexican fiesta.
                    </p>
                    <div className='w-[150px] font-[500] my-[20px] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] mt-[20px] hover:text-[#136450] cursor-pointer hover:bg-white'>
                        Read More
                    </div>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                    <img className='w-[100%] h-[80vh] object-cover' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Iffiliate-About_company-machinery.jpg" alt="" />
                </div>
            </div>
            <div className='w-[80%] md:w-[70%] pb-[40px] mx-auto'>
                <p className='text-[2.5em] text-center pb-[40px]'>Our Trustworthy Partners</p>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}

                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Groffer-Client1.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Groffer-Client2.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Groffer-Client3.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Groffer-Client4.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Groffer-Client5.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer-Client6.jpeg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <Reviews />
        </>
    )
}

export default About
