import React, { createContext, useState } from 'react'
export const DATA = createContext('')
function DataContext({children}) {
    const [showQuick, setShowQuick] = useState(false)
   
    const menuData = [
        {
            catname: 'Home',
            slug: ' ',
        },
        {
            catname: 'About',
            slug: 'about',
        },
        {
            catname: 'Shop',
            slug: 'shop',
            Subcategory: [
                { name: 'Main Shop', slug: 'shop' },
                { name: 'Single Product', slug: 'details' },
                { name: 'My Account', slug: 'my-account' },
                { name: 'My Basket', slug: 'cart' },
                { name: 'Checkout', slug: 'checkout' },
            ],
        },
        {
            catname: 'Blog',
            slug: '',
            Subcategory: [
                { name: 'Blog Default', slug: 'blog' },
                { name: 'Single Article', slug: 'blog' },
            ],
        },
        {
            catname: 'Media',
            slug: 'media/3-columns',
            Subcategory: [
                { name: '2 columns', slug: 'media/2-columns' },
                { name: '3 columns', slug: 'media/3-columns' },
                { name: '4 columns', slug: 'media/4-columns' },
            ],
        },
        {
            catname: 'Pages',
            slug: 'pages',
            Subcategory: [
                { name: 'Contact', slug: 'contact' },
                { name: 'Wishlist', slug: 'wishlist' },
            ],
        },
    ];
    
    
    const mediaImgs=[
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog1-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2019/07/groffer_blog5-scaled-1024x683.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2019/04/groffer_blog9-scaled-1024x683.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer_blog8-scaled-1024x704.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer_blog3-1024x683.jpeg',
        'https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer_blog7-1-1024x683.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer_blog10-1024x683.jpeg',
        'https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer_blog4-scaled-1024x684.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog1-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2019/07/groffer_blog5-scaled-1024x683.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2019/04/groffer_blog9-scaled-1024x683.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2023/01/groffer_blog8-scaled-1024x704.jpg',
        
    ]
    return (
        <DATA.Provider
            value={{
                showQuick,
                setShowQuick,
                menuData,
                mediaImgs
            }}
        >
            {children}
        </DATA.Provider>
    )
}

export default DataContext
