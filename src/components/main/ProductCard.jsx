import React, { useContext, useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FaHeartCircleXmark, FaMagnifyingGlass } from 'react-icons/fa6'
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom'
import { DATA } from '../../context/DataContext'
import { getProductById } from '../../services/api'
import toast from 'react-hot-toast';
import { BASKET } from '../../context/BasketContext';

function ProductCard({ id }) {

    const { favoriteData, handleWishlist, loadingHeart, token, quickId, setQuickId } = useContext(DATA)
    const [singlePro, setSinglePro] = useState('')
    const { addToBasket, basketData, removeFromBasket } = useContext(BASKET)
    const [isFav, setIsFav] = useState(false)
    const [isInBasket, setIsInBasket] = useState(false)
    useEffect(() => {
        if (id) {
            getProductById(id).then(res => {
                setSinglePro(res.data);
                setIsFav(favoriteData.some(item => item.id == res.data.id));
                setIsInBasket(basketData?.some(item => item.product?.id == res?.data?.id))
            });
        }
    }, [id, favoriteData, basketData]);
    function toggleHeart() {
        token ? handleWishlist(singlePro.id, isFav)
            : toast.error('Sign in to use Wishlist!')
    }


    const { setShowQuick } = useContext(DATA)
    async function handleAddToBasket() {
        if (!token) {
            toast.error('Sign in to use Cart!');
            return;
        } else if (isInBasket) {
            toast.error('')
        }
        else {
            await addToBasket(singlePro.id, 1);
        }
    };
    // console.log(singlePro)
    return (
        <>
            <Link
                to={`/details/${singlePro.id}`}
                className='w-[200px] min-w-[200px] group relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
                {
                    singlePro ? <div className='h-[50%] group relative '>
                        <img className='h-[100%] w-[200px] group-hover:hidden mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]'
                            src={`https://supermarket777.blob.core.windows.net/product/${singlePro?.primaryImageUrl}`} alt={singlePro?.slug}
                        />
                        <img className='h-[100%] w-[200px] group-hover:block hidden mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]'
                            src={`https://supermarket777.blob.core.windows.net/product/${singlePro?.subImageUrls?.[1]}`} alt={singlePro?.slug}
                        />

                    </div> : <div className='bg-gray-400 animate-pulse h-[50%] w-[100%]'></div>
                }
                <div>
                    <div className='flex p-[10px] '>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>
                    <p className='px-[10px] text-[1.1em] font-bold line-clamp-2 overflow-hidden text-ellipsis'>
                        {singlePro.name}
                    </p>

                   
                    {
                        singlePro?.discount > 0
                            ? <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>
                                 <del className='text-gray-900'>€{singlePro.price}</del> €{singlePro.discountedPrice}
                            </p>
                            : <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>
                                €{singlePro.discountedPrice}
                            </p>
                    }
                    {/* <p className='px-[10px] '>per Kilogram</p> */}
                </div>
                <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[8px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                    {

                        isInBasket
                            ? <img
                                onClick={(e) => { removeFromBasket(singlePro.id), e.preventDefault() }}
                                className='h-[25px] cursor-pointer' title='Already in basket' src='https://groffer.modeltheme.com/wp-content/themes/groffer/images/svg/added-to-cart.svg' />
                            : <button
                                onClick={(e) => { handleAddToBasket(singlePro.id), e.preventDefault() }}
                                className='cursor-pointer' title='Add to basket'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
                            </button>


                    }
                    {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg> */}
                </div>

                <div
                    onClick={(e) => { e.preventDefault() }}
                    className='group-hover:block hidden '>

                    {
                        loadingHeart ? (
                            <div className="absolute top-[50px] right-[5px] animate-spin border-2 border-gray-400 border-t-transparent rounded-full w-[16px] h-[16px]"></div>
                        ) : (
                            isFav
                                ? <IoIosHeart onClick={() => toggleHeart()} className="absolute  text-[1.3em] text-red-700 cursor-pointer top-[50px] right-[5px]" />
                                : <IoIosHeartEmpty onClick={() => toggleHeart()} className="absolute  text-[1.3em] text-gray-700 cursor-pointer hover:text-black top-[50px] right-[5px]" />
                        )
                    }

                    <FaMagnifyingGlass
                        onClick={(e) => {
                            setShowQuick(true),
                                e.preventDefault(),
                                setQuickId(singlePro.id)
                        }}
                        className='absolute bg-white  rounded-xl top-[70px]  right-[5px] text-gray-700 hover:text-black' />
                </div>
            </Link>
        </>
    )
}

export default ProductCard
