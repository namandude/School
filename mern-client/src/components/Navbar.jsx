import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
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

    const isHomePage = location.pathname === '/';

    return (
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

                    <div className={`space-y-4 px-4 mt-16 py-7 bg-green-700 md:hidden ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                        <div className='flex justify-end'>
                            <button onClick={toggleMenu} className='text-white focus:outline-none'>
                                <FaXmark className='h-5 w-5' />
                            </button>
                        </div>
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
