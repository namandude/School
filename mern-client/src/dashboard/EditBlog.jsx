




// // import React, { useState } from 'react'
// // import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
// // import { Textarea } from 'flowbite-react';
// // import { useLoaderData, useParams } from 'react-router-dom';

// // const EditBlog = () => {
// //   const {id} = useParams();
// //   const {BlogTitle,imageURL,authorName,BlogDate,BlogDescription}= useLoaderData();




// //     const handleBlogSubmit =(event) =>{
// //       event.preventDefault();
// //       const form=event.target;
// //       const BlogTitle=form.BlogTitle.value; 
// //       const authorName=form.authorName.value; 
// //       const BlogDescription= form.BlogDescription.value;
// //       const imageURL=form.imageURL.value;
      
// //       const BlogDate=form.BlogDate.value;
      

// //       const BlogObj={
// //         BlogTitle,
// //         authorName,
// //         imageURL,
// //         BlogDescription,
// //         BlogDate,
      
// //       }
// //       console.log(BlogObj)



// //     //send data to db
// //     fetch(`http://localhost:3000/blog/${id}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-type": "application/json",
// //       },
// //       body: JSON.stringify(BlogObj),
// //     })
// //       .then(res => res.json())
// //       .then(data => {
// //         alert("Blog is updated successfully");
// //       })
// //       .catch(error => {
// //         console.error("Error uploading Blog:", error);
// //       });
    


// // }
// // return (
// // <div className='px-4 my-12'>
// //   <h2 className='mb-8 text-3xl font-bold'>Update A Blog</h2>


// // <form onSubmit={handleBlogSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
// //     {/* first row */}
// //   <div className='flex gap-8'>

// //   <div className='lg:w-1/2'>
// //     <div className="mb-2 block">
// //       <Label htmlFor="BlogTitle" name="BlogTitle" value="Blog Name" />
// //     </div>
// //     <TextInput id="BlogTitle" type="text" placeholder="Blog Name" defaultValue={BlogTitle} required />
// //   </div>

// //   <div className='lg:w-1/2'>
// //     <div className="mb-2 block">
// //       <Label htmlFor="BlogDate" name="BlogDate" value="Blog Date" />
// //     </div>
// //     <TextInput id="BlogDate" type="date" placeholder="Blog Date" defaultValue={BlogDate} required />
// //   </div>


// //   </div>

// //   {/* second row */}

  
// //   <div className='flex gap-8'>

// //   <div className='lg:w-1/2'>
// //     <div className="mb-2 block">
// //       <Label htmlFor="imageURL" name="imageURL" value="Blog Image URL" />
// //     </div>
// //     <TextInput id="imageURL" type="text" placeholder="Blog Image URL" defaultValue={imageURL} required />
// //   </div>
 

// //  {/* BlogDescription */}
// //  <div>
// //         <div className="mb-2 block">
// //           <Label htmlFor="BlogDescription" name="BlogDescription" value="Description" />
// //         </div>
// //         <Textarea  id="BlogDescription" placeholder="Description" required rows={4} className='w-full'/>
        
// //       </div>


// //   </div>


  
// //   <Button type="submit">Update Blog</Button>
// // </form>
// // </div>
// // )
// // }

// // export default EditBlog


// const handleBlogSubmit = (event) => {
//   event.preventDefault();
//   const form = event.target;
//   const BlogTitle = form.BlogTitle.value; 
//   const authorName = form.authorName.value; 
//   const BlogDescription = form.BlogDescription.value;
//   const imageURL = form.imageURL.value;
//   const BlogDate = form.BlogDate.value;
  
//   const BlogObj = {
//     BlogTitle,
//     authorName,
//     imageURL,
//     BlogDescription,
//     BlogDate,
//   };
//   console.log(BlogObj);
  






//     //send data to db
//     fetch(`http://localhost:3000/blog/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(BlogObj),
//     })
//       .then(res => res.json())
//       .then(data => {
//         alert("Blog is updated successfully");
//       })
//       .catch(error => {
//         console.error("Error uploading Blog:", error);
//       });
    


// // }
// // return (
// // <div className='px-4 my-12'>
// //   <h2 className='mb-8 text-3xl font-bold'>Update A Blog</h2>


// // <form onSubmit={handleBlogSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
// //     {/* first row */}
// //   <div className='flex gap-8'>

// //   <div className='lg:w-1/2'>
// //     <div className="mb-2 block">
// //       <Label htmlFor="BlogTitle" name="BlogTitle" value="Blog Name" />
// //     </div>
// //     <TextInput id="BlogTitle" type="text" placeholder="Blog Name" defaultValue={BlogTitle} required />
// //   </div>

// //   <div className='lg:w-1/2'>
// //     <div className="mb-2 block">
// //       <Label htmlFor="BlogDate" name="BlogDate" value="Blog Date" />
// //     </div>
// //     <TextInput id="BlogDate" type="date" placeholder="Blog Date" defaultValue={BlogDate} required />
// //   </div>


// //   </div>

// //   {/* second row */}

  
// //   <div className='flex gap-8'>

// //   <div className='lg:w-1/2'>
// //     <div className="mb-2 block">
// //       <Label htmlFor="imageURL" name="imageURL" value="Blog Image URL" />
// //     </div>
// //     <TextInput id="imageURL" type="text" placeholder="Blog Image URL" defaultValue={imageURL} required />
// //   </div>
 

// //  {/* BlogDescription */}
// //  <div>
// //         <div className="mb-2 block">
// //           <Label htmlFor="BlogDescription" name="BlogDescription" value="Description" />
// //         </div>
// //         <Textarea  id="BlogDescription" placeholder="Description" required rows={4} className='w-full'/>
        
// //       </div>


// //   </div>


  
// //   <Button type="submit">Update Blog</Button>
// // </form>
// // </div>
// // )
// // }

// // export default EditBlog








//   };


import React from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const { BlogTitle, imageURL, authorName, BlogDate, BlogDescription } = useLoaderData();

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const BlogTitle = form.BlogTitle.value; 
    const authorName = form.authorName.value; 
    const BlogDescription = form.BlogDescription.value;
    const imageURL = form.imageURL.value;
    const BlogDate = form.BlogDate.value;
    
    const BlogObj = {
      BlogTitle,
      authorName,
      imageURL,
      BlogDescription,
      BlogDate,
    };
    console.log(BlogObj);

    //send data to db
    fetch(`http://localhost:3000/blog/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(BlogObj),
    })
      .then(res => res.json())
      .then(data => {
        alert("Blog is updated successfully");
      })
      .catch(error => {
        console.error("Error uploading Blog:", error);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update A Blog</h2>

      <form onSubmit={handleBlogSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="BlogTitle" name="BlogTitle" value="Blog Name" />
            </div>
            <TextInput id="BlogTitle" type="text" placeholder="Blog Name" defaultValue={BlogTitle} required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="BlogDate" name="BlogDate" value="Blog Date" />
            </div>
            <TextInput id="BlogDate" type="date" placeholder="Blog Date" defaultValue={BlogDate} required />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" name="imageURL" value="Blog Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Blog Image URL" defaultValue={imageURL} required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" name="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
          </div>
        </div>

        {/* BlogDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="BlogDescription" name="BlogDescription" value="Description" />
          </div>
          <Textarea  id="BlogDescription" placeholder="Description" defaultValue={BlogDescription} required rows={4} className='w-full'/>
        </div>

        <Button type="submit">Update Blog</Button>
      </form>
    </div>
  );
};

export default EditBlog;
