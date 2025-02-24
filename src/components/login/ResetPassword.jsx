import React, { useState } from 'react'
import { ResetPasswordSchemas } from '../../schemas/ResetPasswordSchemas';
import { useFormik } from 'formik';

function ResetPassword() {
  const [eye, setEye] = useState(false);
  const [confirmeye, setConfirmEye] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  function submit(values, action) {
    const userData = {
      username: values.username,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email
    };
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('confirmpassword', values.confirmpassword);

    apiInstance.post(
      'Auth/reset-password',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
      .then(res => {
        // localStorage.setItem("registerstatus", res.status);
        // localStorage.setItem("registeredemail", values.email);
        // localStorage.setItem("userData", JSON.stringify(userData));
        navigate('/submit');
      })
      .catch(err => {
        // setTimeout(() => {
        //   setMainError('User already exist, go to sign in');
        // }, 300);
        console.error('Error:', err);
      });
  }

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema: ResetPasswordSchemas,
    onSubmit: submit
  });
  return (
    <>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-[20px] py-[10px]`}>
        
        <div className='w-[90%] flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
          <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-email.svg" alt="" />
          <input
            value={values.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            type="text"
            name='email'
            className='focus:outline-hidden pl-[10px] w-[100%]'
            placeholder='Email*' />
        </div>
        {focusedField === 'email' && errors.email && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.email}</p>}

        <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
          <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
          <input
            value={values.password}
            onChange={handleChange}
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField(null)}
            type={eye ? 'text' : 'password'}
            name='password'
            className='focus:outline-hidden pl-[10px] w-[100%]'
            placeholder='Password' />
          <img
            onClick={() => { setEye(!eye) }}
            className={`${eye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
          <img
            onClick={() => { setEye(!eye) }}
            className={`${eye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
        </div>
        {focusedField === 'password' && errors.password && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.password}</p>}

        <div className='w-[90%] relative flex items-center py-[10px] px-[3px] bg-white rounded-md border-[1px] border-gray-300 mx-auto'>
          <img src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/cd-icon-password.svg" alt="" />
          <input
            value={values.confirmpassword}
            onChange={handleChange}
            onFocus={() => setFocusedField('confirmpassword')}
            onBlur={() => setFocusedField(null)}
            type={confirmeye ? 'text' : 'password'}
            name='confirmpassword'
            className='focus:outline-hidden pl-[10px] w-[100%]'
            placeholder='Confirm Password' />
          <img
            onClick={() => { setConfirmEye(!confirmeye) }}
            className={`${confirmeye ? 'absolute' : 'hidden'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-4.svg" alt="" />
          <img
            onClick={() => { setConfirmEye(!confirmeye) }}
            className={`${confirmeye ? 'hidden' : 'absolute'} right-[10px]`} src="https://groffer.modeltheme.com/wp-content/plugins/ajax-login-and-registration-modal-popup/assets/img/iconmonstr-eye-8.svg?v3" alt="" />
        </div>
        {focusedField === 'confirmpassword' && errors.confirmpassword && <p className='text-red-500 font-[500] mx-[5%] text-[.8em] -mt-[10px]'>{errors.confirmpassword}</p>}

        {/* <p className='text-center text-red-500 text-[1.3em]'>{mainError}</p> */}
        <button
          type='submit'
          className={` mx-[5%] font-[500] text-[1.4em] text-center py-[10px] rounded-md border-2 transition-all duration-200 bg-[#136450] text-white border-[#136450] hover:text-[#136450] cursor-pointer hover:bg-white`}>
          Create Account
        </button>
      </form>
    </>
  )
}

export default ResetPassword
