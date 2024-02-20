import React, { useEffect, useState } from 'react'
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageNotice = () => {
  const [allNotices, setAllNotice] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-notice").then(res => res.json()).then(data => setAllNotice(data));

  }, [])

  //delete a Notice

  const handleDelete=(id)=>{
    console.log(id)
    fetch(`http://localhost:3000/notice/${id}`,{
      method:"DELETE",
    }).then(res => res.json())
    .then(data => {
      alert("Notice deleted successfully");
      
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Notice</h2>

      {/* table for notice data */}
      <div className="overflow-x-auto">
        <Table className='lg:w-[1188px]'>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Notice Title</Table.HeadCell>
            <Table.HeadCell>Upload Date</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span>Delete</span>
            </Table.HeadCell>
           
          </Table.Head>
          {allNotices.map((notices, index) => (
            <Table.Body className="divide-y" key={notices._id}>
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {notices.noticeTitle}
              </Table.Cell>
              <Table.Cell> {notices.uploadDate}</Table.Cell>

              <Table.Cell>
                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                 to={`/admin/dashboard/edit-notices/${notices._id}`}>
                  <p>
                  Edit
                  </p>
                </Link>
               
              </Table.Cell>
              <Table.Cell><Button onClick={()=> handleDelete(notices._id)}className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</Button></Table.Cell>
            </Table.Row>

            </Table.Body>
          ))}

         
        </Table>
      </div>

    </div>
  )
}

export default ManageNotice
