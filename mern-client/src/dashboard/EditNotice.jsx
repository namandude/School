import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
const EditNotice = () => {
  const {id} = useParams();
  const {noticeTitle,uploadDate,noticeDescription, noticeUrl}= useLoaderData();

    //const handle submit
    const handleNoticeSubmit =(event) =>{
        event.preventDefault();
        const form=event.target;
        const noticeTitle=form.noticeTitle.value; 
        const uploadDate=form.uploadDate.value; 
        const noticeDescription=form.noticeDescription.value;
        const noticeUrl=form.noticeUrl.value;

        const noticeObj={
          noticeTitle,
          uploadDate,
          noticeDescription,
          noticeUrl
        }
        console.log(noticeObj)

       
//send data to db
fetch(`http://localhost:3000/notice/${id}`, {
  method: "PATCH",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(noticeObj),
})
  .then(res => res.json())
  .then(data => {
    alert("Notice is updated successfully");
  })
  .catch(error => {
    console.error("Error uploading Notice:", error);
  });

    }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Notice</h2>


<form onSubmit={handleNoticeSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="noticeTitle" name="noticeTitle" value="Notice Title" />
        </div>
        <TextInput id="noticeTitle" type="text" placeholder="Notice Title" required />
      </div>
 
      {/*author */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="uploadDate" name="uploadDate" value="Upload Date" />
        </div>
        <TextInput id="uploadDate" type="date" placeholder="Upload Date" required />
      </div>



      </div>

      
      {/* noticeDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="noticeDescription" name="noticeDescription" value="Description" />
        </div>
        <Textarea  id="noticeDescription" placeholder="Description" required rows={4} className='w-full'/>
        
      </div>

      {/* notice pdf link */}

      <div >
        <div className="mb-2 block">
          <Label htmlFor="noticeUrl" name="noticeUrl" value="Notice URL" />
        </div>
        <TextInput id="noticeUrl" name="noticeUrl" type="text" placeholder="Notice URL" required />
      </div>
      
      <Button type="submit">Update Notice</Button>
    </form>
    </div>
  )
}

export default EditNotice
