import React, { createContext, useEffect, useState } from 'react'
import { getCartData } from '../services/api'
import apiInstance from '../services/axiosInstance'
import toast from 'react-hot-toast'
export const BASKET = createContext('')
function BasketContext({ children }) {
  const [basketData, setBasketData] = useState(null)
  const [totalAmount, setTotalAmount] = useState(0)
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    getCartData().then(res => {
      setBasketData(res.data)
      setTotalAmount(res?.data.reduce((total, item) => {
        return total + (item.product?.price * item.quantity); // Multiply price by quantity and accumulate the total
      }, 0));


    })

  }, [])

  function removeFromBasket(id) {
    setLoading(true)
    apiInstance.delete(`Cart/remove-from-cart/${id}`, {
      headers: {
        'Accept': '*/*',
      },
    })
      .then(response => {
        getCartData().then(res => setBasketData(res.data))
        setTotalAmount(basketData?.reduce((total, item) => {
          return total + (item.product?.price * item.quantity);
        }, 0));
        console.log('Product removed from cart:', response.data);
      })
      .catch(error => {
        console.error('Error removing prod cart:', error);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 700)
      })
    toast.success('{Product removed from basket}')
  }

  function addToBasket(id, count=1) {
    setLoading(true)
    const formData = new FormData();
    formData.append('quantity', count);
    apiInstance.post(`Cart/add-to-cart/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        getCartData().then(res => setBasketData(res.data))
        console.log('Product added to cart:', response.data);
        toast.success('Product added to basket')
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 700)
      })
      

  }

  return (
    <BASKET.Provider value={{
      basketData,
      addToBasket,
      removeFromBasket,
      totalAmount,
      loading
    }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext
