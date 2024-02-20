




import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditFaculty = () => {
  const {id} = useParams();
  const {facultyName,imageURL,categoryName}= useLoaderData();

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
    // const handleFacultySubmit =(event) =>{
    //   event.preventDefault();
    //   const form=event.target;
    //   const facultyName=form.facultyName.value; 
    //   const imageURL=form.imageURL.value; 
    //   const category=form.category.value;

    //   const FacultyObj={
    //     facultyName,
    //     imageURL,
    //     category
    //   }
    //   console.log(FacultyObj)

    const handleFacultySubmit =(event) =>{
      event.preventDefault();
      const form=event.target;
      const facultyName=form.facultyName.value; 
      
      const imageURL=form.imageURL.value;
      // const category=form.categoryName.value;
   
      const categoryName = form.categoryName.value;


      const FacultyObj={
        facultyName,
       
        imageURL,
        categoryName,
        
      
      }
      console.log(FacultyObj)



    //send data to db
    fetch(`http://localhost:3000/faculty/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(FacultyObj),
    })
      .then(res => res.json())
      .then(data => {
        alert("Faculty is updated successfully");
      })
      .catch(error => {
        console.error("Error uploading Faculty:", error);
      });
    


}
return (
<div className='px-4 my-12'>
  <h2 className='mb-8 text-3xl font-bold'>Update A Faculty</h2>


<form onSubmit={handleFacultySubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
    {/* first row */}
  <div className='flex gap-8'>

  <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="facultyName" name="facultyName" value="Faculty Name" />
    </div>
    <TextInput id="facultyName" type="text" placeholder="Faculty Name" defaultValue={facultyName} required />
  </div>




  </div>

  {/* second row */}

  
  <div className='flex gap-8'>

  <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="imageURL" name="imageURL" value="Faculty Image URL" />
    </div>
    <TextInput id="imageURL" type="text" placeholder="Faculty Image URL" defaultValue={imageURL} required />
  </div>
 

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

  </div>



  </div>


  
  <Button type="submit">Update Faculty</Button>
</form>
</div>
)
}

export default EditFaculty


