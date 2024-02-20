// import React, { useState } from 'react'
// import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
// import { Textarea } from 'flowbite-react';
// import { useLoaderData, useParams } from 'react-router-dom';
// const EditNews = () => {
//   const {id} = useParams();
//   const {NewsTitle,NewsDate,NewsDescription, NewsUrl}= useLoaderData();

//     //const handle submit
//     const handleNewsSubmit =(event) =>{
//         event.preventDefault();
//         const form=event.target;
//         const NewsTitle=form.NewsTitle.value; 
//         const NewsDate=form.NewsDate.value; 
//         const NewsDescription=form.NewsDescription.value;
//         const NewsUrl=form.NewsUrl.value;

//         const Event={
//           NewsTitle,
//           NewsDate,
//           NewsDescription,
//           NewsUrl
//         }
//         console.log(News)

       
// //send data to db
// fetch(`http://localhost:3000/news/${id}`, {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(News),
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
//       <h2 className='mb-8 text-3xl font-bold'>Upload A News</h2>


// <form onSubmit={handleNewsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         {/* first row */}
//       <div className='flex gap-8'>

//       <div className='lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="NewsTitle" name="NewsTitle" value="News Title" />
//         </div>
//         <TextInput id="NewsTitle" type="text" placeholder="News Title" required />
//       </div>
 
//       {/*author */}
//       <div className='lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="NewsDate" name="NewsDate" value="News Date" />
//         </div>
//         <TextInput id="NewsDate" type="date" placeholder="News Date" required />
//       </div>



//       </div>

      
//       {/* NewsDescription */}
//       <div>
//         <div className="mb-2 block">
//           <Label htmlFor="NewsDescription" name="NewsDescription" value="Description" />
//         </div>
//         <Textarea  id="NewsDescription" placeholder="Description" required rows={4} className='w-full'/>
        
//       </div>

//       {/* News pdf link */}

//       <div >
//         <div className="mb-2 block">
//           <Label htmlFor="NewsUrl" name="NewsUrl" value="News URL" />
//         </div>
//         <TextInput id="NewsUrl" name="NewsUrl" type="text" placeholder="News URL" required />
//       </div>
      
//       <Button type="submit">Update News</Button>
//     </form>
//     </div>
//   )
// }

// export default EditNews

// import React, { useState, useEffect } from 'react';
// import { Button, Label, TextInput, Textarea } from 'flowbite-react';
// import { useParams } from 'react-router-dom';

// const EditNews = () => {
//   const { id } = useParams();
//   const [news, setNews] = useState({
//     NewsTitle: '',
//     NewsDate: '',
//     NewsDescription: '',
//     NewsUrl: ''
//   });

//   useEffect(() => {
//     // Fetch news details when component mounts
//     fetch(`http://localhost:3000/news/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         // Set news state with fetched data
//         setNews(data);
//       })
//       .catch(error => {
//         console.error("Error fetching news details:", error);
//       });
//   }, [id]);

//   // Handle form submission
//   const handleNewsSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic
//   };

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Edit News</h2>
//       <form onSubmit={handleNewsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="NewsTitle" name="NewsTitle" value="News Title" />
//             </div>
//             <TextInput id="NewsTitle" type="text" placeholder="News Title" value={news.NewsTitle} required />
//           </div>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="NewsDate" name="NewsDate" value="News Date" />
//             </div>
//             <TextInput id="NewsDate" type="date" placeholder="News Date" value={news.NewsDate} required />
//           </div>
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="NewsDescription" name="NewsDescription" value="Description" />
//           </div>
//           <Textarea id="NewsDescription" placeholder="Description" value={news.NewsDescription} required rows={4} className='w-full' />
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="NewsUrl" name="NewsUrl" value="News URL" />
//           </div>
//           <TextInput id="NewsUrl" name="NewsUrl" type="text" placeholder="News URL" value={news.NewsUrl} required />
//         </div>
//         <Button type="submit">Update News</Button>
//       </form>
//     </div>
//   );
// };

// export default EditNews;

// import React, { useState, useEffect } from 'react';
// import { Button, Label, TextInput, Textarea } from 'flowbite-react';
// import { useParams } from 'react-router-dom';

// const EditNews = () => {
//   const { id } = useParams();
//   const [news, setNews] = useState({
//     NewsTitle: '',
//     NewsDate: '',
//     NewsDescription: '',
//     NewsUrl: ''
//   });

//   useEffect(() => {
//     // Fetch news details when component mounts
//     fetch(`http://localhost:3000/news/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         // Set news state with fetched data
//         setNews(data);
//       })
//       .catch(error => {
//         console.error("Error fetching news details:", error);
//       });
//   }, [id]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNews(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleNewsSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic
//   };

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Edit News</h2>
//       <form onSubmit={handleNewsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="NewsTitle" name="NewsTitle" value="News Title" />
//             </div>
//             <TextInput id="NewsTitle" type="text" placeholder="News Title" name="NewsTitle" value={news.NewsTitle} onChange={handleInputChange} required />
//           </div>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="NewsDate" name="NewsDate" value="News Date" />
//             </div>
//             <TextInput id="NewsDate" type="date" placeholder="News Date" name="NewsDate" value={news.NewsDate} onChange={handleInputChange} required />
//           </div>
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="NewsDescription" name="NewsDescription" value="Description" />
//           </div>
//           <Textarea id="NewsDescription" placeholder="Description" name="NewsDescription" value={news.NewsDescription} onChange={handleInputChange} required rows={4} className='w-full' />
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="NewsUrl" name="NewsUrl" value="News URL" />
//           </div>
//           <TextInput id="NewsUrl" name="NewsUrl" type="text" placeholder="News URL" value={news.NewsUrl} onChange={handleInputChange} required />
//         </div>
//         <Button type="submit">Update News</Button>
//       </form>
//     </div>
//   );
// };

