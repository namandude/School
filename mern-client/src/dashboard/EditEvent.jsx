// import React, { useState } from 'react'
// import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
// import { Textarea } from 'flowbite-react';
// import { useLoaderData, useParams } from 'react-router-dom';
// const EditEvent = () => {
//   const {id} = useParams();
//   const {EventTitle,EventDate,EventDescription, EventUrl}= useLoaderData();

//     //const handle submit
//     const handleEventSubmit =(event) =>{
//         event.preventDefault();
//         const form=event.target;
//         const EventTitle=form.EventTitle.value; 
//         const EventDate=form.EventDate.value; 
//         const EventDescription=form.EventDescription.value;
//         const EventUrl=form.EventUrl.value;

//         const Event={
//           EventTitle,
//           EventDate,
//           EventDescription,
//           EventUrl
//         }
//         console.log(Event)

       
// //send data to db
// fetch(`http://localhost:3000/event/${id}`, {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(Event),
// })
//   .then(res => res.json())
//   .then(data => {
//     alert("Notice is updated successfully");
//   })
//   .catch(error => {
//     console.error("Error uploading Notice:", error);
//   });

//     }
//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Upload A Event</h2>


// <form onSubmit={handleEventSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         {/* first row */}
//       <div className='flex gap-8'>

//       <div className='lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="EventTitle" name="EventTitle" value="Event Title" />
//         </div>
//         <TextInput id="EventTitle" type="text" placeholder="Event Title" required />
//       </div>
 
//       {/*author */}
//       <div className='lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="EventDate" name="EventDate" value="Upload Date" />
//         </div>
//         <TextInput id="EventDate" type="date" placeholder="Upload Date" required />
//       </div>



//       </div>

      
//       {/* EventDescription */}
//       <div>
//         <div className="mb-2 block">
//           <Label htmlFor="EventDescription" name="EventDescription" value="Description" />
//         </div>
//         <Textarea  id="EventDescription" placeholder="Description" required rows={4} className='w-full'/>
        
//       </div>

//       {/* Event pdf link */}

//       <div >
//         <div className="mb-2 block">
//           <Label htmlFor="EventUrl" name="EventUrl" value="Event URL" />
//         </div>
//         <TextInput id="EventUrl" name="EventUrl" type="text" placeholder="Event URL" required />
//       </div>
      
//       <Button type="submit">Update Event</Button>
//     </form>
//     </div>
//   )
// }

// export default EditEvent

// import React, { useState, useEffect } from 'react';
// import { Button, Label, TextInput, Textarea } from 'flowbite-react';
// import { useParams } from 'react-router-dom';

// const EditEvent = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState({
//     EventTitle: '',
//     EventDate: '',
//     EventDescription: '',
//     EventUrl: ''
//   });

//   useEffect(() => {
//     // Fetch event details when component mounts
//     fetch(`http://localhost:3000/event/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         // Set event state with fetched data
//         setEvent(data);
//       })
//       .catch(error => {
//         console.error("Error fetching event details:", error);
//       });
//   }, [id]);

//   // Handle form submission
//   const handleEventSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic
//   };

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Edit Event</h2>
//       <form onSubmit={handleEventSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="EventTitle" name="EventTitle" value="Event Title" />
//             </div>
//             <TextInput id="EventTitle" type="text" placeholder="Event Title" value={event.EventTitle} required />
//           </div>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="EventDate" name="EventDate" value="Upload Date" />
//             </div>
//             <TextInput id="EventDate" type="date" placeholder="Upload Date" value={event.EventDate} required />
//           </div>
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="EventDescription" name="EventDescription" value="Description" />
//           </div>
//           <Textarea id="EventDescription" placeholder="Description" value={event.EventDescription} required rows={4} className='w-full' />
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="EventUrl" name="EventUrl" value="Event URL" />
//           </div>
//           <TextInput id="EventUrl" name="EventUrl" type="text" placeholder="Event URL" value={event.EventUrl} required />
//         </div>
//         <Button type="submit">Update Event</Button>
//       </form>
//     </div>
//   );
// };

// export default EditEvent;



