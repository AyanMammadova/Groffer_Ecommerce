import React, { useContext, useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import apiInstance from '../services/axiosInstance';
import { useFormik } from 'formik';
import { CategorySchemas } from '../schemas/AdminSchemas';
import { DATA } from '../context/DataContext';

function SubCategory() {
  const { categoryData,subCategoryData } = useContext(DATA)
  const [catid, setCatId] = useState()
  const [actionId, setActionId] = useState(null)
  const [editingSubCat, setEditingSubCat] = useState('')
  const [action, setAction] = useState('')
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    console.log(subCategoryData)
    // getAllSubCategory()
  }, [])
  function handleActions(action, id) {
    setAction(action)
    setActionId(id)
    setShowForm(true)
    if (action === 'put') {
      apiInstance.get(`SubCategories/${id}`)
        .then(res => {
          const subCategoryName = res.data.name;
          setEditingSubCat(subCategoryName);
          formik.setFieldValue('subcategory', subCategoryName); 
        })
        .catch(err => console.error('Error:', err));
    }
    // formik.handleSubmit()
  }
  useEffect(() => {
    if (categoryData && categoryData.length > 0) {
      setCatId(categoryData[0].id);
    }
  }, [categoryData]);
  const formik = useFormik({
    initialValues: {
      subcategory: '',
    },
    validationSchema: CategorySchemas,
    onSubmit: (values) => {
      const { subcategory } = values;

      const formData = new FormData();
      formData.append('Name', subcategory);
      formData.append('Slug', subcategory.toLowerCase().replace(/\s+/g, '-'));
      formData.append('CategoryId', catid);

      if (action === 'post') {
        apiInstance.post('SubCategories', formData)
          .then(res => {
            setShowForm(false);
            formik.resetForm();
          })
          .catch(err => console.error('Error:', err));
      } else if (action === 'put') {
        apiInstance.put(`SubCategories/${actionId}`, formData)
          .then(res => {
            console.log('SubCategory updated:', res.data);
            setShowForm(false);
            formik.resetForm();
            getAllSubCategory();
          })
          .catch(err => console.error('Error:', err))
      }
    },
  });
  function deleteSubCategory(id) {
    apiInstance.delete(`SubCategories/${id}`)
      .then(res => {
        console.log('SubCategory deleted:', res.data);
        setShowForm(false);
        getAllSubCategory()
      })
      .catch(err => console.error('Error:', err));
  }



  return (
    <>
      <div
        onClick={() => { setShowForm(false) }}
        className={`${showForm ? 'flex fixed' : 'hidden'}   top-0 z-10  justify-center items-center bg-black/80 h-[100vh] w-[100%]`}>
        <div
          onClick={(e) => { e.stopPropagation() }}
          className='w-[40%] z-20 min-h-[40vh] relative bg-black shadow-lg shadow-gray-700 rounded-sm'>
          <IoIosClose
            onClick={() => { setShowForm(false) }}
            className='text-[3em] cursor-pointer absolute top-[10px] right-[10px] text-white' />
          <form
            onSubmit={formik.handleSubmit}
            className='text-white text-[1.2em] pt-[40px] w-[90%] mx-auto'>

            <label htmlFor="subcategory">SubCategory</label>
            <input
              type="text"
              id="subcategory"
              name="subcategory"
              placeholder="SubCategory"
              value={
                formik.values.subcategory
              }
              onChange={formik.handleChange}
              className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white'
            />
            {formik.errors.subcategory && (
              <div className="text-red-500 text-sm">{formik.errors.subcategory}</div>
            )}
            <select onChange={(e) => { setCatId(e.target.value) }} className='bg-white w-[100%] p-[10px] my-[10px] rounded-sm  text-black'>
              {
                categoryData && categoryData.map((item, i) => {
                  return <option key={i} value={item.id}>{item.name}</option>
                })
              }
            </select>


            <button
              className='w-[100%] font-bold cursor-pointer p-[10px] my-[10px] rounded-sm text-black bg-white '
              type='submit'
            >
              {action == 'post' ? 'Add new SubCategory' : 'Edit SubCategory'}
            </button>
          </form>
        </div>
      </div>
      <p className='text-[2em] text-center  pt-[30px] font-bold underline'>SubCategory Data</p>
      <button
        onClick={() => {
          handleActions('post', '')
        }}
        className='ml-[30px] border-2 cursor-pointer hover:bg-white hover:text-black  transition-all duration-300 border-white p-[5px]  rounded-md text-[1.2em] font-[500]'>
        Add new SubCategory
      </button>
      <table className='w-[96%]  mx-auto border-2 border-white mt-[30px]'>
        <thead>
          <tr>
            <th className='py-[10px] border-2 border-white'>#</th>
            <th className='py-[10px] border-2 border-white'>SubCategory name</th>
            <th className='py-[10px] border-2 border-white'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            subCategoryData && subCategoryData.map((item, i) => {
              return <tr key={i}>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 1}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500] capitalize'>{item.name}</td>
                <td className='py-[10px] border-2 text-center border-white font-[500]'>
                  <button
                    type='button'
                    onClick={() => {
                      handleActions('put', item.id)
                    }}
                    className='mx-[10px] bg-green-500 py-[4px] rounded-md border-2 cursor-pointer border-green-400 px-[10px]'>
                    Edit
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      deleteSubCategory(item.id)
                    }}
                    className='mx-[10px] bg-red-600 py-[4px] rounded-md border-2 cursor-pointer border-red-600 px-[10px]'>
                    Delete
                  </button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default SubCategory