// export default EditNews;

// import React, { useState, useEffect } from 'react';
// import { Button, Label, TextInput, Textarea } from 'flowbite-react';
// import { useParams } from 'react-router-dom';

// const EditNews = () => {
//   const { id } = useParams();
//   const [news, setNews] = useState({
//     NewsTitle: '',
//     NewsDate: '',
//     NewsDescription: '',
//     NewsUrl: ''
//   });

//   useEffect(() => {
//     // Fetch news details when component mounts
//     fetch(`http://localhost:3000/news/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         // Set news state with fetched data
//         setNews(data);
//       })
//       .catch(error => {
//         console.error("Error fetching news details:", error);
//       });
//   }, [id]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNews(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
  // };

  // Handle form submission
  // const handleNewsSubmit = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:3000/news/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(news),
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Failed to update news');
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       alert("News is updated successfully");
  //       // Optionally, you can redirect the user to another page or perform any other actions after successful update
  //     })
  //     .catch(error => {
  //       console.error("Error updating news:", error);
  //       // Optionally, you can show an error message to the user
  //     });
//   // };
//   // Handle form submission
// const handleNewsSubmit = (event) => {
//   event.preventDefault();
//   fetch(`http://localhost:3000/news/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(news),
//   })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Failed to update news');
//       }
//       return res.json();
//     })
//     .then(data => {
//       alert("News is updated successfully");
//       // Reset the form fields after successful update
//       setNews({
//         NewsTitle: '',
//         NewsDate: '',
//         NewsDescription: '',
//         NewsUrl: ''
//       });
//     })
//     .catch(error => {
//       console.error("Error updating news:", error);
//       // Optionally, you can show an error message to the user
//     });
// };


//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Edit News</h2>
//       <form onSubmit={handleNewsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="NewsTitle" name="NewsTitle" value="News Title" />
//             </div>
//             <TextInput id="NewsTitle" type="text" placeholder="News Title" name="NewsTitle" value={news.NewsTitle} onChange={handleInputChange} required />
//           </div>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="NewsDate" name="NewsDate" value="News Date" />
//             </div>
//             <TextInput id="NewsDate" type="date" placeholder="News Date" name="NewsDate" value={news.NewsDate} onChange={handleInputChange} required />
//           </div>
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="NewsDescription" name="NewsDescription" value="Description" />
//           </div>
//           <Textarea id="NewsDescription" placeholder="Description" name="NewsDescription" value={news.NewsDescription} onChange={handleInputChange} required rows={4} className='w-full' />
//         </div>
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="NewsUrl" name="NewsUrl" value="News URL" />
//           </div>
//           <TextInput id="NewsUrl" name="NewsUrl" type="text" placeholder="News URL" value={news.NewsUrl} onChange={handleInputChange} required />
//         </div>
//         <Button type="submit">Update News</Button>
//       </form>
//     </div>
//   );
// };

// export default EditNews;

import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useParams } from 'react-router-dom';

const EditNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState({
    NewsTitle: '',
    NewsDate: '',
    NewsDescription: '',
    NewsUrl: ''
  });

  useEffect(() => {
    // Fetch news details when component mounts
    fetch(`http://localhost:3000/news/${id}`)
      .then(res => res.json())
      .then(data => {
        // Set news state with fetched data
        setNews(data);
      })
      .catch(error => {
        console.error("Error fetching news details:", error);
      });
  }, [id]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNews(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleNewsSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/news/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(news),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to update news');
        }
        return res.json();
      })
      .then(data => {
        alert("News is updated successfully");
        // Optionally, you can redirect the user to another page or perform any other actions after successful update
      })
      .catch(error => {
        console.error("Error updating news:", error);
        // Optionally, you can show an error message to the user
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit News</h2>
      <form onSubmit={handleNewsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="NewsTitle" name="NewsTitle" value="News Title" />
            </div>
            <TextInput id="NewsTitle" type="text" placeholder="News Title" name="NewsTitle" value={news.NewsTitle} onChange={handleInputChange} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="NewsDate" name="NewsDate" value="News Date" />
            </div>
            <TextInput id="NewsDate" type="date" placeholder="News Date" name="NewsDate" value={news.NewsDate} onChange={handleInputChange} required />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="NewsDescription" name="NewsDescription" value="Description" />
          </div>
          <Textarea id="NewsDescription" placeholder="Description" name="NewsDescription" value={news.NewsDescription} onChange={handleInputChange} required rows={4} className='w-full' />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="NewsUrl" name="NewsUrl" value="News URL" />
          </div>
          <TextInput id="NewsUrl" name="NewsUrl" type="text" placeholder="News URL" value={news.NewsUrl} onChange={handleInputChange} required />
        </div>
        <Button type="submit">Update News</Button>
      </form>
    </div>
  );
};

export default EditNews;
