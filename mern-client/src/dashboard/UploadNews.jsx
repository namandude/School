import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';

const UploadNews = () => {
    //const handle submit
    const handleNewsSubmit =(event) =>{
        event.preventDefault();
        const form=event.target;
        const NewsTitle=form.NewsTitle.value; 
        const NewsDate=form.NewsDate.value; 
        const NewsDescription=form.NewsDescription.value;
        const NewsUrl=form.NewsUrl.value;

        const NewsObj={
          NewsTitle,
          NewsDate,
          NewsDescription,
          NewsUrl
        }
        console.log(NewsObj)

        //send data to db
        fetch("http://localhost:3000/upload-news", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(NewsObj),
        })
          .then(res => res.json())
          .then(data => {
            alert("Event uploaded successfully");
          })
          .catch(error => {
            console.error("Error uploading Event:", error);
          });
        


    }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A News</h2>


<form onSubmit={handleNewsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="NewsTitle" name="NewsTitle" value="News Title" />
        </div>
        <TextInput id="NewsTitle" type="text" placeholder="News Title" required />
      </div>
 
      {/*author */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="NewsDate" name="NewsDate" value="News Date" />
        </div>
        <TextInput id="NewsDate" type="date" placeholder="News Date" required />
      </div>



      </div>

      
      {/* NewsDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="NewsDescription" name="NewsDescription" value="Description" />
        </div>
        <Textarea  id="NewsDescription" placeholder="Description" required rows={4} className='w-full'/>
        
      </div>

      {/* Event pdf link */}

      <div >
        <div className="mb-2 block">
          <Label htmlFor="NewsUrl" name="NewsUrl" value="News URL" />
        </div>
        <TextInput id="NewsUrl" name="NewsUrl" type="text" placeholder="News URL" required />
      </div>
      
      <Button type="submit">Upload News</Button>
    </form>
    </div>
  )
}

export default UploadNews
