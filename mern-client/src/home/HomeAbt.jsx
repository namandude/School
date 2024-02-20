import React from 'react'
import { Link } from 'react-router-dom';
import bookPic from '../assets/awardbooks.png'

const HomeAbt = () => {
  return (
    
<section class="weare" id="weare">
{/* <h2 className='text-3xl font-bold text-center mb-10 leading-snug'> Setting a benchmark in child-friendly education</h2> */}
<h2 className='text-4xl font-bold mb-10 leading-snug ml-20'>Setting a benchmark in child-friendly education</h2>

    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      
    <div className='flex flex-col md:flex-row justify-between items-center gap-12' style={{ marginLeft: '20px' }}>
    <div className='mt-10 md:w-1/2'>
        <h3 className='text-xl  mb-6 leading-snug'>
            Welcome to Shri Krishna International School, where boundless opportunities await! With a focus on academic excellence and holistic development, we empower students to excel both inside and outside the classroom.<br></br> Our dedicated faculty, vibrant community, and state-of-the-art facilities create an environment where students thrive and discover their passions. At Shri Krishna International School, we are committed to shaping the leaders of tomorrow. Join us and unlock your full potential!
        </h3>
        <Link to="/shop" className='block'>
            <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                Contact Us
            </button>
        </Link>
    </div>





     {/* <div className='flex flex-col md:flex-row justify-between items-cemter gap-12' >
        <div className='mt-10 md:w-1/2'>
            <h3 className='text-xl font-bold mb-6 leading-snug'>
Welcome to Shri Krishna International School, where boundless opportunities await! With a focus on academic excellence and holistic development, we empower students to excel both inside and outside the classroom. Our dedicated faculty, vibrant community, and state-of-the-art facilities create an environment where students thrive and discover their passions. At Shri Krishna International School, we are committed to shaping the leaders of tomorrow. Join us and unlock your full potential!</h3>
            <Link to="/shop" className='block'> 
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
           Contact Us
          </button>
        </Link> */}



{/*         
        </div> */}
        <div>
            <img src={bookPic} alt="" className='w-96' />

        </div>
     </div>
    </div>
    </section>
  )
}

export default HomeAbt
