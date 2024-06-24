// import React, { useEffect, useState } from 'react'

// import './gallery.css'
// const Gallery = () => {
   
  
//     return (
  
        
    
// <section class="gallery" id="gallery">
// <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Gallery</h2>
//   <div class="box-container">
   
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-sports.webp" alt='23'/>
// <h3 class="title">Sports</h3>
// </div>
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-boarding.webp" alt='23'/>
// <h3 class="title">Hostels</h3>
// </div>
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-houses.webp" alt='23'/>
// <h3 class="title">Houses</h3>
// </div>
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-clubs.webp" alt='23'/>
// <h3 class="title">Events Clubs</h3>
// </div>
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-samcara.webp" alt='23'/>
// <h3 class="title">photo </h3>
// </div>
// <div class="box">
//   <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Veer-Dosi-Thumb.jpg" alt='23'/>
// <h3 class="title">photo events</h3>
// </div>
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-gallery.webp" alt='23'/>
// <h3 class="title">gallery</h3>
// </div>
// <div class="box">
//   <img src="https://sanskaarvalley.org/web_components/images/highlight-campus.webp" alt='23'/>
// <h3 class="title">Campus</h3>
// </div>
//     </div>
  
// </section>
      
//     );
// }

// export default Gallery

import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Gallery</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { src: "https://sanskaarvalley.org/web_components/images/highlight-sports.webp", title: "Sports" },
          { src: "https://sanskaarvalley.org/web_components/images/highlight-boarding.webp", title: "Hostels" },
          { src: "https://sanskaarvalley.org/web_components/images/highlight-houses.webp", title: "Houses" },
          { src: "https://sanskaarvalley.org/web_components/images/highlight-clubs.webp", title: "Events Clubs" },
          { src: "https://sanskaarvalley.org/web_components/images/highlight-samcara.webp", title: "Photo" },
          { src: "https://www.billabonghighbhopal.com/achievers/2023-24/Veer-Dosi-Thumb.jpg", title: "Photo Events" },
          { src: "https://sanskaarvalley.org/web_components/images/highlight-gallery.webp", title: "Gallery" },
          { src: "https://sanskaarvalley.org/web_components/images/highlight-campus.webp", title: "Campus" }
        ].map((item, index) => (
          <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg cursor-pointer group">
            <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <h3 className="absolute inset-0 bg-teal-600 bg-opacity-75 text-white text-center flex items-center justify-center text-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;


