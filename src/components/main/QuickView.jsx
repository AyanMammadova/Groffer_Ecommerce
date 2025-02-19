import React, { useEffect, useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { TiHeartOutline } from 'react-icons/ti'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { getProductById } from '../../services/api'

function QuickView({ type, proid }) {
  console.log(proid)
  const [singleProduct, setSinglePorduct] = useState('')
  useEffect(() => {
    console.log()
    getProductById(proid).then(res => setSinglePorduct(res.data))
  }, [proid])

  return (
    <>

      <div className={`md:flex w-[100%] h-[100%] `}>
        <div className={` flex mx-auto flex-col justify-center items-center ${type == 'quick' ? 'w-[0%] lg:w-[90%]' : 'lg:w-[50%] md:w-[40%]'} `}>

          <div className='h-['>
            <img
              className={`scale-100 hover:scale-110 h-[100%] w-[100%] ease-in duration-500 ${type == 'quick' ? 'hidden lg:block h-[80vh]' : 'block '}`}
              src={`https://supermarket777.blob.core.windows.net/product/${singleProduct.primaryImageUrl}`} alt={singleProduct.slug} />

          </div>
          <div className={`${type == 'details' ? 'flex' : 'hidden'}  justify-center`}>
            {
              singleProduct?.subImageUrls?.map((item, i) => {
                <Zoom>
                  <img
                  key={i}
                    alt={singleProduct.slug}
                    src={`https://supermarket777.blob.core.windows.net/product/${item}`}
                    className='w-[100px]'
                  />
                </Zoom>
              })
            }

          </div>
        </div>
        <div className={`${type == 'quick' ? 'w-[100%] gap-[8px]' : 'lg:w-[50%] md:w-[60%] gap-[15px]'} flex flex-col p-[10px] md:p-[40px]`}>
          <p className='text-[2.5em] font-bold'>{singleProduct?.name}</p>
          <p className='txtgreen text-[2em] font-[500]'>€{singleProduct?.discountedPrice?.toFixed(2)}</p>
          <p className='text-gray-500 text-[1.2em]'>{singleProduct?.description}</p>
          <ul className='list-disc  pl-[20px] text-[1.3em]'>
            <li>Vitamin A</li>
            <li>Vitamin B</li>
            <li>Vitamin C</li>
            <li>Vitamin D</li>
            <li>Vitamin E</li>
          </ul>
          <p className='text-[1.3em] font-[500] '>Allergens</p>
          <ul className=' flex gap-[20px]'>
            <li className='flex gap-[2px]'> <BsCheck className='text-[1.5em] txtgreen' />Gluten free</li>
            <li className='flex gap-[2px]'> <BsCheck className='text-[1.5em] txtgreen' />Egg free</li>
            <li className='flex gap-[2px]'> <BsCheck className='text-[1.5em] txtgreen' />Milk free</li>
          </ul>
          <p className='text-[#B3AF54] text-[1.2em]'> 109 in stock</p>
          <div className='flex  gap-[15px]'>
            <div className='bg-[#F2F2F2] *:p-[5px] *:px-[10px] items-center flex rounded-xl p-[4px]'>
              <span className='cursor-pointer'>-</span>
              <span className='cursor-text'>1</span>
              <span className='cursor-pointer'>+</span>
            </div>
            <div className='bg-[#136450] cursor-pointer text-white hover:bg-white border-2 border-[#136450] duration-200 transition-all hover:text-[#136450] text-[1.1em] font-[500] px-[20px] py-[10px] rounded-lg '>
              Add to Cart
            </div>
            <div className='p-[10px] text-[1.3em]  txtgreen cursor-pointer flex items-center justify-center border-2 border-[#136450] rounded-lg'>
              <TiHeartOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickView
