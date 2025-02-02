import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function MobileMenu({ showMobileMenu }) {
  const [showShops, setShowShops] = useState(false)
  const [showBlogs, setShowBlogs] = useState(false)
  return (
    <>
      <div className="relative md:hidden">
        <div
          className={`bg-white shadow-2xl w-full transition-all duration-500 overflow-hidden ${showMobileMenu ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='font-[600] px-[20px] text-[1.4em]'>
            <div className='border-b-2 border-gray-200 py-[5px]'>
              <p>Home</p>
            </div>
            <div className='border-b-2 border-gray-200 py-[5px]'>
              <p>About</p>
            </div>
            <div className='relative border-b-2 border-gray-200 py-[5px]'>
              <p className='flex w-[100%] justify-between'>Shop
                <IoIosArrowDown onClick={() => { setShowShops(!showShops) }} />
              </p>
              <ul className={`${showShops ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 overflow-hidden pl-[20px]`}>
                <li>Shop1</li>
                <li>Shop2</li>
                <li>Shop3</li>
              </ul>
            </div>
            <div className='relative '>
              <p className='flex w-[100%] justify-between'>Blog
                <IoIosArrowDown onClick={() => { setShowBlogs(!showBlogs) }} />
              </p>
              <ul className={`${showBlogs ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 overflow-hidden pl-[20px]`}>
                <li>Blog1</li>
                <li>Blog2</li>
                <li>Blog3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
