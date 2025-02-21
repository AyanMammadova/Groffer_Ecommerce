import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts, getAllSubCategories, getFavorites } from '../services/api'
import apiInstance from '../services/axiosInstance'
export const DATA = createContext('')
function DataContext({ children }) {
    const [role, setRole] = useState('')
    const [token, setToken] = useState(localStorage.getItem('accessToken'))
    const [categoryData, setCategoryData] = useState(null)
    const [subCategoryData, setSubCategoryData] = useState(null)
    const [allProducts, setAllProducts] = useState(null)
    const [loadingWishlist, setLoadingWislist] = useState(true)
    const [showQuick, setShowQuick] = useState(false)
    const [quickId,setQuickId]=useState(null)
    const [favoriteData, setFavoriteData] = useState([])
    const [loadingHeart,setLoadingHeart]=useState(false)
    const [shopType, setShopType] = useState('all')

    useEffect(() => {
        getFavorites().then(res => { setFavoriteData(res.data),setLoadingWislist(false) })
        getAllProducts().then(res => setAllProducts(res.data))
        getAllCategories().then(res => setCategoryData(res.data))
        getAllSubCategories().then(res => setSubCategoryData(res.data))
    }, [])

    function handleWishlist(id, isFav) {
        setLoadingHeart(true);
        console.log('datada id : ' + id)
        isFav
            ? apiInstance.delete(
                `Wishlist/remove-from-wishlist/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(() => {
                    getFavorites().then(res => setFavoriteData(res.data))
                })
                .catch(error => console.error('Error:', error))
                .finally(() => setLoadingHeart(false))
        : apiInstance.post(
                    `Wishlist/add-to-wishlist/${id}`,
                    {},
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
            .then(() => {
                getFavorites().then(res => setFavoriteData(res.data))
            })
            .catch(error => console.error('Error:', error))
            .finally(() => setLoadingHeart(false))
            
    }


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


    const mediaImgs = [
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
                mediaImgs,
                role,
                setRole,
                categoryData,
                allProducts,
                subCategoryData,
                token,
                setToken,
                handleWishlist,
                favoriteData,
                setFavoriteData,
                shopType,
                setShopType,
                loadingHeart,
                setLoadingHeart,
                loadingWishlist, 
                setLoadingWislist,
                quickId,setQuickId
            }}
        >
            {children}
        </DATA.Provider>
    )
}

export default DataContext
