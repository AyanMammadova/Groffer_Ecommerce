import React, { createContext, useEffect, useState } from 'react'
import { getCartData } from '../services/api'
import apiInstance from '../services/axiosInstance'
export const BASKET=createContext('')
function BasketContext({children}) {
    const [basketData,setBasketData]=useState(null)
    useEffect(()=>{
      getCartData().then(res=>console.log(res.data))
    },[])


    function addToBasket(id, count) {
      console.log('Product ID:', id);
      console.log('Quantity:', count);
  
      const formData = new FormData();
      formData.append('quantity', count);
  
      apiInstance.post(`Cart/add-to-cart/${id}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      })
      .then(response => {
          console.log('Product added to cart:', response.data);
      })
      .catch(error => {
          console.error('Error adding product to cart:', error);
      });
      
  }
  
  return (
    <BASKET.Provider value={{
        basketData,
        addToBasket
    }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext
