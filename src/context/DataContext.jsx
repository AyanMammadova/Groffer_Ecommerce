import React, { createContext, useState } from 'react'
export const DATA = createContext('')
function DataContext({children}) {
    const [showQuick, setShowQuick] = useState(false)
    return (
        <DATA.Provider
            value={{
                showQuick,
                setShowQuick
            }}
        >
            {children}
        </DATA.Provider>
    )
}

export default DataContext
