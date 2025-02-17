import React, { useContext } from 'react'
import LoginElement from '../components/login/LoginElement'
import { DATA } from '../context/DataContext'

function AdminLogin() {
    const { role, setRole } = useContext(DATA)
    return (
        <>
            {/* {
                role == 'Admin' ? '' : <div className='fixed flex flex-col items-center justify-center bg-black/90 top-0 w-[100%] h-[100vh]'>
                    <p>Login to Acces Admin Panel (Admins only)</p>
                    <LoginElement />
                </div>
            } */}
        </>
    )
}

export default AdminLogin
