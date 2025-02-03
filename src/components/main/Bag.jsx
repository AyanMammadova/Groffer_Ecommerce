import React from 'react'
import BreadCrumps from './BreadCrumps'
import { Link } from 'react-router-dom'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Bag() {
    return (
        <>
            <BreadCrumps page={'cart'} />
            <div>
                <Zoom>
                    <img
                        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                        src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg"
                        width="400"
                    />
                </Zoom>
            </div>
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>Bag</p>
            <div className='w-[95%] bg-gray-100 mx-auto border-t-[4px] px-[5px] border-[#136450]  py-[20px] mt-[20px]'>
                <p className=' text-gray-800 text-[1.1em] '>Your cart is currently empty</p>
            </div>
            <div className='p-[10px] pt-[20px] md:px-[40px]'>
                <Link to={'/shop'} className='w-[200px] p-[5px] mt-[40px] font-[500] text-[1.4em] text-center py-[10px]  rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] mx-auto hover:text-[#136450] cursor-pointer hover:bg-white'>
                    Return to Shop
                </Link>
            </div>
        </>
    )
}

export default Bag
