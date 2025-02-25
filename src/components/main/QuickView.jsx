import React, { useContext, useEffect, useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { getProductById } from '../../services/api'
import { DATA } from '../../context/DataContext'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import toast from 'react-hot-toast'
import { BASKET } from '../../context/BasketContext'

function QuickView({ type, proid }) {
  const { handleWishlist, favoriteData, loadingHeart, quickId, setQuickId, token } = useContext(DATA)
  const { addToBasket, basketData } = useContext(BASKET)
  const [singleProduct, setSingleProduct] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInBasket, setIsInBasket] = useState(false)
  const [count, setCount] = useState(1)

  useEffect(() => {

    if (proid) {
      getProductById(proid).then(res => {
        setSingleProduct(res.data)
        setIsFavorite(favoriteData.some(item => item.id == res?.data.id));
        setIsInBasket(basketData?.some(item => item.product?.id == res?.data?.id));
      })
    } else if (quickId) {
      getProductById(quickId).then(res => {
        setSingleProduct(res.data);
        setIsFavorite(favoriteData?.some(item => item.id == res?.data.id));
        setIsInBasket(basketData?.some(item => item.product?.id == res?.data?.id));
      })
    }
  }, [proid, quickId, favoriteData, basketData])
  function toggleWishlist() {
    token ? handleWishlist(singleProduct.id, isFavorite)
      : toast.error('Sign in to use Wishlist!')
  }

  async function handleAddToBasket() {
    if (!token) {
      toast.error('Sign in to use Cart!');
      return;
    } else if (isInBasket) {
      toast.error('Produt is already in basket')
    }
    else {
      setCount(1)
      await addToBasket(singleProduct.id, count)
    }
  };
  return (
    <>

      <div className={`md:flex w-[100%] h-[100%] `}>
        <div className={` flex mx-auto flex-col  items-center ${type == 'quick' ? 'w-[0%] lg:w-[90%]' : 'lg:w-[50%] md:w-[40%]'} `}>

          <div className='w-[90%] pt-[40px]'>
            {
              singleProduct ? <img
                className={`scale-100  h-[100%] w-[100%] ease-in duration-500 ${type == 'quick' ? 'hidden lg:block h-[80vh]' : 'block '}`}
                src={`https://supermarket777.blob.core.windows.net/product/${singleProduct?.primaryImageUrl}`} alt={singleProduct?.slug} />
                : ''
            }
          </div>
          <div className={`${type == 'details' ? 'flex' : 'hidden'} gap-[10px]  justify-center`}>
            {
              singleProduct?.subImageUrls?.map((item, i) => {
                return <Zoom key={i}>
                  <img
                    key={i}
                    alt={singleProduct.slug}
                    src={`https://supermarket777.blob.core.windows.net/product/${item}`}
                    className='w-[60px] h-[100px] object-cover  rounded-md'
                  />
                </Zoom>
              })
            }

          </div>
        </div>
        <div className={`${type == 'quick' ? 'w-[100%] gap-[8px]' : 'lg:w-[50%] md:w-[60%] gap-[15px]'} flex flex-col p-[10px] md:p-[40px]`}>
          <p className='text-[2.5em] font-bold'>{singleProduct?.name}</p>
          {
            singleProduct?.discount > 0
              ? <p className='text-[#216D5A] px-[10px] font-bold  text-[1.4em] '>
                <del className='text-gray-900'>€{singleProduct.price}</del> €{singleProduct.discountedPrice}
              </p>
              : <p className='text-[#216D5A] px-[10px] font-bold text-[1.4em] ]'>
                €{singleProduct.discountedPrice}
              </p>
          }
          <p className='text-gray-500 text-[1.2em]'>{singleProduct?.description}</p>
          <div className='flex flex-wrap'>
            Tags:{
              singleProduct.tagNames?.map((item, i) => {
                return <Link to={`/shop?tag=${item}-${singleProduct.tagIds[i]}`} key={i} className='hover:underline mx-[5px] cursor-pointer'>#{item}</Link>
              })
            }
          </div>


          <p className='text-[#B3AF54] text-[1.2em]'> {singleProduct.stockQuantity} in stock</p>
          <div className='flex  gap-[15px]'>
            <div className='bg-[#F2F2F2] *:p-[5px] *:px-[10px] items-center flex rounded-xl p-[4px]'>
              <span
                onClick={() => {
                  count == 1 ? '' : setCount(count - 1)
                }}
                className={`cursor-pointer ${count == 1 ? 'text-gray-400' : 'text-black'}`}>
                <FaMinus />
              </span>
              <span
                className='cursor-text'>
                {count}
              </span>
              <span
                onClick={() => {
                  setCount(count + 1)
                }}
                className='cursor-pointer'>
                <FaPlus />
              </span>
            </div>
            <div
              onClick={() => { handleAddToBasket() }}
              className={`${isInBasket ? 'bg-gray-500' : 'bg-[#136450] border-[#136450] hover:text-[#136450] hover:bg-white'} cursor-pointer text-white  border-2  duration-200 transition-all  text-[1.1em] font-[500] px-[20px] py-[10px] rounded-lg `}>
              {
                isInBasket ? 'Already in basket' : 'Add to Cart'
              }
            </div>
            <div
              onClick={() => {
                toggleWishlist()
              }}
              className='p-[10px] text-[1.3em]  txtgreen cursor-pointer flex items-center justify-center border-2 border-[#136450] rounded-lg'>
              {
                loadingHeart ? (
                  <div className=" animate-spin border-2 border-gray-400 border-t-transparent rounded-full w-[24px] h-[24px]"></div>
                ) : (
                  isFavorite
                    ? <IoIosHeart onClick={() => handleWishlist(singleProduct.id, isFavorite)} className=" text-[1.3em] text-[#136450] cursor-pointer " />
                    : <IoIosHeartEmpty onClick={() => handleWishlist(singleProduct.id, isFavorite)} className=" text-[1.3em] text-gray-700 cursor-pointer hover:text-black " />
                )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickView
