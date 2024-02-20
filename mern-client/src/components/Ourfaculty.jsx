// import React, { useEffect, useState } from 'react'
// import BookCards from '../components/BookCards';
// import './Ourfaculty.css'
// const Ourfaculty = () => {
//     const [faculties, setFaculty] = useState([]);

//     useEffect(() => {
//       fetch("http://localhost:3000/all-faculty")
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);  // Log the fetched data
//           setFaculty(data);    // Update the state with the fetched data if needed
//         })
//         .catch(error => console.error("Error fetching data:", error));
//     }, []);
  
//     return (
  
        
    
// <section class="gallery" id="gallery">
// <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Gallery</h2>
//   <div class="box-container">
   
//   {faculties.map(faculty => (
             
                 
  
// <div class="box">



// <Link to={`/faculty/${faculty._id}`} key={faculty._id}>
//   {/* <li>
//     <div className="notice-details">
//       <FaRegFilePdf className="file-icon" />
//       <div>
//         <h3>{notice.noticeTitle}</h3>
//         <p>{notice.uploadDate}</p>
//         <p>{notice.noticeDescription}</p>
//       </div>
//     </div>
//   </li> */}
   
//   <img src=`{faculty.imageURL}` alt='23'/>
// <h3 class="title">
// <h3>{faculty.facultyName}</h3>
       
//         <p>{faculty.categoryName}</p>

// </h3>
// </Link>
// </div>
//  } </div>
  
// </section>
      
//     );
// }

// export default Ourfaculty

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Ourfaculty.css';

const Ourfaculty = () => {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-faculty")
            .then(res => res.json())
            .then(data => {
                console.log(data);  // Log the fetched data
                setFaculties(data);    // Update the state with the fetched data if needed
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <section className="faculty" id="faculty">
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Out Faculty</h2>
            <div className="box-container">
                {faculties.map(faculty => (
                    <div className="box" key={faculty._id}>
                        <Link to={`/faculty/${faculty._id}`}>
                            <img src={faculty.imageURL} alt={faculty.facultyName} />
                            <div className="title">
                              <h1>  {faculty.facultyName}</h1>
                                <p>{faculty.categoryName}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Ourfaculty;
