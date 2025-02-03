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
                { name: 'Main Shop', slug: 'main-shop' },
                { name: 'Single Product', slug: 'single-product' },
                { name: 'My Account', slug: 'my-account' },
                { name: 'My Basket', slug: 'bag' },
                { name: 'Checkout', slug: 'checkout' },
            ],
        },
        {
            catname: 'Blog',
            slug: 'blog',
            Subcategory: [
                { name: 'Blog Default', slug: 'blog-default' },
                { name: 'Single Article', slug: 'single-article' },
            ],
        },
        {
            catname: 'Media',
            slug: 'media',
            Subcategory: [
                { name: '2 columns', slug: '2-columns' },
                { name: '3 columns', slug: '3-columns' },
                { name: '4 columns', slug: '4-columns' },
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
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog2-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog3-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog4-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog5-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog6-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog7-scaled-1024x790.jpg',
        'https://groffer.modeltheme.com/wp-content/uploads/2020/09/groffer_blog8-scaled-1024x790.jpg',
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