// import React, { useState } from 'react'
// import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
// import { Textarea } from 'flowbite-react';
// import { useLoaderData, useParams } from 'react-router-dom';
// const EditEvent = () => {
//   const {id} = useParams();
//   const {EventTitle,EventDate,EventDescription, EventUrl}= useLoaderData();

//     //const handle submit
//     const handleEventSubmit =(event) =>{
//         event.preventDefault();
//         const form=event.target;
//         const EventTitle=form.EventTitle.value; 
//         const EventDate=form.EventDate.value; 
//         const EventDescription=form.EventDescription.value;
//         const EventUrl=form.EventUrl.value;

//         const eventObj={
//           EventTitle,
//           EventDate,
//           EventDescription,
//           EventUrl
//         }
//         console.log(eventObj)

       
// //send data to db
// fetch(`http://localhost:3000/event/${id}`, {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(eventObj),
// })
//   .then(res => res.json())
//   .then(data => {
//     alert("Event is updated successfully");
//   })
//   .catch(error => {
//     console.error("Error updating Event:", error);
//   });

//     }
//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Update A Event</h2>


// <form onSubmit={handleEventSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         {/* first row */}
//       <div className='flex gap-8'>

//       <div className='lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="EventTitle" name="EventTitle" value="Event Title" />
//         </div>
//         <TextInput id="EventTitle" type="text" placeholder="Event Title" required />
//       </div>
 
//       {/*author */}
//       <div className='lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="EventDate" name="EventDate" value="Upload Date" />
//         </div>
//         <TextInput id="EventDate" type="date" placeholder="Upload Date" required />
//       </div>



//       </div>

      
//       {/* EventDescription */}
//       <div>
//         <div className="mb-2 block">
//           <Label htmlFor="EventDescription" name="EventDescription" value="Description" />
//         </div>
//         <Textarea  id="EventDescription" placeholder="Description" required rows={4} className='w-full'/>
        
//       </div>

//       {/* notice pdf link */}

//       <div >
//         <div className="mb-2 block">
//           <Label htmlFor="EventUrl" name="EventUrl" value="Event URL" />
//         </div>
//         <TextInput id="EventUrl" name="EventUrl" type="text" placeholder="Event URL" required />
//       </div>
      
//       <Button type="submit">Update Event</Button>
//     </form>
//     </div>
//   )
// }

// export default EditEvent

import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useParams } from 'react-router-dom';

const EditEvent = () => {
  const { id } = useParams();
  const [eventObj, setEventObj] = useState({
    EventTitle: '',
    EventDate: '',
    EventDescription: '',
    EventUrl: ''
  });

  useEffect(() => {
    // Fetch event details when component mounts
    fetch(`http://localhost:3000/event/${id}`)
      .then(res => res.json())
      .then(data => {
        // Set eventObj state with fetched data
        setEventObj(data);
      })
      .catch(error => {
        console.error("Error fetching event details:", error);
      });
  }, [id]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventObj(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleEventSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/event/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventObj),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to update event');
        }
        return res.json();
      })
      .then(data => {
        alert("Event is updated successfully");
      })
      .catch(error => {
        console.error("Error updating event:", error);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update An Event</h2>
      <form onSubmit={handleEventSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="EventTitle" name="EventTitle" value="Event Title" />
            </div>
            <TextInput id="EventTitle" type="text" placeholder="Event Title" name="EventTitle" value={eventObj.EventTitle} onChange={handleInputChange} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="EventDate" name="EventDate" value="Upload Date" />
            </div>
            <TextInput id="EventDate" type="date" placeholder="Upload Date" name="EventDate" value={eventObj.EventDate} onChange={handleInputChange} required />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="EventDescription" name="EventDescription" value="Description" />
          </div>
          <Textarea id="EventDescription" placeholder="Description" name="EventDescription" value={eventObj.EventDescription} onChange={handleInputChange} required rows={4} className='w-full' />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="EventUrl" name="EventUrl" value="Event URL" />
          </div>
          <TextInput id="EventUrl" name="EventUrl" type="text" placeholder="Event URL" value={eventObj.EventUrl} onChange={handleInputChange} required />
        </div>
        <Button type="submit">Update Event</Button>
      </form>
    </div>
  );
};

export default EditEvent;
