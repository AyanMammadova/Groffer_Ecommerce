import React, { useContext, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoHeartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { DATA } from '../../context/DataContext'

function ProductCard(img,name,price) {
    // console.log("Props received:", { img, name, price })
    function nese(){
        console.log('asckbasckdskvjds')
    }
    const {setShowQuick}=useContext(DATA)
    return (
        <>
            <Link
                to={'/details'}
                className='w-[100%] group relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
                <div className='h-[50%] group relative '>
                    <img className='h-[100%] group-hover:hidden mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
                    <img className='h-[100%] group-hover:block hidden mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product05-400x400.jpg" alt="" />

                </div>
                <div>
                    <div className='flex p-[10px] '>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>
                    <p className='px-[10px] text-[1.1em] font-bold'></p>
                    <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                    <p className='px-[10px] '>per Kilogram</p>
                </div>
                <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
                </div>

                <div className='group-hover:block hidden'>
                    <IoHeartOutline className='absolute text-[1.3em] text-gray-700 hover:text-black top-[50px] right-[10px]' />
                    <FaMagnifyingGlass 
                    onClick={(e)=>{
                        setShowQuick(true),
                        e.preventDefault()
                    }}
                    className='absolute bg-red-300 top-[70px] right-[10px] text-gray-700 hover:text-black' />
                </div>
            </Link>
        </>
    )
}

export default ProductCard
