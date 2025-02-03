import React from 'react'
import BreadCrumps from './BreadCrumps'

function WishList() {
    return (
        <>
            <BreadCrumps page={[
                {
                    name: 'Wishlist',
                    slug: 'wishlist'
                }
            ]} />
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>WishList</p>
            <div className='w-[90%] mb-[30px] mx-auto shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] py-[20px] mt-[20px]'>
                <p className='text-center text-gray-800'>No Product Added to the Wishlist</p>
            </div>
        </>
    )
}

export default WishList
