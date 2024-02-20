import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo-school.png';

// //react icons
// import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
// import { AuthContext } from '../contacts/AuthProviders';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     const { user } = useContext(AuthContext)

//     //toggle menu
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     }

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setIsSticky(true);
//             }
//             else {
//                 setIsSticky(false);
//             }
//         }

//         window.addEventListener("scroll", handleScroll);


//         return () => {
//             window.addEventListener("scroll", handleScroll);
//         }

//     }, [])

//     //navItems

//     const navItems = [
//         { Link: "Home", path: "/" },
//         { Link: "Who we are", path: "/about" },
//         // { Link: "Student Life", path: "/shop" },
//         // { Link: "Admission", path: "/admin/dashboard" },
//         { Link: "Our Facility", path: "/admin/dashboard" },
//         { Link: "Fee Structure", path: "/admin/dashboard" },
//         { Link: "Notice", path: "/admin/dashboard" },
//         { Link: "Blog", path: "/blog" }
//     ]

//     return (
//         <header className='w-full bg-transparent fixed top-0 left-0 right-0 transmition-all ease-in duration-300'>
//             <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
       
// <div className='flex items-center text-base gap-8'>
//   {/* logo */}
//   <Link to='/' className='flex items-center gap-2 ml-2 px-4 py-2 text-blue-700'>
//     <img src={logo} alt="Logo" className="h-24 w-auto" />
//     <div>
//       <h2 className='text-4xl font-bold leading-snug text-[#fff]'>SHRI KRISHNA</h2>
//       <span className='text-2xl'>International School</span>
//     </div>
//   </Link>


//                     {/*nav item for large device*/}

//                     <ul className='md:flex space-x-12 hidden'>
//                         {navItems.map(({ Link, path }) => (
//                             <a key={path} href={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{Link}</a>
//                         ))}


//                     </ul>

//                     {/* Button for lg devices when menu is not open*/}

//                     <div className='space-x-12 hidden lg:flex items-center'>

//                         <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
//                         {
//                             user ? user.email : ""
//                         }
//                     </div>


//                     {/*menu btn for the mobile devices */}
//                     <div className='md:hidden'>
//                         <button onClick={toggleMenu} className='text-black focus:outline=none'>
//                             {
//                                 isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
//                             }
//                         </button>

//                     </div>

//                 </div>

//                 {/* navItems for s device*/}
//                 <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
//                     {navItems.map(({ Link, path }) =>

//                         <a key={path} href={path} className='block text-base text-white uppercase cursor-pointer'>{Link}</a>

//                     )}
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Navbar

// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
// import { AuthContext } from '../contacts/AuthProviders';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const { user } = useContext(AuthContext);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const navItems = [
//         { label: 'Home', path: '/' },
//         { label: 'Who we are', path: '/about' },
//         { label: 'Our Facility', path: '/admin/dashboard' },
//         { label: 'Fee Structure', path: '/admin/dashboard' },
//         { label: 'Notice', path: '/admin/dashboard' },
//         { label: 'Blog', path: '/blog' }
//     ];

//     return (
//         <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
//             <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-[#379581]' : ''}`}>
//                 <div className='flex items-center justify-between'>
//                     <Link to='/' className='flex items-center gap-2 ml-2 px-4 py-2 text-blue-700'>
//                         <img src={logo} alt='Logo' className='h-24 w-auto' />
                     
//                     </Link>

//                     <div className='md:flex md:items-center md:space-x-12 hidden'>
//                         {navItems.map(({ label, path }) => (
//                             <Link key={path} to={path} className='text-base text-black uppercase hover:text-blue-700'>
//                                 {label}
//                             </Link>
//                         ))}

//                         <button>
//                             <FaBarsStaggered className='w-5 hover:text-blue-700' />
//                         </button>
//                         {user ? user.email : ''}
//                     </div>

//                     <div className='md:hidden'>
//                         <button onClick={toggleMenu} className='text-black focus:outline-none'>
//                             {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
//                         </button>
//                     </div>
//                 </div>

//                 <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 md:hidden ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
//                     {navItems.map(({ label, path }) => (
//                         <Link key={path} to={path} className='block text-base text-white uppercase'>
//                             {label}
//                         </Link>
//                     ))}
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../contacts/AuthProviders';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Who we are', path: '/about' },
        { label: 'Our Faculty', path: '/faculty' },
        { label: 'Fee Structure', path: '/' },
        { label: 'Admin', path: '/admin/dashboard' },
        { label: 'Blog', path: '/blog' }
    ];

    // Check if the current location is the home page
    const isHomePage = location.pathname === '/';

    return (
        // Render Navbar only if it's the home page
        isHomePage && (
            <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
                <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-[#379581]' : ''}`}>
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='flex items-center gap-2 ml-2 px-4 py-2 text-blue-700'>
                            <img src={logo} alt='Logo' className='h-24 w-auto' />
                        </Link>

                        <div className='md:flex md:items-center md:space-x-12 hidden'>
                            {navItems.map(({ label, path }) => (
                                <Link key={path} to={path} className='text-base text-black uppercase hover:text-blue-700'>
                                    {label}
                                </Link>
                            ))}

                            <button>
                                <FaBarsStaggered className='w-5 hover:text-blue-700' />
                            </button>
                            {/* {user ? user.email : ''} */}
                        </div>

                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                            </button>
                        </div>
                    </div>

                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 md:hidden ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                        {navItems.map(({ label, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>
        )
    );
};

export default Navbar;
