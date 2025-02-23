import React, { useEffect, useRef, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { getAllCategories, getAllCatsWithSubs, getAllProducts, getAllSubCategories, getAllTags } from '../services/api'
import apiInstance from '../services/axiosInstance'
import { ProductSchemas } from '../schemas/AdminSchemas';

function Product() {
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState('')
  const [selectedCat, setSelectedCat] = useState('default')
  const [selectedSub, setSelectedSub] = useState('default')
  const [selectedTags, setSelectedTags] = useState([])
  const [allTags, setAllTags] = useState(null)
  const [allProducts, setallProducts] = useState([])
  const [catsWithSubsData, setCatsWithSubsData] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [imageFiles, setImageFiles] = useState([]);
  const [errors, setErrors] = useState([])
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 200) + 1
  );

console.log(selectedCat)
  function generateSKU() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    const randomLetters = Array.from({ length: 3 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    const randomNumbers = Array.from({ length: 3 }, () => numbers[Math.floor(Math.random() * numbers.length)]).join("");

    setSku(`${randomLetters}-${randomNumbers}`)
  };

  function handleImageUpload(event) {
    const files = Array.from(event.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
  }
  function removeImage(index) {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }
  useEffect(() => {
    generateSKU()
    getAllCatsWithSubs().then(res => {
      setCatsWithSubsData(res.data.categories)
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
    generateSKU()
    const formData = new FormData();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const discount = e.target.discount.value;
    const category = selectedCat;
    const subcategory = selectedSub; 
    const tags = selectedTags;
    const images = imageFiles;
    console.log(randomNumber)

    const formValues = {
      title,
      description,
      price,
      discount,
      category,
      subcategory,
      tags,
      images,
    }
    ProductSchemas.validate(formValues, { abortEarly: false })
      .then(() => {
        const formData = new FormData();
        formData.append('Name', title);
        formData.append('Price', price);
        formData.append('Discount', discount);
        formData.append('StockQuantity', randomNumber);
        formData.append('CategoryId', category);
        formData.append('SubCategoryId', subcategory);
        formData.append('Description', description);
        formData.append('Slug', title.toLowerCase().replace(/\s+/g, '-'));
        formData.append('SKU', sku);

        selectedTags.forEach(tag => {
          formData.append('TagIds', tag.id);
        });

        imageFiles.forEach((file, index) => {
          formData.append('Images', file);
          if (index === 0) {
            formData.append('PrimaryImage', file);
          }
        });
        apiInstance.post('Products', formData)
          .then(res => {
            setShowForm(false);
            e.target.reset(); 
            setSelectedTags([]);
            setSelectedCat('default')
            setSelectedSub('default')
            setImageFiles([]);
            setDescription('')
            setErrors({});
            setSku('')
            getAllProducts().then(res => setallProducts(res.data))
          })
          .catch(err => {
            console.error('Error:', err);
          });
        getAllProducts().then(res => console.log(res))
      })
      .catch(err => {
        const newErrors = {};
        err.inner.forEach(error => {
          console.log(error.message)
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
    getAllProducts().then(res => setallProducts(res.data))
  }


  function handleDelete(id) {
    
    apiInstance
      .delete(`Products/${id}`)
      .then(() => {
        getAllProducts().then(res => setallProducts(res.data))
      })
      .catch((err) => {
        console.error('Error deleting product:', err);
      });
  }


  return (
    <>
      <div
        onClick={() => { setShowForm(false) }}
        className={`${showForm ? 'flex fixed' : 'hidden'}   top-0 z-10  justify-center items-center bg-black/80 h-[100vh] w-[100%]`}>
        <div
          onClick={(e) => { e.stopPropagation() }}
          className='w-[80%] z-20 overflow-y-scroll scrollable-content py-[20px] max-h-[100vh]  relative bg-blue-900 rounded-sm'>
          <IoIosClose
            onClick={() => { setShowForm(false) }}
            className='text-[3em] cursor-pointer absolute top-[10px] right-[10px] text-white' />
          <form
            onSubmit={(e) => { handleSubmit(e) }}
            className='text-white text-[1.2em]  w-[90%] mx-auto'>
            <label htmlFor="title">ProductTitle</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder='ProductTitle'
              className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
            />
            {errors.title && <p className="text-red-500 font-[500] text-[.8em]">{errors.title}</p>}


            <label htmlFor="title">Product Description</label>
            <textarea
              onChange={(e) => { setDescription(e.target.value) }}
              name="description"
              placeholder="Description"
              value={description}
              className="w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white"
            />
            {errors.description && <p className="text-red-500">{errors.description}</p>}



            <div className='flex justify-between'>
              <div className='w-[45%]'>
                <label htmlFor="category">Select Product Category</label>
                <select
                  onChange={(e) => { setSelectedCat(e.target.value); }}
                  name="category"
                  value={selectedCat}
                  id="category"
                  className="w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white "
                >
                  <option value="default" disabled>Select Category</option>
                  {catsWithSubsData && catsWithSubsData.map((item, i) => {
                    return (
                      <option key={i} value={item.categoryId}>
                        {item.categoryName}
                      </option>
                    );
                  })}
                </select>
                {errors.category && <p className="text-red-500">{errors.category}</p>}

              </div>


              <div className='w-[45%]'>
                <label htmlFor="subcategory">Select Product SubCategory</label>

                <select
                  onChange={(e) => { setSelectedSub(e.target.value) }}
                  name="subcategory"
                  value={selectedSub}
                  id="subcategory"
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                >
                  <option value="default" disabled>Select SubCategory</option>
                  {catsWithSubsData &&
                    catsWithSubsData
                      .find((item) => item.categoryId === selectedCat)
                      ?.subcategories.map((subItem, subi) => (
                        <option key={subi} value={subItem.subCategoryId}>
                          {subItem.subCategoryName}
                        </option>
                      ))}
                </select>
                {errors.subcategory && <p className="text-red-500">{errors.subcategory}</p>}

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
                  <option selected value="default" disabled>Select Tag</option>
                  {
                    allTags && allTags
                      .filter(item => !selectedTags.find(tag => tag.id === item.id))
                      .map((item, i) => (
                        <option key={i} value={item.id} className='lowercase'>{item.name}</option>
                      ))
                  }

                </select>
                {errors.tags && <p className="text-red-500">{errors.tags}</p>}
              </div>
              <div className='w-[60%]'>
                <div>Selected Tags:</div>
                <div
                  className=' p-[5px] my-[7px] rounded-sm text-black bg-white '
                ><span className='text-white'>l</span>
                  {
                    selectedTags && selectedTags.map((item, i) => {
                      return <span key={i} className='lowercase'> {item.name}, </span>
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
                {errors.images && <p className="text-red-500">{errors.images}</p>}
              </div>
            </div>

            <div className='flex gap-[20px]'>
              <div>
                <label htmlFor="price">Price (€)</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder='0'
                  step="0.01"
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                />
                {errors.price && <p className="text-red-500">{errors.price}</p>}
              </div>
              <div>
                <label htmlFor="discount">Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder='0'
                  className='w-[100%] p-[5px] my-[7px] rounded-sm text-black bg-white '
                />
                {errors.discount && <p className="text-red-500">{errors.discount}</p>}
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
        className='ml-[30px] cursor-pointer hover:bg-white hover:text-black transition-all border-white duration-300 border-2  p-[5px]  rounded-md text-[1.2em] font-[500]'>
        Add new Product
      </button>
      <table className='w-[96%]  mx-auto border-2 border-black mt-[30px]'>
        <thead>
          <tr>
            <th className='py-[10px] border-2 border-white'>#</th>
            <th className='py-[10px] border-2 border-white'>Title</th>
            <th className='py-[10px] border-2 border-white'>Category</th>
            <th className='py-[10px] border-2 border-white'>SubCategory</th>
            <th className='py-[10px] border-2 border-white'>Tags</th>
            <th className='py-[10px] border-2 border-white'>Price</th>
            <th className='py-[10px] border-2 border-white'>Discount</th>
            <th className='py-[10px] border-2 border-white'>Action</th></tr>
        </thead>
        <tbody>
          {
            allProducts?.length > 1 && allProducts?.map((item, i) => {
              return <tr key={i}>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 1}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{item.name} <br />{item.slug}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{item.categoryName}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{item.subCategoryName}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>
                  {
                    item?.tagNames?.map((item, i) => {
                      return <p key={i}>{item}</p>
                    })
                  }
                </td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{item.discountedPrice.toFixed(2)}€</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{item.discount} %</td>
                <td className='py-[10px] border-2 text-center border-white font-[500]'>
                  {/* <button
                    className='mx-[10px] bg-green-500 py-[4px] rounded-md border-2 cursor-pointer border-green-400 px-[10px]'>
                    Edit
                  </button> */}
                  <button
                    onClick={() => { handleDelete(item.id) }}
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

export default Product
