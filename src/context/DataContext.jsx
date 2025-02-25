import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllCatsWithSubs, getAllProducts, getAllSubCategories, getAllTags, getFavorites } from '../services/api'
import apiInstance from '../services/axiosInstance'
import toast from 'react-hot-toast'
export const DATA = createContext('')
function DataContext({ children }) {
    const [role, setRole] = useState('')
    const [token, setToken] = useState(localStorage.getItem('accessToken'))
    const [categoryData, setCategoryData] = useState(null)
    const [subCategoryData, setSubCategoryData] = useState(null)
    const [allProducts, setAllProducts] = useState(null)
    const [allTags,setAllTags]=useState(null)
    const [loadingWishlist, setLoadingWislist] = useState(true)
    const [showQuick, setShowQuick] = useState(false)
    const [quickId,setQuickId]=useState(null)
    const [favoriteData, setFavoriteData] = useState([])
    const [loadingHeart,setLoadingHeart]=useState(false)
    const [shopType, setShopType] = useState('all')
    const [catsWithSubs,setCatsWithSubs]=useState(null)

    useEffect(() => {
        getAllTags().then(res=>setAllTags(res.data))
        getAllCatsWithSubs().then(res=>setCatsWithSubs(res.data.categories))
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
                    toast.success('Product removed from wishlist successfully!')
                })
                .catch(error => console.error('Error:', error))
                .finally(() => {
                    setTimeout(() => setLoadingHeart(false), 700)
                  })
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
                toast.success('Product added to wishlist successfully!')
            })
            .catch(error => console.error('Error:', error))
            .finally(() => {
                setTimeout(() => setLoadingHeart(false), 700)
              })
            
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
            slug: 'shop?searched=all',
            Subcategory: [
                { name: 'Main Shop', slug: 'shop?searched=all' },
                { name: 'My Account', slug: 'my-account' },
                { name: 'My Basket', slug: 'cart' },
                { name: 'Checkout', slug: 'checkout' },
            ],
        },
        // {
        //     catname: 'Blog',
        //     slug: '',
        //     Subcategory: [
        //         { name: 'Blog Default', slug: 'blog' },
        //         { name: 'Single Article', slug: 'blog' },
        //     ],
        // },
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
                quickId,setQuickId,
                catsWithSubs,
                allTags
            }}
        >
            {children}
        </DATA.Provider>
    )
}

export default DataContext
