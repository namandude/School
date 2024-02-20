import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id,authorName, BlogDate,BlogDescription,BlogTitle,imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL} alt="" className='h-96' />
      <h2>{BlogTitle}</h2>
      <h2>{authorName}</h2>
      <h2>{BlogDate}</h2>
      <h2>{BlogDescription}</h2>
    </div>
  )
}


export default SingleBook
