import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import BreadCrumps from './BreadCrumps'
import { TiHeartOutline } from 'react-icons/ti'
import ProductCard from './ProductCard'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import QuickView from './QuickView'

function Details() {
  const [isDesc, setIsDesc] = useState(true)
  const [isAdd, setIsAdd] = useState(false)
  const [isRew, setIsRew] = useState(false)
  return (
    <>
      <BreadCrumps page={'details'} />
      {/* <div className='md:flex'>
        <div className='w-[90%] flex mx-auto flex-col justify-center items-center lg:w-[50%] md:w-[40%]'>
          <img className='w-[100%] ' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product06.jpg" alt="" />
          <div className='  flex justify-center'>
            <Zoom>
              <img
                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product10-300x300.jpg"
                className='w-[100px]'
              />
            </Zoom>
            <Zoom>
              <img
                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product14-300x300.jpg"
                className='w-[100px]'
              />
            </Zoom>
            <Zoom>
              <img
                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product19-200x200.jpg"
                className='w-[100px]'
              />
            </Zoom>
             </div>
        </div>
        <div className='lg:w-[50%] md:w-[60%] flex flex-col gap-[15px] p-[10px] md:p-[40px]'>
          <p className='text-[3em] font-bold'>Fresh For The Bold Ground</p>
          <p className='txtgreen text-[2em] font-[500]'>€43.00</p>
          <p className='text-gray-500 text-[1.4em]'>Mushrooms is grown in favorable climates from tropical temperat region worldwide for it large edible fruit which is berry with hard rind & internal divisions botanically called…</p>
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
      </div> */}
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
