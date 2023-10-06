import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-scroll';

const Nav = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed flex w-full sm:flex-wrap justify-between items-center top-0 bg-[#0a192f] font-sans py-2 px-4 z-20'>
            <div className='text-3xl mx-5 font-bold'>
                <a href="/">
                    <span className=' text-cyan-400'>L</span>
                    <span className='text-gray-100'>G Portfolio</span>
                </a></div>
            
            <ul className='hidden md:flex text-white text-normal'>
                {/*Menu*/}
                <li>
                    <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="home" smooth={true} duration={600}>Home</Link>
                </li>
                <li>
                    <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="about" smooth={true} duration={600}>About</Link>
                </li>
                <li><Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="projects" smooth={true} duration={600}>Projects</Link></li>
                <li>
                    <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="contact" smooth={true} duration={600}>Contact</Link>
                </li>
            </ul>
            
            {/* Hamburger and X Button*/}
            <div onClick={handleClick} className='md:hidden text-2xl z-10 text-white'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white'}>
                <li className='py-3 text-2xl'><Link onClick={handleClick} to="home" smooth={true} duration={600}>Home</Link></li>
                <li className='py-3 text-2xl'><Link onClick={handleClick} to="about" smooth={true} duration={600}>About</Link></li>
                <li className='py-3 text-2xl'><Link onClick={handleClick} to="projects" smooth={true} duration={600}>Projects</Link></li>
                <li className='py-3 text-2xl'><Link onClick={handleClick} to="contact" smooth={true} duration={600}>Contact</Link></li>
            </ul>
            {/* Social Icons   */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-white text-blue-500 rounded-t-lg shadow-lg'>
                        <a href="/" className='flex justify-between items-center w-full'>
                            Facebook <FaFacebook size={25} />
                        </a>
                    </li>
                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-gray-800 text-gray-50 shadow-lg'>
                        <a href="https://github.com/rookieSeason" className='flex justify-between items-center w-full'>
                            Github  <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0077b5] text-gray-50 shadow-lg'>
                        <a href="" className='flex justify-between items-center w-full'>
                            Linkedin<FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-red-700 text-gray-50 shadow-lg'>
                        <a href="https://gmail.com/gatpolintanjohn" className='flex justify-between items-center w-full'>
                            Gmail<SiGmail size={25} />
                        </a>
                    </li>
                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-green-500 text-gray-50 rounded-b-lg shadow-lg'>
                        <a href="" className='flex justify-between items-center w-full'>
                            Resume<BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav