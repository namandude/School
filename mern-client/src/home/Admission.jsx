// import React, { useEffect, useState } from 'react';
// import BookCards from '../components/BookCards';

// const Admisson = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/all-books")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);  // Log the fetched data
//         setBooks(data.slice(0,8));    // Update the state with the fetched data if needed
//       })
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <BookCards books={books} headline="Best Seller Books"/>
//     </div>
//   );
// };

// export default Admisson;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FavBookImg from '../assets/imageschool.jpg';

const Admission = () => {
  return (
        
<section class="weare" id="weare">
{/* <h2 className='text-3xl font-bold text-center mb-10 leading-snug'> Setting a benchmark in child-friendly education</h2> */}
<h2 className='text-5xl font-bold text-center mb-10 leading-snug ml-20'>Admissions</h2>

    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2 h-full'>
        <img src={FavBookImg} alt="" className='rounded md:w-18/12' />
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-3xl font-bold my-5 md:w-3/4 leading-snug'>
          SHRI KRISHNA <span className='text-blue-700'>INTERNATIONAL SCHOOL </span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
        Shri Krishna International School has a student-centered system of core values, which aligns with your values, always presenting a positive, pro-active, and caring approach.


        </p>
        {/* stats */}
        <div className='flex flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>4000+</h3>
            <p className='text-base'>Students</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Staff</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>32+</h3>
            <p className='text-base'>Schools</p>
          </div>
        </div>

        <Link to="/shop" className='mt-12 block'> {/* Fix typo here: change bblock to block */}
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
    </section>
      );
};

export default Admission;
