import React, { createContext, useState } from 'react'
export const BASKET=createContext('')
function BasketContext({children}) {
    const [basketData,setBasketData]=useState([
        {
            id:1,
            img:'https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28-300x300.jpg',
            name: 'Broccoli and Cauliflower Mix',
            count:3,
            price:12,
        },
        {
            id:2,
            img:'https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product25-300x300.jpg',
            name: 'Cadbury Crunchie Chocolate Bar',
            count:2,
            price:8,
        }
    ])
  return (
    <BASKET.Provider value={{
        basketData
    }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext
