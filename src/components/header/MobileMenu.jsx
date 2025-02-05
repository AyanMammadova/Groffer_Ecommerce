import React, { useContext, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { DATA } from '../../context/DataContext'
import { Link } from 'react-router-dom'

function MobileMenu({ showMobileMenu }) {
  const { menuData } = useContext(DATA)
  const [menu, setMenu] = useState(menuData)
  function HandleSubs(name) {
    setMenu(
      menu.map(item =>
        item.catname == name ? { ...item, show: !item.show } : { ...item, show: false }
      )
    )
  }
  return (
    <>
      <div className="relative md:hidden ">
        <div
          className={`bg-white shadow-xl  w-full transition-all duration-500 overflow-hidden ${showMobileMenu ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='font-[600] px-[20px] text-[1.4em]'>
            {
              menu && menu.map((item, i) => {
                return <div key={i} className='relative border-b-[1px] border-gray-100 py-[10px]'>
                  <p className='flex w-[100%] justify-between'>
                    <Link to={`/${item.slug}`}>{item.catname}</Link>
                    <IoIosArrowDown 
                    className={`${item.Subcategory ? 'block' : 'hidden'}`} 
                    onClick={() => { HandleSubs(item.catname) }} />
                  </p>
                  <ul className={`${item.show ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 overflow-hidden pl-[20px]`}>
                    {
                      item.Subcategory?.map((subitem, subi) => {
                        return <Link to={`/${subitem.slug}`} className='hover:bg-gray-200 block py-[5px] px-[10px] w-[100%]' key={subi}>{subitem.name}</Link>
                      })
                    }

                  </ul>
                </div>
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
