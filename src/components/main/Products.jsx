import React, { useContext, useEffect, useState } from 'react'
import BreadCrumps from './BreadCrumps'
import ProductCard from './ProductCard'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FaRegStar } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { TiHeart } from 'react-icons/ti'
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


import { DATA } from '../../context/DataContext'
import { getProductsByCategory, getProductsBySubCategory, getProductsByTag } from '../../services/api'

function Products() {
  const navigate = useNavigate();

  const { shopType, allProducts, allTags } = useContext(DATA)
  const [currentData, setCurrentData] = useState([])
  const [isRows, setIsRows] = useState(false)
  const [tagArr, setTagArr] = useState([])

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchedValue = queryParams.get('searched');
  const tagParam = queryParams.get('tag');
  const tag = tagParam?.split('-').at(0)
  const category = queryParams.get('category')
  const subcategory = queryParams.get('subcategory')
  function handleSearch(value) {

  }

  function removefromTagArr(id) {
    const newTagArr = tagArr.filter(item => item.id !== id);
    setTagArr(newTagArr)
    getProductsByTag(newTagArr).then(res => setCurrentData(res.data))
  }
  function addTag(tag, id) {
    const tagExists = tagArr.some(existingTag => existingTag.id === id);
    if (!tagExists) {
      const newTagArr = [...tagArr, { tag, id }];
      setTagArr(newTagArr)
      getProductsByTag(newTagArr).then(res => setCurrentData(res.data))
    }
    

  }
 
  useEffect(() => {
    if (tagParam) {
      addTag(tagParam?.split('-').at(0), Number(tagParam?.split('-').at(1)))
    }
  }, [])
  useEffect(() => {
    if (searchedValue && searchedValue != 'all') {
      setCurrentData(
        allProducts?.filter((item, i) => {
          return item?.name?.toLowerCase().replace(/ /g, "").includes(searchedValue)
        })
      )
    }
    
    else if (tagArr?.length > 0) {
      console.log(tagArr)
      getProductsByTag(tagArr).then(res => setCurrentData(res.data))
    }
     else if (searchedValue == 'all') {
      setCurrentData(allProducts)
    }
    else if (category) {
      getProductsByCategory(category?.split('-').at(1)).then(res => setCurrentData(res.data))
    }
    else if (subcategory) {
      getProductsBySubCategory(subcategory?.split('-').at(1)).then(res => setCurrentData(res.data))
    }
    
    console.log(currentData)
  }, [searchedValue, tag, category, subcategory, allProducts, tagArr])
  return (
    <>
      <BreadCrumps page={[
        {
          name: 'Shop',
          slug: 'shop?searched=all'
        }
      ]} />
      <p className={`${tagArr?.length > 0 ? 'hidden' : 'block'} text-[2em] font-[600] px-[10px] md:px-[40px]`}>
        Search results: “{
          category ? category?.split('-').at(0)
            : subcategory ? subcategory?.split('-').at(0)
              : searchedValue ? searchedValue : ''
        }”
      </p>
      <div className='flex p-[10px] md:px-[40px] flex-wrap gap-[10px]'>
        {
          tagArr?.length > 0 && tagArr.map((item, i) => {
            return <p
              className=' border-[1px] flex justify-between items-center  text-[1em] font-[500] p-[5px]  rounded-md bg-[#ddf8f2] hover:bg-[#b6e9de] border-[#136450] max-w-[100%]  mx-[5px] capitalize' >
              {item.tag}
              <IoCloseSharp onClick={() => { removefromTagArr(item.id) }} className={`cursor-pointer ${tagArr?.length == 1 ? 'hidden' : ''}`} />
            </p>
          })
        }
      </div>
      <div className='h-[1px] w-[100%] my-[20px] bg-gray-200'></div>

      <div className='md:flex px-[10px] gap-[20px] md:p-[40px]'>

        <div className='w-[100%]'>
          <div className='text-[1.2em] mb-[20px] sm:flex justify-between'>
            {/* <div className='flex mb-[20px] rounded-md'>
              <BsGrid
                onClick={() => { setIsRows(!isRows) }}
                className={` ${isRows ? 'text-[#136450] bg-white ' : 'bg-[#136450] text-white'} rounded-tl-md p-[4px] rounded-bl-md  text-[2em] cursor-pointer`} />
              <CiGrid2H
                onClick={() => { setIsRows(!isRows) }}
                className={` ${isRows ? 'bg-[#136450] text-white ' : 'text-[#136450] bg-white'} rounded-tr-md p-[4px] rounded-br-md  text-[2em] cursor-pointer`} />
              <p className='px-[10px]'>Showing 1–12 of 34 results</p>
            </div> */}

            {/* <div>
              <select className='bg-[#F2F2F2] text-gray-700 focus:outline-hidden border-[1px] border-gray-300 w-[100%] mx-auto sm:w-[180px] py-[10px]'>
                <option value="">Sort by Popularity</option>
                <option value="">Sort Low to High</option>
                <option value="">Sort High to Low</option>
                <option value="">Sort by latest</option>
              </select>
            </div> */}
          </div>
          <div className={`${isRows ? 'hidden' : 'block'} gap-[10px] flex justify-around flex-wrap `}>
            {
              currentData && currentData.map((item, i) => {
                return <ProductCard id={item?.id} />
              })
            }
            <div className={`${currentData.length ==0 ? 'block' : 'hidden'} text-[1.4em]`}>
              No pro found
            </div>
          </div>
          {/* <div className={`${isRows ? 'block' : 'hidden'} gap-[10px] grid grid-cols-1`}>
            <Link
              to={'/details'}
              className='w-[100%]  relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]    rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center'>
                <img className='  w-[20%] mt-[20px] object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
                <div>
                  <div className='flex text-gray-400 p-[10px] '>
                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                  </div>
                  <p className='px-[10px] text-[1.1em] font-bold w-[80%]'>Broccoli and Cauliflower Mix</p>
                </div>
              </div>
              <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
              <TiHeart className='absolute text-[1.3em] top-[50px] right-[10px]' />
              <FaMagnifyingGlass className='absolute top-[70px] right-[10px]' />
            </Link>
            <Link
              to={'/details'}
              className='w-[100%]  relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]    rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center'>
                <img className='  w-[20%] mt-[20px] object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
                <div>
                  <div className='flex text-gray-400 p-[10px] '>
                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                  </div>
                  <p className='px-[10px] text-[1.1em] font-bold w-[80%]'>Broccoli and Cauliflower Mix</p>
                </div>
              </div>
              <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
              <TiHeart className='absolute text-[1.3em] top-[50px] right-[10px]' />
              <FaMagnifyingGlass className='absolute top-[70px] right-[10px]' />
            </Link>
            <Link
              to={'/details'}
              className='w-[100%]  relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]    rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center'>
                <img className='  w-[20%] mt-[20px] object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
                <div>
                  <div className='flex text-gray-400 p-[10px] '>
                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                  </div>
                  <p className='px-[10px] text-[1.1em] font-bold w-[80%]'>Broccoli and Cauliflower Mix</p>
                </div>
              </div>
              <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
              <TiHeart className='absolute text-[1.3em] top-[50px] right-[10px]' />
              <FaMagnifyingGlass className='absolute top-[70px] right-[10px]' />
            </Link>
            <Link
              to={'/details'}
              className='w-[100%]  relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]    rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center'>
                <img className='  w-[20%] mt-[20px] object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
                <div>
                  <div className='flex text-gray-400 p-[10px] '>
                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                  </div>
                  <p className='px-[10px] text-[1.1em] font-bold w-[80%]'>Broccoli and Cauliflower Mix</p>
                </div>
              </div>
              <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
              <TiHeart className='absolute text-[1.3em] top-[50px] right-[10px]' />
              <FaMagnifyingGlass className='absolute top-[70px] right-[10px]' />
            </Link>
            <Link
              to={'/details'}
              className='w-[100%]  relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]    rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center'>
                <img className='  w-[20%] mt-[20px] object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
                <div>
                  <div className='flex text-gray-400 p-[10px] '>
                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                  </div>
                  <p className='px-[10px] text-[1.1em] font-bold w-[80%]'>Broccoli and Cauliflower Mix</p>
                </div>
              </div>
              <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
              <TiHeart className='absolute text-[1.3em] top-[50px] right-[10px]' />
              <FaMagnifyingGlass className='absolute top-[70px] right-[10px]' />
            </Link>
          </div> */}
        </div>
        <div className='block order-4 md:-order-1 md:w-[30%] w-[100%] '>
          {/* <div className='border-[1px] border-gray-300 mx-auto w-[100%] relative  flex items-center rounded-sm'>
            <input
              onChange={(e) => { handleSearch(e.target.value) }}
              type="text"
              placeholder='Search products...'
              className='focus:outline-none rounded-sm py-[10px] pl-[15px] p-[5px] mx-auto w-[100%]' />
          </div> */}
          <p className='text-[1.5em] font-[500]'>Popular tags</p>
          <div className='pt-[20px] flex gap-[5px] flex-wrap w-[100%]'>
            {
              allTags && allTags.map((item, i) => {
                return <p
                  onClick={() => { addTag(item.name, item.id) }}
                  className={`${tagArr.some(exist => exist.id == item.id) ? 'bg-[#c3c3c3]  border-[#242424]' : 'bg-[#ddf8f2] hover:bg-[#b6e9de] cursor-pointer border-[#136450]'} border-[1px] text-[.8em] font-[500] p-[5px]  rounded-md  max-w-[100%]  mx-[5px] capitalize`}>
                  {item.name}
                </p>
              })
            }
          </div>


        </div>
      </div>
    </>
  )
}

export default Products
