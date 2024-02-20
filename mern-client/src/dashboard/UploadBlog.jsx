

import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const UploadBlog = () => {
    const [blogData, setBlogData] = useState({
        BlogTitle: '',
        authorName: '',
        imageURL: '',
        BlogDate:'',
        BlogDescription: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleBlogSubmit = (event) => {
        event.preventDefault();
        console.log(blogData);

        fetch("http://localhost:3000/upload-blog", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(blogData),
        })
            .then(res => res.json())
            .then(data => {
                alert("Blog uploaded successfully");
            })
            .catch(error => {
                console.error("Error uploading blog:", error);
            });
    };

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Blog</h2>

            <form onSubmit={handleBlogSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="BlogTitle" name="BlogTitle" value="Blog Title" />
                        </div>
                        <TextInput id="BlogTitle" name="BlogTitle" type="text" placeholder="Blog Name" value={blogData.BlogTitle} onChange={handleInputChange} required />
                    </div>

                    {/*author */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" name="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" value={blogData.authorName} onChange={handleInputChange} required />
                    </div>
                </div>

                {/* second row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" name="imageURL" value="Blog Image URL" />
                        </div>
                        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Blog Image URL" value={blogData.imageURL} onChange={handleInputChange} required />
                    </div>
                </div>
 {/* second row date  */}

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="BlogDate" name="BlogDate" value="Blog Date" />
                        </div>
                        <TextInput id="BlogDate" name="BlogDate" type="date" placeholder="Blog Date" value={blogData.BlogDate} onChange={handleInputChange} required />
                    </div>
                </div>

                {/* BlogDescription */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="BlogDescription" name="BlogDescription" value="Description" />
                    </div>
                    <Textarea id="BlogDescription" name="BlogDescription" placeholder="Description" value={blogData.BlogDescription} onChange={handleInputChange} required rows={4} className='w-full' />
                </div>

                <Button type="submit">Upload Blog</Button>
            </form>
        </div>
    );
};

export default UploadBlog;
