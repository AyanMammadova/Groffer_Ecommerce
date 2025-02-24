import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import { DATA } from '../../../context/DataContext'
import { getAllCategories, getAllSubCategories, getAllTags, getProductsByCategory, getProductsByTag } from '../../../services/api'
import { Link } from 'react-router-dom'

function TopCategory() {
    const { allProducts } = useContext(DATA)
    const [meatData,setMeatData]=useState()
    const [drinkData,setDrinkData]=useState()
    useEffect(()=>{
        getProductsByCategory(5).then(res=>setDrinkData(res.data))
        getProductsByCategory(2).then(res=>setMeatData(res.data))
    },[allProducts])
    

    return (
        <>
            <div className='p-[30px]'>
                <p className='text-center font-bold text-[2.4em] pb-[30px]'>Top Categories</p>

                <div className='md:flex gap-[30px]'>
                    <div className='w-[90%] sm:w-[80%] pt-[20px] mx-auto min-w-[200px] md:w-[200px] '>
                        <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-bann_categ1.jpg')] gap-[6px] rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[400px] flex items-center justify-center text-white flex-col">
                            <p className='text-[2em] font-[500]'>Drinks</p>
                            <p>{drinkData && drinkData.length} products</p>
                            <div className='w-[55%] rounded-lg text-[.9em] py-[10px] flex flex-col items-center justify-center border-[1px] border-white'>
                                <Link to={'/shop?category=beverages-5'} className='font-[500] md:text-[1.4em] text-center'>View All Items</Link>
                            </div>
                        </div>
                    </div>

                    <div className=' pt-[20px] max-w-[100%] scrollbar-hide overflow-y-scroll mx-auto gap-[10px] sm:gap-[30px] flex '>
                      
                        {
                            drinkData && drinkData.map((item, i) => {
                                return <ProductCard key={i} id={item?.id} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='p-[30px]'>
            <div className='md:flex gap-[30px]'>
                    <div className='w-[90%] sm:w-[80%] pt-[20px] mx-auto min-w-[200px] md:w-[200px] '>
                        <div className="relative bg-[url('https://images.pexels.com/photos/10749578/pexels-photo-10749578.jpeg?auto=compress&cs=tinysrgb&w=600')] gap-[6px]  rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[400px] flex items-center justify-center text-white flex-col">
                            <div className='bg-black/70 h-[100%] z-10 w-[100%] rounded-tl-3xl rounded-br-3xl absolute inset-0'></div>
                            <p className='text-[2em] z-20 font-[500]'>Meat</p>
                            <p className='z-20'>{meatData && meatData.length} products</p>
                            <div className='w-[55%] z-20 rounded-lg text-[.9em] py-[10px] flex flex-col items-center justify-center border-[1px] border-white'>
                                <Link to={'/shop?category=beverages-5'} className='font-[500] md:text-[1.4em] text-center'>View All Items</Link>
                            </div>
                        </div>
                    </div>

                    <div className=' pt-[20px] max-w-[100%] scrollbar-hide overflow-y-scroll mx-auto gap-[10px] sm:gap-[30px] flex '>
                      
                        {
                            meatData && meatData.map((item, i) => {
                                return <ProductCard key={i} id={item?.id} />
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopCategory
