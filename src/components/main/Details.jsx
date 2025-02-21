import React, { useContext, useEffect, useState } from 'react'
import BreadCrumps from './BreadCrumps'
import ProductCard from './ProductCard'

import 'react-medium-image-zoom/dist/styles.css'
import QuickView from './QuickView'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../services/api'
import { FaRegStar } from 'react-icons/fa'
import { DATA } from '../../context/DataContext'
import { IoHeartOutline } from 'react-icons/io5'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import ReviewForm from './ReviewForm'

function Details() {
  const { allProducts } = useContext(DATA)
  const { proid } = useParams()
  // console.log(proid)
  const [singleProduct, setSinglePorduct] = useState('')
  const [isDesc, setIsDesc] = useState(true)
  const [isRew, setIsRew] = useState(false)
  useEffect(() => {
    getProductById(proid).then(res => setSinglePorduct(res.data))
  }, [proid])

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

      <QuickView proid={proid} type={'details'} />
      <div className='border-2 rounded-2xl border-gray-300  mt-[80px] md:mt-[50px] relative flex flex-col items-center justify-center w-[90%] mx-auto py-[50px]'>
        <div className='absolute -top-[80px] md:-top-[30px]  bg-[#F1F3F6] text-center rounded-lg md:flex justify-between mx-[auto] w-[80%]'>
          <p
            onClick={() => { setIsDesc(true), setIsRew(false) }}
            className={`md:p-[20px] p-[10px] cursor-pointer  font-[600] text-[1.5em] ${isDesc ? 'txtgreen' : 'text-black'}`}>
            Description
          </p>

          <p
            onClick={() => { setIsRew(true), setIsDesc(false) }}
            className={`md:p-[20px] p-[10px]  cursor-pointer font-[600]  text-[1.5em] ${isRew ? 'txtgreen' : 'text-black'}`}>
            Reviews(0)
          </p>
        </div>
        <div className='relative pt-[20px] w-full'>
          <div
            className='text-[1.4em] p-[5px] md:p-[20px]'>
            {
              isDesc ? <>
              <p className='text-gray-500 text-[1em]'>{singleProduct?.description}</p>
              </>

                : (
                  <>
                    <ReviewForm />
                  </>
                )
            }
          </div >
        </div >

      </div >

      <div>
        <p className='text-[2em] font-[500] text-center'>Related Products</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] md:gap-[40px] mx-[10px] md:mx-[40px]'>
          {
            allProducts && allProducts.map((item, i) => {
              return <ProductCard key={i} id={item?.id}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Details
