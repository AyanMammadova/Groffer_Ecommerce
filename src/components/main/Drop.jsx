import React from 'react'

function Drop() {
    const menuData = [
        {
          catname: "Home",
          Subcategory: [],
        },
        {
          catname: "Services",
          Subcategory: ["Web Design", "SEO", "Marketing"],
        },
        {
          catname: "Products",
          Subcategory: ["Shoes", "Clothing", "Accessories"],
        },
        {
          catname: "Contact",
          Subcategory: [],
        },
      ];
    
      return (
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex justify-center space-x-6 text-lg font-medium">
            {menuData.map((item, i) => (
              <li key={i} className="relative group">
                <p className="px-4 py-2 cursor-pointer hover:text-gray-300">
                  {item.catname}
                </p>
    
                {/* Dropdown (only if there are subcategories) */}
                {item.Subcategory.length > 0 && (
                  <ul
                    className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 rounded-md shadow-md 
                    opacity-0 scale-95 transition-all duration-300 
                    group-hover:opacity-100 group-hover:scale-100 group-hover:block"
                  >
                    {item.Subcategory.map((sub, j) => (
                      <li key={j} className="px-4 py-2 hover:bg-gray-200">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      );
    }

export default Drop
