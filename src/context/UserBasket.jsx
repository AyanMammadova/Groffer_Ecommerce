import React, { createContext } from 'react'
export const USER=createContext('')
function UserBasket({children}) {
  return (
    <USER.Provider value={{
        
    }}>
      {children}
    </USER.Provider>
  )
}

export default UserBasket
