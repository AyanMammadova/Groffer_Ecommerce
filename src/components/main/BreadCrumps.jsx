import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumps({page}) {
    return (
        <>
            <p className='text-[1.2em] flex gap-[5px] font-[500] p-[10px] md:px-[40px]'>
                <Link to={'/'} className='txtgreen'>Home </Link>
                <span className={`${page=='details' || page=='products' ? 'block' : 'hidden'} txtgreen`}>/ Shop </span>
                <span className={`${page=='wishlist' ? 'block' : 'hidden'} txtgreen`}>/ WishList</span>
                <span className={`${page=='details' ? 'block' : 'hidden'} txtgreen`}>/ Fruit </span>
                <span className={`${page=='details' ? 'block' : 'hidden'} txtgreen`}>/ Apple </span>
                <span className={`${page=='cart' ? 'block' : 'hidden'} txtgreen`}>/ Cart </span>
            </p>
        </>
    )
}

export default BreadCrumps
