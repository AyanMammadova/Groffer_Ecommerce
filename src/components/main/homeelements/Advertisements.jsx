import React from 'react'

function Advertisements() {
  return (
    <>
      <div className='hidden sm:grid overflow-hidden grid-cols-1 gap-[30px]  w-[95%] mx-auto sm:grid-cols-2'>
        <div data-aos="fade-right" className=' group relative overflow-hidden w-[100%]'>
          <img className='inset-0 group-hover:scale-105 transition-all duration-200' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-banners01.png" alt="" />
          <p className='text-gray-400 left-[20px] absolute top-[40px]'>10%  At Any Nearest Stores</p>
          <p className='font-[500] w-[50%] left-[20px] text-[1.5em] md:text-[3em] top-[60px] absolute'>30% off on All veggies</p>
        </div>
        <div data-aos="fade-left" className='group relative overflow-hidden w-[100%]'>
          <img className='inset-0 group-hover:scale-105 transition-all duration-200' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-banner02.jpeg" alt="" />
          <p className='text-gray-400 left-[20px] absolute top-[40px]'>10%  At Any Nearest Stores</p>
          <p className='font-[500] w-[50%] left-[20px] text-[1.5em] md:text-[3em] top-[60px] absolute'>30% off on All veggies</p>
        </div>
      </div>
    </>
  )
}

export default Advertisements
