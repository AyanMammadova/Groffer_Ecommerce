import React from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import FirstSection from './homeelements/FirstSection';
import TopCategory from './homeelements/TopCategory';
import FruitBox from './homeelements/FruitBox';
import Reviews from './homeelements/Reviews';
import FreshestProducts from './homeelements/FreshestProducts';
import Categories from './homeelements/Categories';
import Advertisements from './homeelements/Advertisements';
import DeliveryMethods from './homeelements/DeliveryMethods';


function Main() {
    return (
        <>
            <FirstSection />

            <TopCategory />

            <FruitBox />

            <FreshestProducts />

            <Categories />

            <Advertisements />

            <DeliveryMethods />

            <Reviews />
            {/* <div className='relative mt-[40px]  w-[100%]'>
                <img className='inset-0 w-[100%] h-[80vh]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-testimonials_bg.png?id=8701" alt="" />
                <img className='md:absolute md:-top-[40px] md:block hidden md:right-[50px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/BG-02.png" alt="" />

                <div className='absolute w-[100%] top-[100px]'>
                    <p className='text-center text-[#E1BE6E] text-[1.5em] font-[500]'>Clien Review</p>
                    <p className='text-center text-[2em] font-[500]'>From the People</p>
                    <div className='flex justify-between pt-[50px]'>
                        <Swiper
                            slidesPerView={1}
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
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}

                            modules={[FreeMode, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='flex cursor-grab px-[20px] flex-col  mx-auto  items-center justify-center text-center'>
                                    <img className='w-[80px] rounded-2xl' src="https://groffer.modeltheme.com/wp-content/uploads/2015/02/Main-testimon3-350x350.jpg" alt="" />
                                    <p className='text-gray-500 font-[400] pt-[10px]'>
                                        “What a beautiful haul from Groffer Market week! It is basically a chef’s dream. Definitely have a lot to work.”
                                    </p>
                                    <p className='text-[#448476] pb-[30px] font-[600] pt-[10px]'>Martin Culich</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex cursor-grab px-[20px] flex-col  mx-auto  items-center justify-center text-center'>
                                    <img className='w-[80px] rounded-2xl' src="https://groffer.modeltheme.com/wp-content/uploads/2015/02/Main-Testimon1-350x350.jpg" alt="" />
                                    <p className='text-gray-500 font-[400] pt-[10px]'>
                                        “What a beautiful haul from Groffer Market week! It is basically a chef’s dream. Definitely have a lot to work.”
                                    </p>
                                    <p className='text-[#448476] pb-[30px] font-[600] pt-[10px]'>Martin Culich</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex cursor-grab px-[20px] flex-col  mx-auto  items-center justify-center text-center'>
                                    <img className='w-[80px] rounded-2xl' src="https://groffer.modeltheme.com/wp-content/uploads/2015/02/Main-testimon5-350x350.jpg" alt="" />
                                    <p className='text-gray-500 font-[400] pt-[10px]'>
                                        “What a beautiful haul from Groffer Market week! It is basically a chef’s dream. Definitely have a lot to work.”
                                    </p>
                                    <p className='text-[#448476] pb-[30px] font-[600] pt-[10px]'>Martin Culich</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex cursor-grab px-[20px] flex-col  mx-auto  items-center justify-center text-center'>
                                    <img className='w-[80px] rounded-2xl' src="https://groffer.modeltheme.com/wp-content/uploads/2015/02/Main-Testimon2-350x350.jpg" alt="" />
                                    <p className='text-gray-500 font-[400] pt-[10px]'>
                                        “What a beautiful haul from Groffer Market week! It is basically a chef’s dream. Definitely have a lot to work.”
                                    </p>
                                    <p className='text-[#448476] pb-[30px] font-[600] pt-[10px]'>Martin Culich</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex cursor-grab px-[20px] flex-col  mx-auto  items-center justify-center text-center'>
                                    <img className='w-[80px] rounded-2xl' src="https://groffer.modeltheme.com/wp-content/uploads/2015/02/Main-testimon4-350x350.jpg" alt="" />
                                    <p className='text-gray-500 font-[400] pt-[10px]'>
                                        “What a beautiful haul from Groffer Market week! It is basically a chef’s dream. Definitely have a lot to work.”
                                    </p>
                                    <p className='text-[#448476] pb-[30px] font-[600] pt-[10px]'>Martin Culich</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Main