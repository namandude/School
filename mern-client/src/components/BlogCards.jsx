
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import icons
import {FaStar} from "react-icons/fa6"
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


const BlogCards = ({ headline, blogs }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='mt-12'>
      <Swiper
  slidesPerView={1}
  spaceBetween={30}
  autoplay={{ delay:1000 }}
  loop={true} 
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1124: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  }}
  modules={[Pagination,Autoplay]}
  className="mySwiper"
 
>
  {/* Slides */}

  {blogs.map(blog => (
            <SwiperSlide key={blog._id}>
              <Link to={`/blog/${blog._id}`} state={{ blogId: blog._id }}>
                <div className='relative'>
                  <img src={blog.imageURL} alt=''/>
                </div>
                <div>
                  <div>
                    <h3>{blog.blogTitle}</h3>
                    <p>{blog.authorName}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

   
       
        
      </Swiper>
      </div>
    </div>
  );
}

export default BlogCards;


