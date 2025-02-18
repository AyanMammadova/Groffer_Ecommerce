import React, { useEffect, useState } from 'react'
import BreadCrumps from '../main/BreadCrumps'

import LoginElement from './LoginElement'
import RegisterElement from './RegisterElement'
import ForgotPasswordElement from './ForgotPasswordElement'
import apiInstance from '../../services/axiosInstance'
function MyAccount() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const [fullName,setFullName]=useState('')
  const userName = localStorage.getItem("userName");
  const role = localStorage.getItem('role')
  console.log('rolum: ' + role)
  const loginfinished = localStorage.getItem('loginfinished')
  const [forgot, setForgot] = useState(false)
  const handleLogout = () => {
    apiInstance.post(
      'Auth/logout',
      null,
      {
        headers: {
          'accept': '*/*',
        },
      }
    )
      .then(res => {
        localStorage.clear()
        window.location.href = '/';
      })
      .catch(err => {
        console.error('Logout error:', err.response ? err.response.data : err.message);
        alert('Logout failed. Please try again.');
      });
  };
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      userData ? setFullName(userData?.firstname + userData?.lastname) : setFullName(userName)
      console.log(userData); 
    } else {
      console.log("No user data found");
    }
  }, [])
  return (
    <>
      <BreadCrumps page={[
        {
          name: 'My Account',
          slug: 'my-account'
        }
      ]} />
      <p className='p-[10px] sm:px-[40px] text-[2em] font-[500] border-b-[1px] border-gray-200'>My Account</p>
      {
        role ? <p className='text-[1.4em] p-[25px]'>
          Hello {role=='Admin' ? 'Admin ' : fullName }
          <button
            className='underline text-red-500 cursor-pointer'
            onClick={handleLogout}>
            Logout
          </button>
        </p> : ''
      }

      <div className={`${loginfinished ? 'hidden' : 'block'}`}>
        {
          forgot ? <div>
            <div className={`${forgot ? 'block' : 'hidden'} relative`}>
              <ForgotPasswordElement type={'page'} />
              <p onClick={() => { setForgot(false) }} className='text-[1.3em] txtgreen mx-[5%] pb-[20px] cursor-pointer'>Back to Login</p>
            </div>
          </div> : <div className='md:flex justify-center gap-[50px] w-[100%]'>
            <div className='w-[100%] md:w-[45%] '>
              <p className='text-center font-[500] pb-[20px] text-[2em]'>Login</p>
              <div className='w-[100%] relative border-[1px] border-gray-200'>
                <LoginElement type={'page'} />
                <p onClick={() => { setForgot(true) }} className='text-[1.3em] txtgreen mx-[5%] pb-[20px] cursor-pointer'>Lost Your Password?</p>
              </div>
            </div>
            <div className='w-[100%] md:w-[45%]'>
              <p className='text-center font-[500] pb-[20px] text-[2em]'>Register</p>
              <div className='w-[100%] border-[1px] border-gray-200'>
                <RegisterElement type={'page'} />
              </div>
            </div>
          </div >
        }
      </div>

    </>
  )
}

export default MyAccount
