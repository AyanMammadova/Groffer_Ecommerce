import React from 'react'
import BreadCrumps from './BreadCrumps'

function Blog() {
    return (
        <>
            <BreadCrumps page={[
                {
                    name: 'Blog',
                    slug: 'blog'
                }
            ]} />
            <p className='p-[10px] md:px-[40px] border-b-[1px] border-gray-200 font-[500] text-[2em] '>Blog</p>
            
            <div className='p-[10px] mb-[30px] pt-[20px] md:px-[40px]'>
                
            </div>
        </>
    )
}

export default Blog
