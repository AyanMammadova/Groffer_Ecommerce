import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'

function Category() {
  const [showForm, setShowForm] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <>
      <div
        onClick={() => { setShowForm(false) }}
        className={`${showForm ? 'flex fixed' : 'hidden'}   top-0 z-10  justify-center items-center bg-black/80 h-[100vh] w-[100%]`}>
        <div
          onClick={(e) => { e.stopPropagation() }}
          className='w-[40%] z-20 h-[90vh] relative bg-black rounded-sm'>
          <IoIosClose
            onClick={() => { setShowForm(false) }}
            className='text-[3em] cursor-pointer absolute top-[10px] right-[10px] text-white' />
          <form
            onSubmit={(e)=>{handleSubmit(e)}}
             className='text-white text-[1.2em] pt-[40px] w-[90%] mx-auto'>

            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder='Category'
              className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white '
            />

            <label htmlFor="subcategory">SubCategory</label>
            <input
              type="text"
              name="subcategory"
              id="subcategory"
              placeholder='SubCategory'
              className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white '
            />
           
            <button
              className='w-[100%] font-bold cursor-pointer p-[10px] my-[10px] rounded-sm text-black bg-white '
              type='submit'>
              Add Category
            </button>
          </form>
        </div>
      </div>
      <p className='text-[2em] text-center  pt-[30px] font-bold underline'>Category Data</p>
      <button
        onClick={() => { setShowForm(true) }}
        className='ml-[30px] border-2 cursor-pointer hover:bg-gray-300 transition-all duration-300 border-black p-[5px]  rounded-md text-[1.2em] font-[500]'>
        Add new Category
      </button>
      <table className='w-[96%]  mx-auto border-2 border-black mt-[30px]'>
        <thead>
          <th className='py-[10px] border-2 border-black'>#</th>
          <th className='py-[10px] border-2 border-black'>Category</th>
          <th className='py-[10px] border-2 border-black'>Subcategory</th>
          <th className='py-[10px] border-2 border-black'>Action</th>
        </thead>
        <tbody>
          {
            Array(10).fill('ayan').map((item, i) => {
              return <tr>
                <td className='py-[10px] border-2 px-[10px] border-black font-[500]'>{i + 1}</td>
                <td className='py-[10px] border-2 px-[10px] border-black font-[500]'>Fruit</td>
                <td className='py-[10px] border-2 px-[10px] border-black font-[500]'>Berries,Blues</td>
                <td className='py-[10px] border-2 text-center border-black font-[500]'>
                  <button className='mx-[10px] bg-green-500 py-[4px] rounded-md border-2 cursor-pointer border-green-400 px-[10px]'>Edit</button>
                  <button className='mx-[10px] bg-red-600 py-[4px] rounded-md border-2 cursor-pointer border-red-600 px-[10px]'>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Category
