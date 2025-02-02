import React from 'react'

function Categories() {
  return (
    <>
      <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-services_bg1.jpg')] bg-center bg-cover min-h-[80vh] flex flex-col items-center justify-center my-[40px]">
        <p className='text-center text-white font-bold text-[2em] md:text-[3em]'>Shop by Lifestyle</p>
        <div className='grid grid-cols-2 w-[90%] mx-auto sm:grid-cols-3 lg:grid-cols-6 gap-[20px] justify-center'>
          <div className='flex w-[100%] flex-col items-center bg-white rounded-xl px-[20px] py-[25px]'>
            <img className='h-[70px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-category1.svg" alt="" />
            <p>Vegan</p>
          </div>
          <div className='flex w-[100%] flex-col items-center bg-white rounded-xl px-[20px] py-[25px]'>
            <img className='h-[70px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-category2.svg" alt="" />
            <p>Gluten-free</p>
          </div>
          <div className='flex w-[100%] flex-col items-center bg-white rounded-xl px-[20px] py-[25px]'>
            <img className='h-[70px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-category3.svg" alt="" />
            <p>Paleo</p>
          </div>
          <div className='flex w-[100%] flex-col items-center bg-white rounded-xl px-[20px] py-[25px]'>
            <img className='h-[70px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-category4.svg" alt="" />
            <p>Keto</p>
          </div>
          <div className='flex w-[100%] flex-col items-center bg-white rounded-xl px-[20px] py-[25px]'>
            <img className='h-[70px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-category5.svg" alt="" />
            <p>Flexitarian</p>
          </div>
          <div className='flex w-[100%] flex-col items-center bg-white rounded-xl px-[20px] py-[25px]'>
            <img className='h-[70px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-category6.svg" alt="" />
            <p>Fasting</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
