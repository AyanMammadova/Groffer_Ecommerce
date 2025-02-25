import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/01/Footer-BG.png')] bg-cover bg-start  shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] w-[100%] ">
        <div className='sm:flex font-[500] mb-[30px] px-[10px] md:mx-[30px] py-[30px] border-b-[1px] border-gray-200 justify-between flex-wrap'>
          <ul className='sm:flex flex-col sm:flex-row text-[1.3em] gap-[20px]'>
            <Link to={'/my-account'}>My Account</Link>
            <Link to={'/cart'}>Bag</Link>
            <Link to={'/wishlist'}>Wishlist</Link>
          </ul>
          <ul className='flex gap-[10px]'>
            <li><FaFacebook /></li>
            <li><FaTwitter /></li>
            <li><FaInstagram /></li>
          </ul>
        </div>
        <div className='px-[10px] md:mx-[30px] border-b-[1px] border-gray-200 lg:flex flex-wrap py-[30px] justify-around text-[1.2em]'>
          <div className='w-[95%] mx-auto lg:w-[25%] my-[20px]'>
            <img className='w-[100px] py-[10px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Groffer-Logo.svg" alt="" />
            <p className='text-gray-600 py-[20px]'>Online grocery shopping and delivery
              at Groffer. Buy fruits, bread, vegetables.</p>
            <div>
              <img src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/footer-apps-300x43.png" alt="" />
            </div>
          </div>
          <div className='w-[95%] mx-auto lg:w-[15%] my-[20px]'>
            <p className='font-[500] text-[1.2em] pb-[20px]'>Quick Links</p>
            <ul className='text-gray-600 flex flex-col'>
              <Link to={'/about'}>Our Services</Link>
              <Link to={'/about'}>About Company</Link>
              <Link >Latest News</Link>
              <Link to={'/about'}>Meet The Team</Link>
              <Link to={'/shop'}>Our Products</Link>
            </ul>
          </div>
          <div className='w-[95%] mx-auto lg:w-[15%] my-[20px]'>
            <p className='font-[500] text-[1.2em] pb-[20px]'>Account</p>
            <ul className='text-gray-600 flex flex-col'>
              <Link to={'/my-account'}>Your Account</Link>
              <Link to={'/contact'}>Shipping rates</Link>
              <Link to={'/contact'}>Refunds</Link>
              <Link to={'/order-tracking'}>Delivery info</Link>
            </ul>
          </div>
          <div className='w-[95%] mx-auto lg:w-[15%] my-[20px]'>
            <p className='font-[500] text-[1.2em] pb-[20px]'>About Us</p>
            <ul className='text-gray-600 flex flex-col'>
              <Link to={'/about'}>About Company</Link>
              <Link to={'/about'}>Our team</Link>
              <Link to={'/contact'}>Contacts</Link>
              <Link to={'/blog'}>News&Event</Link>
              <Link to={'/order-tracking'}>Order Tracking</Link>
            </ul>
          </div>
          <div className='w-[95%] mx-auto lg:w-[25%] my-[20px]'>
            <p className='text-[500] text-[1.2em] sm:text-[1.3em] font-[500] pb-[20px]'>Don’t hesitate to contact us or call !</p>
            <p className='flex gap-[10px] text-gray-600 py-[10px]'>
              <IoLocationSharp className='text-[#136450] text-[1.5em] '/> 4 Grand Central Terminal New York, NY 10 City name, CA 90896 United State USA.
            </p>
            <p className='flex  text-gray-600 gap-[10px]'>
              <MdOutlineEmail className='text-[#136450] text-[1.2em]'/> contact@example.com
            </p>
          </div>
        </div>
        <div>
          <p className='text-[1.2em] text-center py-[20px]'>Copyright by . All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
