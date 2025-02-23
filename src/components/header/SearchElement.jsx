import React, { useContext, useEffect, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { DATA } from '../../context/DataContext'

function SearchElement() {
    const { allProducts } = useContext(DATA)
    const path=useLocation().pathname
    const [searchedProducts, setSearchedProducts] = useState(null)
    const [untrimmed,setUntrimmed]=useState('')
    const [searchedValue, setSearchedValue] = useState('')
    function handleSearch(value) {
        const trimmedInput = value.replace(/ /g, "")
        setSearchedValue(trimmedInput.toLowerCase())
    }
    useEffect(()=>{
        setUntrimmed('')
        setSearchedValue('')
        setSearchedProducts(null)
    },[path])
    useEffect(() => {
        setSearchedProducts(
            allProducts?.filter((item, i) => {
                return item?.name?.toLowerCase().replace(/ /g, "").includes(searchedValue)
            })
        )
    }, [searchedValue])

    return (
        <>
            <div className='hidden md:block'>
                <div className='bg-[#F2F2F2]  relative  flex items-center rounded-sm'>
                    <input
                        onChange={(e) => { setUntrimmed(e.target.value),handleSearch(e.target.value) }}
                        type="text"
                        value={untrimmed}
                        placeholder='Search products...'
                        className='focus:outline-none rounded-sm mr-[24px] py-[10px] pl-[15px] p-[5px] w-[300px]' />

                    <Link 
                    to={`/shop?searched=${searchedValue}`}
                    >
                        <FaMagnifyingGlass className='absolute bottom-[13px] right-[8px] ' />
                    </Link>
                    <div className={` ${searchedValue.length > 0 ? 'absolute' : 'hidden'} z-50 max-h-[300px] overflow-y-scroll   top-[60px]   w-[100%] bg-white  shadow-lg mt-[10px] border-[1px] border-gray-100`}>
                        {
                            searchedProducts && searchedProducts.length > 0 ? searchedProducts.map((item, i) => {
                                return <Link to={`/details/${item.id}`} key={i} className='flex items-center h-[40px] my-[10px] gap-[10px]'>

                                    {
                                        item?.primaryImageUrl 
                                        ? <img
                                        className='w-[40px] border-[1px] border-gray-200'
                                        src={`https://supermarket777.blob.core.windows.net/product/${item?.primaryImageUrl}`} alt="" /> 
                                        : <div className='w-[40px] border-[1px] border-gray-200 animate-pulse bg-gray-300'>

                                        </div>
                                    }

                                    <p className='text-[.9em] max-w-[100%] '>{item?.name}</p>
                                </Link>
                            }) : searchedProducts && searchedProducts?.length == 0 ? <p className='max-w-[100%] py-[20px] break-words'>No product found for “{searchedValue}”</p> : ''
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchElement
