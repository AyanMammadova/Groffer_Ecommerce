import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function BreadCrumps({page}) {
    useEffect(()=>{
        
    },[page])
    return (
        <>
            <p className='text-[1.2em] flex gap-[5px] font-[500] p-[10px] md:px-[40px]'>
                <Link to={'/'} className='txtgreen'>Home </Link>
                {
                    page && page.map((item,i)=>{
                        return <Link key={i} to={`/${item.slug}`} className={` txtgreen`}>/ {item.name}</Link>
                    })
                }
            </p>
        </>
    )
}

export default BreadCrumps
