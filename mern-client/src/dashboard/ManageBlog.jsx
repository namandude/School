// import React, { useEffect, useState } from 'react'
// import { Button, Table } from 'flowbite-react';
// import { Link } from 'react-router-dom';

// const ManageBlog = () => {
//   const [allblog, setAllblog] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/all-blog").then(res => res.json()).then(data => setAllblog(data));

//   }, [])

//   //delete a blog

//   const handleDelete=(id)=>{
//     console.log(id)
//     fetch(`http://localhost:3000/blog/${id}`,{
//       method:"DELETE",
//     }).then(res => res.json())
//     .then(data => {
//       alert("blog deleted successfully");
      
//     })

//   }
//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Manage Your blog</h2>

//       {/* table for blog data */}
//       <div className="overflow-x-auto">
//         <Table className='lg:w-[1188px]'>
//           <Table.Head>
//             <Table.HeadCell>No.</Table.HeadCell>
//             <Table.HeadCell>Blog Title</Table.HeadCell>
//             <Table.HeadCell>Author Name</Table.HeadCell>
//             <Table.HeadCell>Date Uploaded</Table.HeadCell>
//             <Table.HeadCell>
//               <span>Edit</span>
//             </Table.HeadCell>
//             <Table.HeadCell>
//               <span>Delete</span>
//             </Table.HeadCell>
           
//           </Table.Head>
//           {allblog.map((blog, index) => (
//             <Table.Body className="divide-y" key={blog._id}>
//                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//               <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</Table.Cell>
            
//               <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                 {blog.BlogTitle}
//               </Table.Cell>
//               <Table.Cell> {blog.authorName}</Table.Cell>
//               <Table.Cell>{blog.BlogDate}</Table.Cell>
            
//               <Table.Cell>
//                 <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
//                  to={`/admin/dashboard/edit-blog/${blog._id}`}>
//                   <p>
//                   Edit
//                   </p>
//                 </Link>
               
//               </Table.Cell>
//               <Table.Cell><Button onClick={()=> handleDelete(blog._id)}className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</Button></Table.Cell>
//             </Table.Row>

//             </Table.Body>
//           ))}

         
//         </Table>
//       </div>

//     </div>
//   )
// }

// export default ManageBlog


import React, { useEffect, useState } from 'react';
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBlog = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-blog")
      .then(res => res.json())
      .then(data => setAllBlogs(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/blog/${id}`, {
      method: "DELETE",
    })
    .then(res => {
      if (res.ok) {
        // Filter out the deleted blog from the state
        setAllBlogs(allBlogs.filter(blog => blog._id !== id));
        alert("Blog deleted successfully");
      } else {
        throw new Error('Failed to delete blog');
      }
    })
    .catch(error => {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Blogs</h2>

      <div className="overflow-x-auto">
        <Table className='lg:w-[1188px]'>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Blog Title</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Date Uploaded</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allBlogs.map((blog, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={blog._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{blog.BlogTitle}</Table.Cell>
                <Table.Cell>{blog.authorName}</Table.Cell>
                <Table.Cell>{blog.BlogDate}</Table.Cell>
                <Table.Cell>
                  <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    to={`/admin/dashboard/edit-blog/${blog._id}`}>
                    Edit
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleDelete(blog._id)} className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBlog;
