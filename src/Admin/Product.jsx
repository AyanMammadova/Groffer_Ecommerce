import React, { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { getAllCategories, getAllCatsWithSubs, getAllProducts, getAllSubCategories, getAllTags } from '../services/api'
import apiInstance from '../services/axiosInstance'

function Product() {
  const [description, setDescription] = useState('')
  const [selectedCat, setSelectedCat] = useState('')
  const [selectedSub, setSelectedSub] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [allTags, setAllTags] = useState(null)
  const [allProducts, setallProducts] = useState(null)
  const [catsWithSubsData, setCatsWithSubsData] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [imageFiles, setImageFiles] = useState([]);
  console.log(allProducts)

  function handleImageUpload(event) {
    const files = Array.from(event.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
    console.log(imageFiles)
  }
  function removeImage(index) {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }
  useEffect(() => {
    getAllCatsWithSubs().then(res => {
      setCatsWithSubsData(res.data.categories)
      setSelectedCat(res.data.categories[0].categoryId)
    })
    getAllTags().then(res => setAllTags(res.data))
    getAllProducts().then(res => setallProducts(res.data))

  }, [])


  function handleTags(id) {
    const foundTag = (allTags || []).find((tag) => tag.id === Number(id));
    if (foundTag) {
      setSelectedTags((prevTags) => [...(prevTags || []), { name: foundTag.name, id: foundTag.id }]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const formData = new FormData();

    formData.append('Name', e.target.title.value); 
    formData.append('Price', e.target.price.value);
    formData.append('Discount', e.target.discount.value);
    formData.append('CategoryId', selectedCat);
    formData.append('SubCategoryId', selectedSub);
    formData.append('Description', e.target.description.value); 
    
    formData.append('Slug', title.toLowerCase().replace(/\s+/g, '-')); 
  
    formData.append('SKU', 'rdm345');  
    
    selectedTags.forEach(tag => {
      formData.append('TagIds', tag.id);
    });
  
    imageFiles.forEach((file, index) => {
      formData.append('Images', file);  
      if (index === 0) {
        formData.append('PrimaryImage', file);  
      }
    });
  
    // Send the request using your apiInstance
    apiInstance.post('Products', formData)
      .then(res => {
        setShowForm(false);        // Hide the form after success
        formik.resetForm();        // Reset the form if you're using Formik
        console.log('Product added:', res.data);  // Optional: Log response data
      })
      .catch(err => {
        console.error('Error:', err);  // Log errors if any
      });
  }
  



  return (
    <>
      <div
        onClick={() => { setShowForm(false) }}
        className={`${showForm ? 'flex fixed' : 'hidden'}   top-0 z-10  justify-center items-center bg-black/80 h-[100vh] w-[100%]`}>
        <div
          onClick={(e) => { e.stopPropagation() }}
          className='w-[80%] z-20 h-[100vh] relative bg-black rounded-sm'>
          <IoIosClose
            onClick={() => { setShowForm(false) }}
            className='text-[3em] cursor-pointer absolute top-[10px] right-[10px] text-white' />
          <form
            onSubmit={(e) => { handleSubmit(e) }}
            className='text-white text-[1.2em] pt-[40px] w-[90%] mx-auto'>
            <label htmlFor="title">ProductTitle</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder='ProductTitle'
              className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
            />
            <label htmlFor="title">ProductTitle</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              placeholder="Description"
              className="w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white"
            />


            <div className='flex justify-between'>
              <div className='w-[45%]'>
                <label htmlFor="category">Select Product Category</label>
                <select
                  onChange={(e) => { setSelectedCat(e.target.value) }}
                  name="category"
                  id="category"
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                >
                  {
                    catsWithSubsData && catsWithSubsData.map((item, i) => {
                      return <option key={i} value={item.categoryId}>
                        {item.categoryName}
                      </option>
                    })
                  }
                </select>
              </div>


              <div className='w-[45%]'>
                <label htmlFor="subcategory">Select Product SubCategory</label>

                <select
                  onChange={(e) => { setSelectedSub(e.target.value) }}
                  name="subcategory"
                  id="subcategory"
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                >
                  {catsWithSubsData &&
                    catsWithSubsData
                      .find((item) => item.categoryId === selectedCat)
                      ?.subcategories.map((subItem, subi) => (
                        <option key={subi} value={subItem.subCategoryId}>
                          {subItem.subCategoryName}
                        </option>
                      ))}
                </select>
              </div>
            </div>


            <div className='flex justify-between'>
              <div className='w-[35%]'>
                <label htmlFor="tags">Product Tags</label>
                <select
                  onChange={(e) => { handleTags(e.target.value) }}
                  name="tags"
                  id="tags"
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '>
                  {
                    allTags && allTags
                      .filter(item => !selectedTags.find(tag => tag.id === item.id))
                      .map((item, i) => (
                        <option key={i} value={item.id} className='lowercase'>{item.name}</option>
                      ))
                  }

                </select>
              </div>
              <div className='w-[60%]'>
                <div>Selected Tags:</div>
                <div
                  className=' p-[5px] my-[7px] rounded-sm text-black bg-white '
                ><span className='text-white'>l</span>
                  {
                    selectedTags && selectedTags.map((item, i) => {
                      return <span className='lowercase'> {item.name}, </span>
                    })
                  }

                </div>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="productImages">Upload Product Images</label>
                <input
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white'
                  type="file"
                  id="productImages"
                  name="productImages"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />

                <div className='mt-[10px]'>
                  {imageFiles.map((file, index) => (
                    <div key={index} className='flex items-center justify-between p-[5px] my-[5px] bg-gray-200 text-black rounded-sm'>
                      <span>{file.name}</span>
                      <button
                        type='button'
                        onClick={() => removeImage(index)}
                        className='text-red-600 font-bold cursor-pointer'
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex gap-[20px]'>
              <div>
                <label htmlFor="price">Price (€)</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder='Price'
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                />
              </div>
              <div>
                <label htmlFor="discount">Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder='Discount'
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                />
              </div>
            </div>
            <button
              className='w-[100%] font-bold cursor-pointer p-[5px] my-[7px] rounded-sm text-black bg-white '
              type='submit'>
              Add product
            </button>
          </form>
        </div>
      </div>
      <p className='text-[2em] text-center  pt-[30px] font-bold underline'>Product Data</p>
      <button
        onClick={() => { setShowForm(true) }}
        className='ml-[30px] cursor-pointer hover:bg-gray-300 transition-all duration-300 border-2 border-black p-[5px]  rounded-md text-[1.2em] font-[500]'>
        Add new Product
      </button>
      <table className='w-[96%]  mx-auto border-2 border-black mt-[30px]'>
        <thead>
          <tr>
            <th className='py-[10px] border-2 border-white'>#</th>
            <th className='py-[10px] border-2 border-white'>Title</th>
            <th className='py-[10px] border-2 border-white'>Category</th>
            <th className='py-[10px] border-2 border-white'>Tags</th>
            <th className='py-[10px] border-2 border-white'>Price</th>
            <th className='py-[10px] border-2 border-white'>Discount</th>
            <th className='py-[10px] border-2 border-white'>Action</th></tr>
        </thead>
        <tbody>
          {
            Array(10).fill('ayan').map((item, i) => {
              return <tr key={i}>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 1}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>Apple</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>Fruit</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>Healthy,Nature,Organic</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>10</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>45</td>
                <td className='py-[10px] border-2 text-center border-white font-[500]'>
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

export default Product
