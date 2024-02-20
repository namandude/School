import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';

const UploadEvent = () => {
    //const handle submit
    const handleEventSubmit =(event) =>{
        event.preventDefault();
        const form=event.target;
        const EventTitle=form.EventTitle.value; 
        const EventDate=form.EventDate.value; 
        const EventDescription=form.EventDescription.value;
        const EventUrl=form.EventUrl.value;

        const EventObj={
          EventTitle,
          EventDate,
          EventDescription,
          EventUrl
        }
        console.log(EventObj)

        //send data to db
        fetch("http://localhost:3000/upload-event", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(EventObj),
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
      <h2 className='mb-8 text-3xl font-bold'>Upload A Event</h2>


<form onSubmit={handleEventSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="EventTitle" name="EventTitle" value="Event Title" />
        </div>
        <TextInput id="EventTitle" type="text" placeholder="Event Title" required />
      </div>
 
      {/*author */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="EventDate" name="EventDate" value="Event Date" />
        </div>
        <TextInput id="EventDate" type="date" placeholder="Event Date" required />
      </div>



      </div>

      
      {/* EventDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="EventDescription" name="EventDescription" value="Description" />
        </div>
        <Textarea  id="EventDescription" placeholder="Description" required rows={4} className='w-full'/>
        
      </div>

      {/* Event pdf link */}

      <div >
        <div className="mb-2 block">
          <Label htmlFor="EventUrl" name="EventUrl" value="Event URL" />
        </div>
        <TextInput id="EventUrl" name="EventUrl" type="text" placeholder="Event URL" required />
      </div>
      
      <Button type="submit">Upload Event</Button>
    </form>
    </div>
  )
}

export default UploadEvent
