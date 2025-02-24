import React from 'react'

function Success() {
  const storedBillingDetails = JSON.parse(localStorage.getItem("billingDetails"));
  // console.log(storedBillingDetails)
  return (
    <div className=' text-center mb-[100px] py-[50px]'>
      <img 
  src="../img/success.png" 
  className="h-[100px] mx-auto rounded-full border-[5px] border-[#6DD176] my-[20px] shadow-[0_0_20px_10px_rgba(34,197,94,0.5)]"
/>

      <p className='font-[500] text-[1.6em] px-[10px]'>
        Thank you for your order! Your payment was successfully processed. We will begin preparing your items and notify you once they are on their way. If you have any questions, feel free to contact us. Have a great day!</p>
        <p className='text-[1.3em] pt-[30px] text-start font-[500] px-[30px]'>Your Billing Information</p>
      <table className=' w-[90%] mx-[auto] mt-[20px]'>
        <thead>
          
        </thead>
          <tbody>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Billing Name</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingName}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Billing Phone</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingPhone}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Billing Email</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingEmail}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Billing Address Line 1</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingAddress.line1}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Billing Address Line 2</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingAddress.line2}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>City</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingAddress.city}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>State</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingAddress.state}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Postal Code</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingAddress.postalCode}</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black text-start p-[10px] '>Country</td>
              <td className='border-[1px] border-black text-start p-[10px] '>{storedBillingDetails.billingAddress.country}</td>
            </tr>
          </tbody>
      </table >
    </div >
  )
}

export default Success
