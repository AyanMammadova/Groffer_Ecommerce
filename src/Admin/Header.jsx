import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const [active, setActive] = useState('product')
    return (
        <>
            <div className='flex  w-[96%] border-b-2 border-black  mx-auto justify-center items-center  py-[20px] '>
                <NavLink
                    onClick={() => { setActive('product') }}
                    to={''}
                    className={` border-2 border-black mx-[10px] hover:bg-black hover:text-white transition-all duration-200 active:bg-red-500 font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'product' ? 'bg-black text-white' : ''}`}>
                    Product
                </NavLink>

                <NavLink
                    onClick={() => { setActive('category') }}
                    to={'category'}
                    className={`border-2 border-black mx-[10px] hover:bg-black hover:text-white transition-all duration-200 active:bg-red-500  font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'category' ? 'bg-black text-white' : ''}`}>
                    Category
                </NavLink>

                <NavLink
                    onClick={() => { setActive('tag') }}
                    to={'tag'}
                    className={`border-2 border-black mx-[10px] hover:bg-black hover:text-white transition-all duration-200 active:bg-red-500  font-[500] text-[1.2em] rounded-md p-[10px] ${active == 'tag' ? 'bg-black text-white' : ''}`}>
                    Tag
                </NavLink>
            </div>
        </>
    )
}

export default Header
