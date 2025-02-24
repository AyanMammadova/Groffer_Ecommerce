import React, { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import apiInstance from '../services/axiosInstance';
import { useFormik } from 'formik';
import { TagSchemas } from '../schemas/AdminSchemas';
import toast from 'react-hot-toast';
function Tag() {
  const [actionId, setActionId] = useState(null)
  const [editingTag, setEditingTag] = useState('')
  const [action, setAction] = useState('')
  const [tagData, setTagData] = useState(null)
  const [showForm, setShowForm] = useState(false);
  const [mainErr,setMainErr]=useState(null)
  function getAllTag() {
    apiInstance.get('Tags')
      .then(res => setTagData(res.data))
      .catch(err => console.error('Error:', err));
  }
  useEffect(() => {
    
    getAllTag()
  }, [showForm])
  function handleActions(action, id) {
    setAction(action)
    setActionId(id)
    setShowForm(true)
    if (action === 'put') {
      apiInstance.get(`Tags/${id}`)
        .then(res => {
          const tagName = res.data.name;
          setEditingTag(tagName);
          formik.setFieldValue('tag', tagName); 
        })
        .catch(err => console.error('Error:', err));
    }
    formik.handleSubmit()
  }

  const formik = useFormik({
    initialValues: {
      tag: '',
    },
    validationSchema: TagSchemas,
    onSubmit: (values) => {
      const { tag } = values;

      const formData = new FormData();
      formData.append('Name', tag);
      formData.append('Slug', tag.toLowerCase().replace(/\s+/g, '-'));

      if (action === 'post') {
        apiInstance.post('Tags', formData)
          .then(res => {
            setShowForm(false);
            formik.resetForm();
          })
          .catch(err =>{ 
            console.error('Error:', err)
            toast.error('Tag already exist !')
          });
      } else if (action === 'put') {
        apiInstance.put(`Tags/${actionId}`, formData)
          .then(res => {
            console.log('Tag updated:', res.data);
            setShowForm(false);
            formik.resetForm();
            getAllTag(); 
          })
          .catch(err => console.error('Error:', err))
      }
    },
  });
  function deleteTag(id) {
    apiInstance.delete(`Tags/${id}`)
      .then(res => {
        console.log('Tag deleted:', res.data);
        setShowForm(false);
        getAllTag()
      })
      .catch(err => 
        
        console.error('Error:', err)
      );
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

            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              id="tag"
              name="tag"
              placeholder="Tag"
              value={
                formik.values.tag
              }
              onChange={formik.handleChange}
              className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white'
            />
            {formik.errors.tag && (
              <div className="text-red-500 text-sm">{formik.errors.tag}</div>
            )}

            <button
              className='w-[100%] font-bold cursor-pointer p-[10px] my-[10px] rounded-sm text-black bg-white '
              type='submit'
            >
              {action == 'post' ? 'Add new Tag' : 'Edit Tag'}
            </button>
          </form>
        </div>
      </div>
      <p className='text-[2em] text-center  pt-[30px] font-bold underline'>Tag Data</p>
      <button
        onClick={() => {
          handleActions('post', '')
        }}
        className='ml-[30px] border-2 cursor-pointer hover:bg-white hover:text-black  transition-all duration-300 border-white p-[5px]  rounded-md text-[1.2em] font-[500]'>
        Add new Tag
      </button>
      <table className='w-[96%]  mx-auto border-2 border-white mt-[30px]'>
        <thead>
          <tr>
            <th className='py-[10px] border-2 border-white'>#</th>
            <th className='py-[10px] border-2 border-white'>Tag name</th>
            <th className='py-[10px] border-2 border-white'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tagData && tagData.map((item, i) => {
              return <tr key={i}>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 1}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500] '>#{item.name}</td>
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
                      deleteTag(item.id)
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

export default Tag
