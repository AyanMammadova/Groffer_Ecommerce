import React from 'react'
import ProductCard from '../ProductCard'

function FreshestProducts() {
  return (
    <>
      <div className='my-[100px] sm:mx-[50px]'>
        <div className='flex flex-wrap justify-between p-[10px]  border-b-2 border-gray-300'>
          <p className='font-bold text-[2em]'>Freshest products</p>
          <div>
            <button className='px-[20px] py-[10px] rounded-lg bg-[#136450] text-white font-[500]'>APPLES</button>
            <button className='px-[20px] py-[10px] rounded-lg font-[500] '>BERRIES</button>
            <button className='px-[20px] py-[10px] rounded-lg font-[500]'>CITRUS</button>
          </div>
        </div>
        <div className='grid px-[20px] mt-[20px] gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {/* <ProductCard/>
          <ProductCard /> */}

          <div className=' pt-[20px] min-h-[300px] mx-auto hidden lg:block lg:w-[100%] '>
            <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-banners2.jpg')] gap-[6px] rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[80%] relative flex items-center justify-end text-white flex-col">
              <p className='text-[1.2em] pb-[30px] z-10 px-[10px] font-[500]'>Patato Sacks for 10$ piece</p>
              <div className='bg-gradient-to-t from-gray-900/50 z-0 rounded-tl-3xl rounded-br-3xl to-gray-500/15 inset-0 absolute'>

              </div>
            </div>
          </div>
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}

        </div>
      </div>
    </>
  )
}

export default FreshestProducts
