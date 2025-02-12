import React, { useState } from 'react'
import BreadCrumps from './BreadCrumps'
import ProductCard from './ProductCard'

import 'react-medium-image-zoom/dist/styles.css'
import QuickView from './QuickView'

function Details() {
  const [isDesc, setIsDesc] = useState(true)
  const [isAdd, setIsAdd] = useState(false)
  const [isRew, setIsRew] = useState(false)
  return (
    <>
      <BreadCrumps page={[
        {
          name: 'Shop',
          slug: 'shop'
        },
        {
          name: 'Apples',
          slug: 'shop'
        },
        {
          name: 'Fruit name',
          slug: 'shop'
        }
      ]} />
      
      <QuickView type={'details'}/>
      <div className='border-2 rounded-2xl border-gray-300  mt-[80px] md:mt-[50px] relative flex flex-col items-center justify-center w-[90%] mx-auto py-[50px]'>
        <div className='absolute -top-[80px] md:-top-[30px]  bg-[#F1F3F6] text-center rounded-lg md:flex justify-between mx-[auto] w-[80%]'>
          <p
            onClick={() => { setIsDesc(true), setIsAdd(false), setIsRew(false) }}
            className={`md:p-[20px] p-[10px] font-[600] text-[1.5em] ${isDesc ? 'txtgreen' : 'text-black'}`}>
            Description
          </p>
          <p
            onClick={() => { setIsAdd(true), setIsDesc(false), setIsRew(false) }}
            className={`md:p-[20px] p-[10px] font-[600]  text-[1.5em] ${isAdd ? 'txtgreen' : 'text-black'}`}>
            Additional Info
          </p>
          <p
            onClick={() => { setIsRew(true), setIsAdd(false), setIsDesc(false) }}
            className={`md:p-[20px] p-[10px] font-[600]  text-[1.5em] ${isRew ? 'txtgreen' : 'text-black'}`}>
            Reviews(0)
          </p>
        </div>
        <div className='relative pt-[20px] w-full'>
          <p
            className='text-[1.4em] p-[5px] md:p-[20px]'>
            {
              isDesc ? ' More success is to get a massage once a week randomised words which Don’t important, major key, cloth talk  Mogul talk.Eliptical talk. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below forthose interested. Sections 1.10.32 and  1.10.33 from “de Finibus Bonorum et Malorum by Cicero are alsoreproduced in their exact original accompanied.'
                : isAdd ? 'additional infooo'
                  : isRew ? 'tehre is no review' : ''
            }
          </p>
        </div>

      </div>

      <div>
        <p className='text-[2em] font-[500] text-center'>Related Products</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] md:gap-[40px] mx-[10px] md:mx-[40px]'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default Details
