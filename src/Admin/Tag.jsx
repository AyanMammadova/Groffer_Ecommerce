import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

function Tag() {
  const [tag, setTag] = useState('');
  const [showForm, setShowForm] = useState(false);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjUxNmM5ZWQ5LTc4YTAtNGJhYy1hNDBmLWZjODEyMzI5ZTY4MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM5NjY5NjE5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMjkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDI5LyJ9.RL1bAqyOF8O9cUi4ByG_jQCXSFER7H13B0dZY86uQ8E"; // Replace with your actual token

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tag) {
      alert('Tag cannot be empty');
      return;
    }
    const formData = new FormData();
    formData.append('Name', tag);
    formData.append('Slug', tag.toLowerCase().replace(/\s+/g, '-'));

    console.log(formData)
    axios.post(
      'http://hikmat059-001-site1.ptempurl.com/api/Tags',
      formData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    )
      .then(res => console.log('Success:', res.data))
      .catch(err => console.error('Errorum:', err));
  };

  return (
    <>
      <div
        onClick={() => { setShowForm(false) }}
        className={`${showForm ? 'flex fixed' : 'hidden'} top-0 z-10 justify-center items-center bg-black/80 h-[100vh] w-[100%]`}>
        <div
          onClick={(e) => { e.stopPropagation() }}
          className='w-[40%] z-20 h-[90vh] border-white border-2 relative bg-black rounded-sm'>
          <IoIosClose
            onClick={() => { setShowForm(false) }}
            className='text-[3em] cursor-pointer absolute top-[10px] right-[10px] text-white' />
          <form
            onSubmit={handleSubmit}
            className='text-white text-[1.2em] pt-[40px] w-[90%] mx-auto'>
            <label htmlFor="tag">Tag</label>
            <input
              onChange={(e) => { setTag(e.target.value) }}
              type="text"
              name="tag"
              id="tag"
              value={tag} // Control the input field
              placeholder='Tag'
              className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white '
            />
            <button
              className='w-[100%] font-bold cursor-pointer p-[10px] my-[10px] rounded-sm text-black bg-white '
              type='submit'>
              Add Tag
            </button>
          </form>
        </div>
      </div>
      <p className='text-[2em] text-center pt-[30px] font-bold underline'>Tags Data</p>
      <button
        onClick={() => { setShowForm(true) }}
        className='ml-[30px] border-2 cursor-pointer hover:bg-gray-300 transition-all duration-300 border-white p-[5px] rounded-md text-[1.2em] font-[500]'>
        Add new Tag
      </button>
      <table className='w-[96%] mx-auto border-2 border-white mt-[30px]'>
        <thead>
          <tr>
            <th className='py-[10px] border-2 border-white'>#</th>
            <th className='py-[10px] border-2 border-white'>Tag</th>
            <th className='py-[10px] border-2 border-white'>TagId</th>
            <th className='py-[10px] border-2 border-white'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Array(10).fill('ayan').map((item, i) => {
              return <tr key={i}>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 1}</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>Baking</td>
                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 6}</td>
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
  );
}

export default Tag;
