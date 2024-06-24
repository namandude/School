


import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



const SingleBook = () => {
  const {_id,authorName, BlogDate,BlogDescription,BlogTitle,imageURL} = useLoaderData();

  useEffect(() => {
    // Apply the background color to the body
    document.body.classList.add('bg-green-200');
  
    // Clean up the effect by removing the class when the component is unmounted
    return () => {
        document.body.classList.remove('bg-green-200');
    };
  }, []);
  
 
  return (
    
     <div className='mt-28 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-cemter gap-2' >
        <div className='flex justify-center items-center '>
          <img src={imageURL} alt="" className='h-96' />
        </div>


        <div className='lg:w-2/3 md:w-1/2  space-y-8 h-full   '>
          <h1 className='text-5xl font-bold leading-snug text-black '>{BlogTitle}  by <span className='text-green-700'> {authorName}</span> </h1>
          <h4 className='text-2xl font-bold leading-snug text-black'> {BlogDate}</h4>
          <br />
          {BlogDescription}<br/>

          //loream has been added
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit esse temporibus consequatur eaque enim laudantium, nisi inventore illum, corporis deleniti. Eos similique odit architecto quae reiciendis quo ducimus harum, delectus nulla nostrum esse quod doloribus illum. Non, in aspernatur.
         


        </div>


      </div>

    </div>
  
  )
}

export default SingleBook
