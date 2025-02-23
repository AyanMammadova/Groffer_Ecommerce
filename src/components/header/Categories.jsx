import React, { useContext } from 'react'
import { FaAppleAlt } from 'react-icons/fa'
import { FaFish } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { DATA } from '../../context/DataContext'
import { MdOutlineBakeryDining } from "react-icons/md";
import { IoFishOutline } from 'react-icons/io5'
import { GiFruitBowl } from "react-icons/gi";
import { GiGrapes } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { LuEggFried } from "react-icons/lu";
import { GiCannedFish } from "react-icons/gi";
import { Link } from 'react-router-dom'



function Categories() {
    const { catsWithSubs } = useContext(DATA)
    console.log(catsWithSubs)
    const iconsData = [
        <IoFishOutline className='text-[1.9em]' />,
        <MdOutlineBakeryDining className='text-[1.9em]' />,
        <GiGrapes className='text-[1.9em]' />,
        <BiDrink className='text-[1.9em]' />,
        <LuEggFried className='text-[1.9em]' />,
        <GiCannedFish className='text-[1.9em]' />
    ]
    console.log(catsWithSubs?.[0].subcategories[0].subCategoryName)
    return (
        <>
            <div className='absolute group-hover:max-h-[100vh] -z-50 group-hover:opacity-100 max-h-0 opacity-0 top-[50px] bg-white group-hover:z-50 w-[100%]'>
                {
                    catsWithSubs && catsWithSubs.map((item, i) => {
                        return <div key={i} className='flex  relative justify-between   items-center'>
                            <div className='flex justify-between relative category w-[100%] items-center hover:bg-gray-300'>
                                <div className='flex items-center px-[10px]'>
                                    {iconsData[i]}
                                    <Link to={`/shop?category=${item.categoryName}-${item.categoryId}`} className='text-[1.4em] py-[15px] p-[10px] font-[500]'>
                                        {item.categoryName}
                                    </Link>
                                </div>
                                <IoIosArrowForward className='text-[1.2em] mr-[10px]' />
                                <div className=' subcategory flex-col w-[200px] top-0 bg-white absolute hidden -mr-[200px] '>
                                    {
                                        item?.subcategories?.map((subitem, subi) => {
                                            return <Link to={`/shop?subcategory=${subitem?.subCategoryName}-${subitem?.subCategoryId}`} key={subi} className='py-[17px] font-[500] hover:bg-gray-200 px-[10px] text-[1.2em]'>
                                                {subitem?.subCategoryName}
                                            </Link>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Categories
