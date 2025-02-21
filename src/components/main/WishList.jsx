import React, { useContext, useEffect, useState } from 'react'
import BreadCrumps from './BreadCrumps'
import { DATA } from '../../context/DataContext'
import { IoCloseSharp } from 'react-icons/io5'

function WishList() {
    const { favoriteData, handleWishlist, loadingWishlist, token } = useContext(DATA)

    function toggleWishlist(id) {
        handleWishlist(id, true)
    }
    return (
        <>
            <BreadCrumps page={[
                {
                    name: 'Wishlist',
                    slug: 'wishlist'
                }
            ]} />
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>WishList</p>
            <div className='flex flex-wrap'>
                {
                    token
                        ? loadingWishlist ? (
                            [...Array(3)].map((_, i) => (
                                <div key={i} className='w-[96%] sm:w-[45%] md:w-[90%] mb-[30px] items-center justify-between px-[10px] md:px-[40px] flex-wrap flex mx-auto shadow-md py-[20px] mt-[20px] animate-pulse bg-gray-200 h-[120px]'></div>
                            ))
                        ) : (
                            favoriteData?.length > 0
                                ? favoriteData?.map((item, i) => (
                                    <div key={i} className='w-[96%] sm:w-[45%] md:w-[90%] mb-[30px] items-center  justify-between px-[10px] md:px-[40px] flex-wrap flex mx-auto shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] py-[20px] mt-[20px]'>
                                        <div className='flex gap-[20px] w-[100%] md:w-auto justify-between relative md:items-center'>
                                            <div>
                                                <IoCloseSharp
                                                    onClick={() => { toggleWishlist(item.id) }}
                                                    className='text-[2em] cursor-pointer md:text-[3em] left-[10px] txtgreen' />
                                                <p className='block py-[5px] md:hidden'>{item.name}</p>
                                                <p className='block py-[5px] md:hidden'>{item.discountedPrice.toFixed(2)}</p>
                                            </div>
                                            {
                                                item?.primaryImageUrl ? <img className='h-[100px]' src={`https://supermarket777.blob.core.windows.net/product/${item.primaryImageUrl}`} alt="" />
                                                    : ''
                                            }
                                        </div>
                                        <p className='hidden md:block'>{item.name}</p>
                                        <p className='hidden md:block'>{item.discountedPrice.toFixed(2)}</p>

                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>

                                    </div>
                                )) : (<div className='w-[90%] mb-[30px] mx-auto shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] py-[20px] mt-[20px]'>
                                    <p className='text-center text-gray-800'>No Product Added to the Wishlist</p>
                                </div>)
                        )

                        : <div className='w-[90%] mb-[30px] mx-auto shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] py-[20px] mt-[20px]'>
                            <p className='text-center text-[1.2em] font-[500] text-red-600'>You need to log in to use Wishlist</p>
                        </div>
                }

            </div>

        </>
    )
}

export default WishList
