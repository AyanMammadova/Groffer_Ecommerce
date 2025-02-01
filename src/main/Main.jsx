import React from 'react'
import { FaRegStar } from 'react-icons/fa6'

function Main() {
  return (
    <>
      <div className='relative p-[10px]   md:p-[30px] h-[60vh] lg:h-[75vh] xl:h-[80vh] font-space-grotesk'>
        <img
          className='absolute inset-0 -z-40 h-[100%]  overflow-hidden object-cover object-right'
          src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slide01-scaled.jpg" alt="" />
        <div className=' relative '>
          <div className='xs:w-[55%] '>
            <p className=' sm:text-[1.5em] lg:text-[2em] pt-[30px] font-bold'>Starting at <span className='text-[#136450]'>$22</span></p>
            <p data-aos="fade-left" className='text-[3em] sm:text-[2em] md:text-[3em] lg:text-[4em] xl:text-[5em] font-bold'>Grocery Right  <br />At Your Door</p>
            <p className='text-[.7em] md:text-[1em]'>Only this weekend for the remaining of the month</p>
            <div className='relative h-[200px] w-[150px]'>
              <button className='absolute top-[50px] bg-[#FFBA41] font-bold px-[25px] py-[10px] rounded-sm hover:text-[#136450] border-2 border-[#FFBA41] hover:border-[#136450]  transition-all duration-100 hover:bg-white'>
                <span data-aos="fade-left" data-aos-delay="">S</span>
                <span data-aos="fade-left" data-aos-delay="100">h</span>
                <span data-aos="fade-left" data-aos-delay="150">o</span>
                <span data-aos="fade-left" data-aos-delay="200">p</span>
                <span data-aos="fade-left" data-aos-delay="250"> </span>
                <span data-aos="fade-left" data-aos-delay="300">N</span>
                <span data-aos="fade-left" data-aos-delay="350">o</span>
                <span data-aos="fade-left" data-aos-delay="400">w</span>
              </button>
              <div>
                <img className='w-[100px] absolute -right-[100px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-slider1.png" alt="" />
                <img className='h-[30px] absolute -right-[40px] top-[40px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Asset-1.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='hidden sm:block'>
            <div className='xs:w-[40%] h-[100%] absolute top-0 right-0 overflow-hidden'>
              <img className='h-[80%] md:h-[90%]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-slider_pic.png" alt="" />
              <img className='h-[10vh] md:h-[15vh] lg:h-[25vh] absolute top-0 right-0 ' src="https://groffer.modeltheme.com/wp-content/uploads/2023/02/Main-absolute_veg2.png" alt="" />

            </div>
          </div>
        </div>
      </div>



      <div className=' -pt-100px md:flex gap-[30px] md:py-[50px] w-[90%] mx-auto font-space-grotesk justify-around'>
        <div className='flex flex-col w-[80%] mx-auto  items-center justify-center text-center'>
          <img className='w-[65px] sm:w-[80px] pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-about1.svg" alt="" />
          <p className='font-bold pt-[10px]'>Grown Today, <br />Delivered Tomorrow</p>
          <p className='text-gray-500 pt-[10px]'>Our organic fruit and vegetable are grown by farmers who use only natural fertilisers on their.</p>
        </div>
        <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
          <img className='w-[65px] sm:w-[80px] pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-about2.svg" alt="" />
          <p className='font-bold pt-[10px]'>Not Your Average <br />Grocery Delivery</p>
          <p className='text-gray-500 pt-[10px]'>Save yourself time, money and a bit of sanity with these easy and affordable grocery delivery.</p>
        </div>
        <div className='flex flex-col w-[80%] mx-auto items-center justify-center text-center'>
          <img className='w-[65px] sm:w-[80px] pt-[20px] hover:scale-105 transition-all duration-100' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main-about3.svg" alt="" />
          <p className='font-bold pt-[10px]'>Your Favorites on <br />Autopilot</p>
          <p className='text-gray-500 pt-[10px]'>Put healthy eating on autopilot with mix the vegetables, fruits and other organic produce.</p>
        </div>
      </div>

      <div className='h-[1px] w-[95%] mx-[auto] bg-gray-300 my-[30px]'></div>

      {/* Top Categories */}
      <div className='p-[30px]'>
        <p className='text-center font-bold text-[2.4em] pb-[30px]'>Top Categories</p>

        <div className='md:flex gap-[30px]'>
          <div className='w-[90%] sm:w-[80%] pt-[20px] mx-auto md:w-[350px] '>
            <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-bann_categ1.jpg')] gap-[6px] rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[400px] flex items-center justify-center text-white flex-col">
              <p className='text-[2em] font-[500]'>Paleo</p>
              <p>9 products</p>
              <div className='w-[55%] rounded-lg text-[.9em] py-[10px] flex flex-col items-center justify-center border-[1px] border-white'>
                <p className='font-[500] md:text-[1.4em] text-center'>View All Items</p>
              </div>
            </div>
          </div>

          <div className=' pt-[20px] mx-auto gap-[10px] sm:gap-[30px] grid grid-cols-2  lg:grid-cols-4'>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product28.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>



          </div>

        </div>
      </div>
      <div className='p-[30px]'>

        <div className='md:flex gap-[30px]'>
          <div className='w-[90%] md:order-3 sm:w-[80%] pt-[20px] mx-auto md:w-[350px] '>
            <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/02/Groffer-bann_categ1.jpg')] gap-[6px] rounded-tl-3xl rounded-br-3xl bg-cover w-[100%] h-[400px] flex items-center justify-center text-white flex-col">
              <p className='text-[2em] font-[500]'>Vegan</p>
              <p>9 products</p>
              <div className='w-[55%] rounded-lg text-[.9em] py-[10px] flex flex-col items-center justify-center border-[1px] border-white'>
                <p className='font-[500] md:text-[1.4em] text-center'>View All Items</p>
              </div>
            </div>
          </div>
          <div className=' pt-[20px] mx-auto gap-[10px] sm:gap-[30px] grid grid-cols-2  lg:grid-cols-4'>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product11-400x400.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product11-400x400.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product11-400x400.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>
            <div className='w-[100%] relative transition-all duration-200 border-[1px] border-white hover:border-[#ffba41]  h-[400px]  rounded-tl-3xl rounded-br-3xl shadow-[0_0px_20px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]'>
              <img className='h-[50%] mt-[20px] mx-auto object-cover px-[7px] sm:px-[15px]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Angro-Product11-400x400.jpg" alt="" />
              <div>
                <div className='flex p-[10px] '>
                  <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <p className='px-[10px] text-[1.1em] font-bold'>Broccoli and Cauliflower Mix</p>
                <p className='text-[#216D5A] px-[10px] font-bold pt-[20px]'>$12.00</p>
                <p className='px-[10px] '>per Kilogram</p>
              </div>
              <div className='absolute group bg-[#ffba41] pl-[15px] transition-all duration-200 pb-[15px] p-[5px] rounded-bl-2xl top-0 right-0 hover:bg-[#136450] text-white'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className='group-hover:fill-white ' stroke="none"> <path d="M2425 5114 c-312 -48 -544 -166 -745 -381 -144 -154 -238 -326 -287 -528 l-26 -103 -331 -4 c-311 -4 -335 -6 -396 -27 -161 -55 -289 -186 -334 -341 -15 -51 -306 -3129 -306 -3235 0 -163 117 -349 269 -429 135 -70 -31 -66 2291 -66 2290 0 2153 -3 2278 58 67 33 159 115 201 181 41 64 70 150 77 230 7 89 -279 3183 -302 3261 -47 160 -180 293 -344 346 -46 14 -107 18 -386 22 l-331 4 -26 103 c-108 440 -461 784 -907 886 -83 19 -327 33 -395 23z m369 -369 c243 -71 431 -224 540 -440 27 -55 76 -184 76 -202 0 -1 -383 -3 -851 -3 -736 0 -850 2 -846 14 3 8 11 34 17 58 21 77 89 202 154 283 132 165 334 281 546 315 96 16 265 4 364 -25z m-1444 -1262 c0 -239 2 -272 19 -308 22 -48 44 -69 96 -91 73 -30 162 2 203 74 21 38 22 49 22 316 l0 276 870 0 870 0 0 -276 c0 -267 1 -278 22 -316 41 -72 130 -104 203 -74 52 22 74 43 96 91 17 36 19 69 19 308 l0 267 304 0 c299 0 304 0 337 -23 45 -30 77 -80 84 -130 3 -23 68 -730 145 -1571 113 -1228 138 -1535 130 -1562 -16 -48 -48 -84 -94 -105 -39 -18 -117 -19 -2116 -19 -1999 0 -2077 1 -2116 19 -46 21 -78 57 -94 105 -8 27 17 334 130 1562 77 841 142 1548 145 1571 7 50 39 100 84 130 33 23 38 23 337 23 l304 0 0 -267z"></path></g></svg>
              </div>
            </div>

          </div>


        </div>
      </div>

      {/* Fruit Box */}

      <div className="bg-[url('https://groffer.modeltheme.com/wp-content/uploads/2023/01/Deal-BG.jpg?id=8638')] mt-[40px] gap-[6px] bg-left min-h-[60vh] bg-cover w-[100%]  sm:flex items-center justify-around">
        <div className='sm:w-[50%]'>
          <img className='w-[100%]' src="https://groffer.modeltheme.com/wp-content/uploads/2023/01/Main_Deal-Banner.png" alt="" />
        </div>
        <div className='text-center sm:w-[50%] md:p-[40px]'>
          <p className='text-[#DEA455] font-bold text-[1.3em]'>Special Offer </p>
          <p className='text-[2em] md:text-[3em] font-bold'>Organic Fruit Box</p>
          <p className='text-[1.1em] px-[10px]'>Organic foods are the only source which we can rely on to take proper health care. Organic food is the most nutritious food and should be consumed by everyone.</p>
          <p className='text-[#136450]'>-178 days </p>
          <div className='w-[250px] h-[60px] mx-auto mt-[20px]'>
            <button className='bg-[#FFBA41] font-bold px-[35px] py-[10px] rounded-sm hover:text-[#136450] hover:border-2 border-[#136450] hover:scale-105 transition-all duration-100 hover:bg-white'>View All Details</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
