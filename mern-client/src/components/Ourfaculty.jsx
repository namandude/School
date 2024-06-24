
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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

    useEffect(() => {
        // Apply the background color to the body
        document.body.classList.add('bg-green-200');

        // Clean up the effect by removing the class when the component is unmounted
        return () => {
            document.body.classList.remove('bg-green-200');
        };
    }, []);


    return (
        <section className="faculty" id="faculty">
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Faculty</h2>
            <div className="grid gap-6 grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
                {faculties.map(faculty => (
                    <div className="relative w-full h-60 overflow-hidden rounded-lg cursor-pointer group bg-green-200" key={faculty._id}>
                        <Link to={`/faculty/${faculty._id}`}>
                            <img src={faculty.imageURL} alt={faculty.facultyName} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-teal-600 bg-opacity-75 text-white text-center flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <h1 className="text-xl">{faculty.facultyName}</h1>
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
