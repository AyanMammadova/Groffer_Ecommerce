import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumps() {
    return (
        <>
            <p className='text-[1.2em] font-[500] p-[10px] md:px-[40px]'>
                <Link to={'/'} className='txtgreen'>Home /</Link>
                <span className='txtgreen'>Shop /</span>
                <span className='txtgreen'>Fruit /</span>
                <span>Apple </span>
            </p>
        </>
    )
}

export default BreadCrumps
