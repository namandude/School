
import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-blog")
      .then(res => res.json())
      .then(data => {
        console.log(data);  // Log the fetched data
        setBlogs(data.slice(0,8));    // Update the state with the fetched data if needed
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Apply the background color to the body
    document.body.classList.add('bg-green-200');
  
    // Clean up the effect by removing the class when the component is unmounted
    return () => {
        document.body.classList.remove('bg-green-200');
    };
  }, []);
  

  return (
    <div>
      <BlogCards blogs={blogs} headline="Our Best Blogs"/>
    </div>
  );
};

export default Blog;

