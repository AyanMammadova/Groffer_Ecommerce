import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function SearchElement() {
    const [searchedValue, setSearchedValue] = useState('')
    function handleSearch(value) {
        const trimmedInput = value.replace(/ /g, "")
        setSearchedValue(trimmedInput)
    }   
    return (
        <>
            <div className='hidden md:block'>
                <div className='bg-[#F2F2F2]  relative  flex items-center rounded-sm'>
                    <input
                        onChange={(e) => { handleSearch(e.target.value) }}
                        type="text"
                        placeholder='Search products...'
                        className='focus:outline-none rounded-sm py-[10px] pl-[15px] p-[5px] w-[320px]' />

                    <Link to={'/shop'}>
                        <FaMagnifyingGlass className='absolute right-[10px] ' />
                    </Link>
                    <div className={` ${searchedValue.length > 0 ? 'absolute' : 'hidden'} z-50  p-[10px] top-[60px] overflow-y-hidden  h-[300px] w-[100%] bg-white  shadow-lg mt-[10px] border-[1px] border-gray-100`}>
                        {
                            Array(10).fill('ayan').map((item, i) => {
                                return <div key={i} className='flex items-center h-[40px] my-[10px] gap-[10px]'>
                                    <img
                                        className='w-[40px] border-[1px] border-gray-200'
                                        src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-composite1-70x70.png" alt="" />
                                    <p className='text-[.9em]'>Basic Healthy Plan</p>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchElement
