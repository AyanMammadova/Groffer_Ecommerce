import React from 'react'

function FruitBox() {
  return (
    <>
       <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/01/Deal-BG.jpg?id=8638')] mt-[40px] gap-[6px] bg-left min-h-[60vh] bg-cover w-[100%]  sm:flex items-center justify-around">
                <div className='sm:w-[50%]'>
                    <img className='w-[100%]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main_Deal-Banner.png" alt="" />
                </div>
                <div className='text-center sm:w-[50%] md:p-[40px]'>
                    <p className='text-[#DEA455] font-bold text-[1.3em]'>Special Offer </p>
                    <p className='text-[2em] md:text-[3em] font-bold'>Organic Fruit Box</p>
                    <p className='text-[1.1em] px-[10px]'>Organic foods are the only source which we can rely on to take proper health care. Organic food is the most nutritious food and should be consumed by everyone.</p>
                    <p className='text-[#136450]'>-178 days </p>
                    <div className='w-[250px] h-[60px] mx-auto mt-[20px]'>
                        <button className='bg-[#FFBA41] font-bold px-[35px] py-[10px] rounded-sm hover:text-[#136450] hover:border-2 border-[#136450] hover:scale-105 transition-all duration-100 hover:bg-white'>View All Details</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default FruitBox
