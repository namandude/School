import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import icons
import {FaStar} from "react-icons/fa6"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Achievements</h2>
        <p>Our achievers demonstrate that success in the coeval world relies not only on cognizance, but also on imagination, entrepreneurship, and the ability to explore.</p>
        <div>
        
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
  }}
  modules={[Pagination,Autoplay]}
  className="mySwiper"
 
>
  {/* Slides */}



        <SwiperSlide className='shadow-2xl bg-transparent py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Kushal-Israni-Thumb.jpg" alt="" />
                <h3 className='text-lg font-medium'>scsdcsdc</h3>
                <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Poorvi-Verma-Thumb.jpg" alt="" />
                <h3 className='text-lg font-medium'>Mark Ping</h3>
                <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Rohan-Lacchwani-Thumb.jpg" alt="" />
                <h3 className='text-lg font-medium'>Mark Ping</h3>
                <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus voluptates dolor natus.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Lakshya-Agarwal-Thumb.jpg" alt="" />
                <h3 className='text-lg font-medium'>Mark Ping</h3>
                <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias qui. Iste!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Itika-Tiwari-Thumb.jpg" alt="" />
                <h3 className='text-lg font-medium'>Mark Ping</h3>
                <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus debitis harum ipsam?</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Poster-Making-Thumb.jpg" alt="" />
                <h3 className='text-lg font-medium'>Mark Ping</h3>
                <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque veritatis provident ducimus.</p>
                </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
        </div>
      
    </div>
  )
}

export default Reviews

