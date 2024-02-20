// import React from 'react'
// import BannerCard from '../home/BannerCard'
// import profileImage from '../assets/imageschool.jpg';

// const Banner = () => {
//   return (
//     <div className='px-4 lg:px-24 bg-teal-100 flex items-center bg-cover bg-center  '
//     style={{
//       backgroundImage: `url(${profileImage})`,
//     }}>
    
      
//       <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-48'>
//         {/* left side*/}
//         <div className='md:w-1/2 space-y-8 h-full  z-negative'>
//         <h1 className='text-3xl font-bold leading-snug text-[#fff] hover:text-teal-500'>Welcome To The World Of Wonders</h1>
            
//             <h2 className='text-7xl font-bold leading-snug text-[#fff] hover:text-[#076d8f] transition-colors duration-300'>Shri Krishna</h2>
// <span className='text-6xl text-blue-700 hover:text-[#fff] transition-colors duration-300'>International School</span>

//             <p className='text-[#fff] md:w-4/5'>Shri Krishna International School has a student-centered system of core values, which aligns with your values, always presenting a positive, pro-active, and caring approach.</p>
//             {/* <div>
//                 <input type="search" name="search" id="search" placeholder='Search a Book' className='py-2 px-2 rounded-s-sa outline-none'/>
//                 <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
//             </div> */}
        
//         </div>
       
        
//         {/*right side */}
//         {/* <div><BannerCard/></div> */}
//       </div>
//     </div>
//   )
// }

// export default Banner

import React from 'react';
import BannerCard from '../home/BannerCard';
import profileImage from '../assets/imageschool.jpg';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center bg-cover bg-center relative'
      style={{
        backgroundImage: `url(${profileImage})`,
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-48 relative z-10'>
        {/* left side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h1 className='text-3xl font-bold leading-snug text-[#fff] hover:text-teal-500'>Welcome To The World Of Wonders</h1>
          <h2 className='text-7xl font-bold leading-snug text-[#fff] hover:text-[#076d8f] transition-colors duration-300'>Shri Krishna</h2>
          <span className='text-6xl text-blue-700 hover:text-[#fff] transition-colors duration-300'>International School</span>
          <p className='text-[#fff] md:w-4/5'>Shri Krishna International School has a student-centered system of core values, which aligns with your values, always presenting a positive, pro-active, and caring approach.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;
