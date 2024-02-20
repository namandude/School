import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';

const UploadFaculty = () => {
    const facultyCategories=[
        'English', 'Hindi','Social Scince', 'Science',
         'Biology', 'Physics', 'Chemistry', 'Sports',
          'Art and Design'
    ]
    const [selectedfacultyCategory, setselectedfacultyCategory]= useState(facultyCategories[0])
    // const handleChangeSelectedValue= (event) =>{
    //  console.log(event.target.value);
    //  setselectedfacultyCategory(event.target.value) ;  
    // }
    const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setselectedfacultyCategory(event.target.value);
    };
    

    //const handle submit
    const handleFacultySubmit =(event) =>{
        event.preventDefault();
        const form=event.target;
        const facultyName=form.facultyName.value; 
        
        const imageURL=form.imageURL.value;
        // const category=form.categoryName.value;
     
        const categoryName = form.categoryName.value;


        const facultyObj={
          facultyName,
         
          imageURL,
          categoryName
          
        
        }
        console.log(facultyObj)

        //send data to db
        fetch("http://localhost:3000/upload-faculty", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(facultyObj),
        })
          .then(res => res.json())
          .then(data => {
            alert("Faculty added successfully");
          })
          .catch(error => {
            console.error("Error adding FACULTY:", error);
          });
        


    }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Add A Faculty</h2>


<form onSubmit={handleFacultySubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="facultyName" name="facultyName" value="Faculty Name" />
        </div>
        <TextInput id="facultyName" type="text" placeholder="Faculty Name" required />
      </div>
 
     



      </div>

      {/* second row */}

      
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" name="imageURL" value="Faculty Image URL" />
        </div>
        <TextInput id="imageURL" type="text" placeholder="Faculty Image URL" required />
      </div>
     
 

 
      {/*Category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="categoryName" value="Faculty Category" />
       </div>
        <select
    name="categoryName"
    id="categoryName"
    className='w-full rounded'
    value={selectedfacultyCategory}
    onChange={handleChangeSelectedValue}
>
    {facultyCategories.map((option) => <option key={option} value={option}>{option}</option>)}
</select>

{/* <TextInput id="facultyName" type="text" placeholder="Faculty Name" required />
<TextInput id="imageURL" type="text" placeholder="Faculty Image URL" required />
</div>
<select
    name="categoryName"
    id="categoryName"
    className='w-full rounded'
    value={selectedfacultyCategory}
    onChange={handleChangeSelectedValue}
>
    {facultyCategories.map((option) => <option key={option} value={option}>{option}</option>)}
</select> */}

      </div>



      </div>


     
      
      <Button type="submit">Add Faculty</Button>
    </form>
    </div>
  )
}

export default UploadFaculty
