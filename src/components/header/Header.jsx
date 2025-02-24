import Aos from 'aos'
import React, { useContext, useEffect, useState } from 'react'
import { FaMagnifyingGlass, FaPhone } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TfiMenu } from 'react-icons/tfi'
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import LoginPopUp from '../login/LoginPopUp'
import QuickView from '../main/QuickView'
import { DATA } from '../../context/DataContext'
import { IoCloseSharp } from 'react-icons/io5'
import { BASKET } from '../../context/BasketContext'
import { ImEye } from 'react-icons/im'
import SearchElement from './SearchElement'
import apiInstance from '../../services/axiosInstance'
import Categories from './Categories'

function Header() {
    const userName = localStorage.getItem("userName")
    const loginfinished = localStorage.getItem('loginfinished')
    const { basketData, removeFromBasket, totalAmount } = useContext(BASKET)
    const pathname = useLocation().pathname
    const { showQuick, setShowQuick, menuData } = useContext(DATA)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const loginisover = localStorage.getItem("loginisover")

    const handleLogout = () => {
        apiInstance.post(
            'Auth/logout',
            null,
            {
                headers: {
                    'accept': '*/*',
                },
            }
        )
            .then(res => {
                localStorage.clear()
                window.location.href = '/';
            })
            .catch(err => {
                console.error('Logout error:', err.response ? err.response.data : err.message);
                alert('Logout failed. Please try again.');
            });
    };
    useEffect(() => {
        Aos.init();
    }, []);
    useEffect(() => {
        setShowLogin(false)
        setShowMobileMenu(false)
    }, [pathname])

    return (
        <>
            <div
                onClick={() => { setShowLogin(false) }}
                className={`${showLogin ? 'fixed' : 'hidden'} w-[100%] h-[100vh]  flex justify-center items-center top-0 right-0 bg-black/80 z-50`}>
                <div className='w-[100%] mx-auto' >
                    <LoginPopUp />
                </div>
            </div>
            <div
                onClick={() => { setShowQuick(false) }}
                className={`${showQuick ? 'fixed' : 'hidden'} w-[100%] h-[100vh]  flex justify-center items-center top-0 right-0 bg-black/80 z-50`}>
                <div className=' w-[80%] h-[96vh] mx-auto  bg-white ' onClick={(e) => { e.stopPropagation() }}>
                    <QuickView type={'quick'} />
                </div>
            </div>
            <div className='flex font-space-grotesk bg-white z-20 justify-between p-[10px] md:pl-[40px] md:pr-[70px] items-center'>
                <div className='flex items-center  gap-[30px]'>
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="60" viewBox="0 0 340 80" fill="none">
                            <path d="M28.8 77.4C24 77.4 19.6333 76.3333 15.7 74.2C11.8333 72 8.73333 68.8333 6.4 64.7C4.13333 60.5 3 55.4 3 49.4V32.6C3 23.6 5.53333 16.7 10.6 11.9C15.6667 7.03333 22.5333 4.59999 31.2 4.59999C39.8 4.59999 46.4333 6.89999 51.1 11.5C55.8333 16.0333 58.2 22.2 58.2 30V30.4H45.2V29.6C45.2 27.1333 44.6667 24.9 43.6 22.9C42.6 20.9 41.0667 19.3333 39 18.2C36.9333 17 34.3333 16.4 31.2 16.4C26.5333 16.4 22.8667 17.8333 20.2 20.7C17.5333 23.5667 16.2 27.4667 16.2 32.4V49.6C16.2 54.4667 17.5333 58.4 20.2 61.4C22.8667 64.3333 26.6 65.8 31.4 65.8C36.2 65.8 39.7 64.5333 41.9 62C44.1 59.4667 45.2 56.2667 45.2 52.4V51.4H28.6V40.2H58.2V76H46V69.3H44.2C43.7333 70.4333 42.9667 71.6333 41.9 72.9C40.9 74.1667 39.3667 75.2333 37.3 76.1C35.2333 76.9667 32.4 77.4 28.8 77.4Z" fill="#136450"></path>
                            <path d="M68.2109 76V26.4H80.6109V32H82.4109C83.1443 30 84.3443 28.5333 86.0109 27.6C87.7443 26.6667 89.7443 26.2 92.0109 26.2H98.0109V37.4H91.8109C88.6109 37.4 85.9776 38.2667 83.9109 40C81.8443 41.6667 80.8109 44.2667 80.8109 47.8V76H68.2109Z" fill="#136450"></path>
                            <path d="M187.231 76V36.8H174.631V26.4H187.231V17.2C187.231 13.8 188.231 11.1 190.231 9.1C192.298 7.03333 194.965 5.99999 198.231 5.99999H211.231V16.4H202.631C200.765 16.4 199.831 17.4 199.831 19.4V26.4H209.831V36.8H199.831V76H187.231ZM219.831 76V36.8H209.831V26.4H219.831V17.2C219.831 13.8 220.831 11.1 222.831 9.1C224.898 7.03333 227.565 5.99999 230.831 5.99999H243.831V16.4H235.231C233.365 16.4 232.431 17.4 232.431 19.4V26.4H245.431V36.8H232.431V76H219.831Z" fill="#136450"></path>
                            <path d="M275.241 77.4C270.307 77.4 265.941 76.3667 262.141 74.3C258.407 72.1667 255.474 69.2 253.341 65.4C251.274 61.5333 250.241 57 250.241 51.8V50.6C250.241 45.4 251.274 40.9 253.341 37.1C255.407 33.2333 258.307 30.2667 262.041 28.2C265.774 26.0667 270.107 25 275.041 25C279.907 25 284.141 26.1 287.741 28.3C291.341 30.4333 294.141 33.4333 296.141 37.3C298.141 41.1 299.141 45.5333 299.141 50.6V54.9H263.041C263.174 58.3 264.441 61.0667 266.841 63.2C269.241 65.3333 272.174 66.4 275.641 66.4C279.174 66.4 281.774 65.6333 283.441 64.1C285.107 62.5667 286.374 60.8667 287.241 59L297.541 64.4C296.607 66.1333 295.241 68.0333 293.441 70.1C291.707 72.1 289.374 73.8333 286.441 75.3C283.507 76.7 279.774 77.4 275.241 77.4ZM263.141 45.5H286.341C286.074 42.6333 284.907 40.3333 282.841 38.6C280.841 36.8667 278.207 36 274.941 36C271.541 36 268.841 36.8667 266.841 38.6C264.841 40.3333 263.607 42.6333 263.141 45.5Z" fill="#136450"></path>
                            <path d="M307.355 76V26.4H319.755V32H321.555C322.289 30 323.489 28.5333 325.155 27.6C326.889 26.6667 328.889 26.2 331.155 26.2H337.155V37.4H330.955C327.755 37.4 325.122 38.2667 323.055 40C320.989 41.6667 319.955 44.2667 319.955 47.8V76H307.355Z" fill="#136450"></path>
                            <path d="M164.125 27.9766C166.148 30.8672 167.546 34.3841 168.316 38.5273C169.087 42.6706 169.087 46.8138 168.316 50.957C167.738 54.2331 166.823 57.3164 165.57 60.207C164.414 63.0013 162.872 65.651 160.945 68.1562C159.115 70.6615 156.802 72.6367 154.008 74.082C151.214 75.5273 148.13 76.25 144.758 76.25C142.831 76.25 140.807 75.6719 138.688 74.5156C137.242 73.7448 135.797 73.7448 134.352 74.5156C132.232 75.6719 130.208 76.25 128.281 76.25C124.909 76.25 121.826 75.5273 119.031 74.082C116.237 72.6367 113.876 70.6615 111.949 68.1562C110.118 65.651 108.577 63.0013 107.324 60.207C106.168 57.3164 105.301 54.2331 104.723 50.957C103.952 46.8138 103.952 42.6706 104.723 38.5273C105.493 34.3841 106.891 30.8672 108.914 27.9766C111.612 24.026 115.129 21.6654 119.465 20.8945C121.103 20.7018 122.982 20.75 125.102 21.0391C127.318 21.3281 129.341 21.7617 131.172 22.3398C133.099 22.918 134.882 23.5924 136.52 24.3633C139.121 23.207 142.012 22.2435 145.191 21.4727C148.467 20.7018 151.262 20.5091 153.574 20.8945C157.91 21.6654 161.427 24.026 164.125 27.9766ZM161.523 49.8008C162.102 46.5247 162.102 43.2487 161.523 39.9727C160.945 36.6966 159.934 33.9987 158.488 31.8789C156.85 29.5664 154.779 28.2174 152.273 27.832C151.021 27.543 148.949 27.7357 146.059 28.4102C143.264 28.9883 140.085 30.2409 136.52 32.168C132.954 30.2409 129.727 28.9883 126.836 28.4102C124.042 27.7357 122.018 27.543 120.766 27.832C118.26 28.2174 116.189 29.5664 114.551 31.8789C113.105 33.9987 112.094 36.6966 111.516 39.9727C110.938 43.2487 110.938 46.5247 111.516 49.8008C111.708 50.7643 111.949 51.8724 112.238 53.125C112.527 54.2812 113.105 55.9193 113.973 58.0391C114.936 60.0625 115.996 61.8451 117.152 63.3867C118.309 64.9284 119.85 66.2773 121.777 67.4336C123.801 68.6862 125.969 69.3125 128.281 69.3125C129.052 69.3125 130.016 69.0234 131.172 68.4453C132.81 67.4818 134.592 67 136.52 67C138.447 67 140.229 67.4818 141.867 68.4453C143.023 69.0234 143.987 69.3125 144.758 69.3125C147.07 69.3125 149.19 68.6862 151.117 67.4336C153.141 66.2773 154.73 64.9284 155.887 63.3867C157.043 61.8451 158.055 60.0625 158.922 58.0391C159.885 55.9193 160.512 54.2812 160.801 53.125C161.09 51.8724 161.331 50.7643 161.523 49.8008ZM136.23 18.4375L134.352 18.293C134.255 18.1003 134.207 17.8112 134.207 17.4258C134.207 17.0404 134.207 16.3177 134.207 15.2578C134.303 14.1016 134.448 13.0417 134.641 12.0781C134.833 11.1146 135.171 10.0547 135.652 8.89844C136.23 7.64583 136.905 6.58594 137.676 5.71875C140.085 3.40625 143.65 2.25 148.371 2.25L150.25 2.39453C150.25 2.39453 150.25 2.49089 150.25 2.68359C150.346 2.77995 150.395 3.02083 150.395 3.40625C150.395 3.79167 150.395 4.22526 150.395 4.70703C150.395 5.09245 150.346 5.57422 150.25 6.15234C150.25 6.73047 150.202 7.30859 150.105 7.88672C150.009 8.46484 149.865 9.09115 149.672 9.76562C149.479 10.3438 149.238 10.9219 148.949 11.5C148.757 12.0781 148.467 12.7044 148.082 13.3789C147.793 13.957 147.408 14.487 146.926 14.9688C144.517 17.2812 140.952 18.4375 136.23 18.4375Z" fill="#136450"></path>
                        </svg>
                    </Link>
                    <SearchElement />
                </div>
                <div className='flex gap-[20px] items-center'>
                    <div

                        className='flex  '>
                        <div className='relative group bg-green-300 cursor-pointer'>
                            <div
                                onClick={() => {
                                    loginfinished ? ' ' : setShowLogin(true)
                                }}
                                className='absolute -top-[10px] right-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none">
                                    <path d="M12.5335 15.2032C12.5627 15.2032 12.5919 15.2032 12.627 15.2032C12.6387 15.2032 12.6503 15.2032 12.662 15.2032C12.6796 15.2032 12.7029 15.2032 12.7205 15.2032C14.4324 15.174 15.8172 14.5722 16.8397 13.4211C19.0892 10.8853 18.7153 6.5382 18.6744 6.12335C18.5283 3.00909 17.0559 1.51915 15.8406 0.823848C14.9349 0.303831 13.8773 0.0233716 12.6971 0H12.6562C12.6503 0 12.6386 0 12.6328 0H12.5978C11.9492 0 10.6754 0.105172 9.45427 0.800476C8.22727 1.49578 6.73149 2.98572 6.58541 6.12335C6.54451 6.5382 6.17057 10.8853 8.42008 13.4211C9.43675 14.5722 10.8215 15.174 12.5335 15.2032ZM8.14547 6.26942C8.14547 6.2519 8.15131 6.23437 8.15131 6.22268C8.34412 2.03333 11.3182 1.58342 12.5919 1.58342H12.6153C12.627 1.58342 12.6445 1.58342 12.662 1.58342C14.2396 1.61848 16.9215 2.2612 17.1026 6.22268C17.1026 6.24021 17.1026 6.25774 17.1085 6.26942C17.1143 6.31032 17.5233 10.2835 15.6653 12.3752C14.9291 13.2049 13.9475 13.6139 12.6562 13.6256C12.6445 13.6256 12.6387 13.6256 12.627 13.6256C12.6153 13.6256 12.6094 13.6256 12.5978 13.6256C11.3123 13.6139 10.3249 13.2049 9.5945 12.3752C7.74231 10.2952 8.13962 6.30448 8.14547 6.26942Z" fill="#000" />
                                    <path d="M24.6343 22.4133C24.6343 22.4075 24.6343 22.4016 24.6343 22.3958C24.6343 22.349 24.6285 22.3023 24.6285 22.2497C24.5935 21.0928 24.5175 18.3876 21.9817 17.5228C21.9641 17.517 21.9408 17.5111 21.9232 17.5053C19.2881 16.8334 17.097 15.3142 17.0736 15.2967C16.7172 15.0454 16.2264 15.1331 15.9752 15.4895C15.7239 15.8459 15.8116 16.3367 16.168 16.588C16.2673 16.6581 18.5928 18.2765 21.5026 19.0244C22.864 19.5094 23.0159 20.9643 23.0568 22.2965C23.0568 22.349 23.0568 22.3958 23.0626 22.4425C23.0685 22.9684 23.0334 23.7806 22.9399 24.248C21.9934 24.7855 18.2831 26.6436 12.6389 26.6436C7.01802 26.6436 3.28441 24.7797 2.33202 24.2421C2.23853 23.7747 2.19763 22.9625 2.20932 22.4367C2.20932 22.3899 2.21516 22.3432 2.21516 22.2906C2.25606 20.9584 2.40797 19.5036 3.76937 19.0186C6.67913 18.2707 9.0046 16.6464 9.10393 16.5821C9.46035 16.3309 9.54799 15.8401 9.29675 15.4836C9.0455 15.1272 8.5547 15.0396 8.19828 15.2908C8.17491 15.3084 5.99551 16.8275 3.34868 17.4994C3.32531 17.5053 3.30778 17.5111 3.29025 17.517C0.754435 18.3876 0.678477 21.0928 0.64342 22.2439C0.64342 22.2965 0.643419 22.3432 0.637577 22.3899C0.637577 22.3958 0.637577 22.4016 0.637577 22.4075C0.631734 22.7113 0.625891 24.2714 0.935564 25.0543C0.993993 25.2062 1.09917 25.3348 1.2394 25.4224C1.41468 25.5393 5.61572 28.2153 12.6447 28.2153C19.6737 28.2153 23.8748 25.5334 24.0501 25.4224C24.1844 25.3348 24.2955 25.2062 24.3539 25.0543C24.646 24.2772 24.6402 22.7171 24.6343 22.4133Z" fill="#000" />
                                </svg>
                            </div>
                            <div className={`absolute ${userName ? 'hidden' : 'block'} w-[150px] top-[20px] bg-white  -right-[20px] z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  rounded-md shadow-xl`}>
                                <Link className='hover:bg-gray-200 w-[100%] px-[20px] block py-[10px] text-start' to={'/my-account'}>Go to Login</Link>

                            </div>
                            <div className={`absolute ${userName ? 'block' : 'hidden'} w-[150px] top-[20px] bg-white  -right-[20px] z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  rounded-md shadow-xl`}>
                                <Link className='hover:bg-gray-200 w-[100%] px-[20px] block py-[10px] text-start capitalize' to={'/my-account'}> {userName} </Link>
                                <button
                                    onClick={() => { handleLogout() }}
                                    className='hover:bg-gray-200 w-[100%] px-[20px] py-[10px] text-start' >
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex hidden relative group  items-center gap-[10px]'>
                        <div className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
                                <path d="M23.9336 8.84991H1.5664C1.25376 8.84991 1 9.10362 1 9.41626V26.0648C1 28.251 2.77842 30.0294 4.96468 30.0294H20.5354C22.7216 30.0294 24.5 28.251 24.5 26.0648V9.41626C24.5 9.10362 24.2462 8.84991 23.9336 8.84991ZM23.3673 26.0648C23.3673 27.6269 22.0974 28.8966 20.5354 28.8966H4.96468C3.40259 28.8966 2.1328 27.6268 2.1328 26.0648V9.98266H23.3673V26.0648Z" fill="#000" stroke="#000" strokeWidth="0.7" />
                                <path d="M12.7496 1C9.62662 1 7.08582 3.5408 7.08582 6.66382V12.8146C7.08582 13.1272 7.33957 13.3809 7.65221 13.3809C7.96486 13.3809 8.21861 13.1272 8.21861 12.8146V6.66382C8.21861 4.16497 10.2508 2.1328 12.7496 2.1328C15.2485 2.1328 17.2807 4.16497 17.2807 6.66382V12.8146C17.2807 13.1272 17.5344 13.3809 17.8471 13.3809C18.1597 13.3809 18.4135 13.1272 18.4135 12.8146V6.66382C18.4135 3.5408 15.8727 1 12.7496 1Z" fill="#000" stroke="#000" strokeWidth="0.7" />
                                <path d="M7.65251 12.2482C6.7157 12.2482 5.95337 13.0106 5.95337 13.9474C5.95337 14.8842 6.7157 15.6465 7.65251 15.6465C8.58932 15.6465 9.35165 14.8842 9.35165 13.9474C9.35165 13.0106 8.58932 12.2482 7.65251 12.2482ZM7.65251 14.5137C7.34098 14.5137 7.08611 14.2588 7.08611 13.9473C7.08611 13.6358 7.34098 13.3809 7.65251 13.3809C7.96404 13.3809 8.21891 13.6358 8.21891 13.9473C8.21891 14.2588 7.96404 14.5137 7.65251 14.5137Z" fill="#000" />
                                <path d="M17.8473 12.2482C16.9105 12.2482 16.1482 13.0106 16.1482 13.9474C16.1482 14.8842 16.9105 15.6465 17.8473 15.6465C18.7841 15.6465 19.5465 14.8842 19.5465 13.9474C19.5465 13.0106 18.7841 12.2482 17.8473 12.2482ZM17.8473 14.5137C17.5358 14.5137 17.2809 14.2588 17.2809 13.9473C17.2809 13.6358 17.5358 13.3809 17.8473 13.3809C18.1589 13.3809 18.4137 13.6358 18.4137 13.9473C18.4137 14.2588 18.1589 14.5137 17.8473 14.5137Z" fill="#000" />
                            </svg>
                            <div className='absolute -top-[7px] -right-[7px] h-[20px] w-[20px] flex items-center justify-center text-white text-[.7em] rounded-full bg-[#136450] '>
                                <p>{basketData ? basketData?.length : 0}</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>My Cart</p>
                            <p>€0.00</p>
                        </div>
                        <div className='bg-white border-[1px] border-gray-200  shadow-md w-[300px] py-[20px] right-0 flex flex-col justify-center items-center -z-10 top-[100px] opacity-0  absolute transition-all duration-400 group-hover:opacity-100  group-hover:top-[42px]   group-hover:z-50'>
                            {
                                basketData && basketData.map((item, i) => {
                                    return <Link key={i} to={`/details/${item?.product?.id}`} className='w-[100%]  group relative'>
                                        <div className=' border-b-[1px] py-[10px] border-gray-200  px-[10px] flex gap-[10px] justify-between w-[100%]'>
                                            <div className='flex '>
                                                <div className='h-[100px] relative'>
                                                    <div className='absolute group-hover:flex top-0 right-0 h-[100%] w-[100%] bg-white/20 hidden items-center justify-center'><ImEye /></div>

                                                    {
                                                        item?.product?.primaryImageUrl ? <img
                                                            className={`scale-100 w-[100%]  h-[100%] object-cover object-center  ease-in duration-500 block }`}
                                                            src={`https://supermarket777.blob.core.windows.net/product/${item?.product?.primaryImageUrl}`} alt={item?.product?.slug} />
                                                            : ''
                                                    }
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className=' text-black text-[1.1em]  hover:text-[#136450]'>{item.product?.name}</p>
                                                    <p className=' text-black '>{item?.quantity}x{item.product?.price?.toFixed(2)} $</p>
                                                </div>
                                            </div>
                                            <IoCloseSharp onClick={(e) => { removeFromBasket(item?.product?.id), e.preventDefault() }} className='text-[1.5em]' />
                                        </div>

                                    </Link>
                                })
                            }
                            {
                                basketData?.length>0 ? <div className='w-[100%]'>
                                    <p className='text-center font-[500] py-[10px]'>SUBTOTAL : {totalAmount.toFixed(2)} $</p>
                                <Link
                                    to={'/cart'}
                                    className='bg-[#136450]  block text-center mx-auto py-[10px] w-[90%] font-bold  rounded-sm   border-2 border-[#136450] hover:scale-105 hover:text-[#136450] text-white transition-all duration-200 hover:bg-white'>
                                    Go to Bag
                                </Link>
                                <Link
                                    to={'/checkout'}
                                    className='bg-[#136450] block text-center mx-auto  mt-[20px] w-[90%] py-[10px]  font-bold  rounded-sm   border-2 border-[#136450] hover:scale-105 hover:text-[#136450] text-white transition-all duration-200 hover:bg-white'>
                                    Checkout
                                </Link>
                                </div> : 'Nothing in basket'
                            }
                        </div>
                    </div>
                    <div
                        onClick={() => { setShowMobileMenu(!showMobileMenu) }}
                        className='block md:hidden'>
                        <RxHamburgerMenu className='text-[1.8em] mt-[4px]' />
                    </div>
                </div>


            </div>
            <MobileMenu showMobileMenu={showMobileMenu} />



            <div className='h-[1px] bg-gray-200  w-[100%]'></div>
            <div className='lg:flex hidden  font-space-grotesk justify-between h-[80px] p-[10px] md:px-[40px] items-center'>
                <div className='flex gap-[20px] items-center'>
                    <div className='group relative items-center w-[300px] justify-center gap-[20px] hidden xl:flex  py-[10px]  cursor-pointer '>
                        <TfiMenu className='text-[#136450] text-[1.5em]' />
                        <div className='flex gap-[10px] items-center'>
                            <p className='text-[1.4em] font-[500]'>Shop by Categories</p>
                            <IoIosArrowDown className='text-[1.5em]' />
                        </div>
                        <Categories />
                    </div>
                    <div className='h-[20px] hidden xl:block w-[1px] bg-gray-300'></div>

                    <div className='hidden md:block'>
                        <ul className='flex text-[1.2em] font-[500] gap-[30px] *:cursor-pointer'>
                            {
                                menuData && menuData.map((item, i) => {
                                    return <li key={i} className='relative z-40  group'>
                                        <Link to={`/${item.slug}`}>{item.catname}</Link>
                                        <div
                                            className={`${item.Subcategory ? '' : 'hidden'} hidden pt-[40px]  rounded-sm absolute top-[0px] -z-50  scale-90 transition-all duration-700 group-hover:scale-110 group-hover:block w-[150px] bg-white`}>

                                            <div className='shadow-lg'>
                                                {
                                                    item.Subcategory?.map((subitem, subi) => {
                                                        return <Link to={`/${subitem.slug}`} className='hover:bg-gray-200 block py-[5px] px-[10px] w-[100%]' key={subi}>{subitem.name}</Link>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex flex-wrap gap-[20px] items-center'>

                    <div className='w-[200px]'>
                        <Link to={'/contact'} className='bg-[#FFBA41] font-bold px-[35px] py-[10px] rounded-sm hover:text-[#136450] hover:border-2 border-[#136450] hover:scale-105 transition-all duration-200 hover:bg-white'>
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
