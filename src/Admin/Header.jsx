import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Header() {
    const [active, setActive] = useState('product')
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="admin.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Admincik</title>
            </Helmet>
            <div className='flex  w-[96%] border-b-2 border-white  mx-auto justify-center items-center  py-[20px] '>
                <NavLink
                    onClick={() => { setActive('product') }}
                    to={''}
                    className={` border-2 border-white mx-[10px] hover:bg-white hover:text-black transition-all duration-200 active:bg-red-500 font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'product' ? 'bg-black text-white' : ''}`}>
                    Product
                </NavLink>
                <NavLink
                    onClick={() => { setActive('coupon') }}
                    to={'coupon'}
                    className={`border-2 border-white mx-[10px] hover:bg-white hover:text-black transition-all duration-200 active:bg-red-500  font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'coupon' ? 'bg-black text-white' : ''}`}>
                    Coupon
                </NavLink>

                <NavLink
                    onClick={() => { setActive('category') }}
                    to={'category'}
                    className={`border-2 border-white mx-[10px] hover:bg-white hover:text-black transition-all duration-200 active:bg-red-500  font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'category' ? 'bg-black text-white' : ''}`}>
                    Category
                </NavLink>
                <NavLink
                    onClick={() => { setActive('subcategory') }}
                    to={'subcategory'}
                    className={`border-2 border-white mx-[10px] hover:bg-white hover:text-black transition-all duration-200 active:bg-red-500  font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'category' ? 'bg-black text-white' : ''}`}>
                    SubCategory
                </NavLink>

                <NavLink
                    onClick={() => { setActive('tag') }}
                    to={'tag'}
                    className={`border-2 border-white mx-[10px] hover:bg-white hover:text-black transition-all duration-200 active:bg-red-500  font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'tag' ? 'bg-black text-white' : ''}`}>
                    Tag
                </NavLink>
            </div>
        </>
    )
}

export default Header
