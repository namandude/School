import React, { useEffect, useState } from 'react'

import './gallery.css'
const Gallery = () => {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //   fetch("http://localhost:3000/all-books")
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);  // Log the fetched data
    //       setBooks(data.slice(4,12));    // Update the state with the fetched data if needed
    //     })
    //     .catch(error => console.error("Error fetching data:", error));
    // }, []);
  
    return (
  
        
    
<section class="gallery" id="gallery">
<h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Gallery</h2>
  <div class="box-container">
   
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-sports.webp" alt='23'/>
<h3 class="title">Sports</h3>
</div>
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-boarding.webp" alt='23'/>
<h3 class="title">Hostels</h3>
</div>
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-houses.webp" alt='23'/>
<h3 class="title">Houses</h3>
</div>
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-clubs.webp" alt='23'/>
<h3 class="title">Events Clubs</h3>
</div>
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-samcara.webp" alt='23'/>
<h3 class="title">photo </h3>
</div>
<div class="box">
  <img src="https://www.billabonghighbhopal.com/achievers/2023-24/Veer-Dosi-Thumb.jpg" alt='23'/>
<h3 class="title">photo events</h3>
</div>
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-gallery.webp" alt='23'/>
<h3 class="title">gallery</h3>
</div>
<div class="box">
  <img src="https://sanskaarvalley.org/web_components/images/highlight-campus.webp" alt='23'/>
<h3 class="title">Campus</h3>
</div>
    </div>
  
</section>
      
    );
}

export default Gallery
