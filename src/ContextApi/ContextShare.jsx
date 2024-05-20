import React, { createContext, useState } from 'react'
export const editUserResponseContext = createContext()

function ContextShare({ children }) {
    const [editUserRes, setEditUserRes] = useState("")
    return (
        <>
            <editUserResponseContext.Provider value={{ editUserRes, setEditUserRes }}>
                {children}
            </editUserResponseContext.Provider>
        </>
    )
}

export default ContextShare