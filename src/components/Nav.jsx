import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import { BsFillPersonLinesFill,BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-scroll';
import logo1 from '../assets/logo1.png';
import Lester from '../assets/lester.txt';
import Switcher from './Switcher';
import WordToggle from './WordToggle';


const Nav = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className=' p-0 m-0'>
            <div className='bg-gray-100 fixed flex sm:flex-wrap justify-between w-screen items-center top-0 dark:bg-[#0a192f] duration-300 font-sans py-2 px-4 z-20 overscroll-x-none'>
                <div className='text-3xl mx-5 font-bold'>
                    <a href="/" className='relative p-0 m-0'>
                        <img src={logo1} alt="logo1" width={42} height={42} />
                    </a>
                </div>
                <ul className='hidden md:flex text-gray-500 text-normal dark:text-gray-200 duration-300'>
                    {/*Menu*/}
                    <li>
                        <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="home" smooth={true} duration={700}>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="about" smooth={true} duration={700}>About</Link>
                    </li>
                    <li>
                        <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="experience" smooth={true} duration={700}>Experience</Link>
                    </li>
                    <li><Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="projects" smooth={true} duration={700}>Projects</Link></li>
                    <li>
                        <Link className='hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500' to="contact" smooth={true} duration={700}>Contact</Link>
                    </li>
                    <li className='text-xl hover:text-cyan-500 duration-200'>
                        <Switcher />
                    </li>
               
                </ul>
            
                {/* Hamburger and X Button*/}
                <div onClick={handleClick} className='md:hidden text-2xl z-10 text-gray-500 dark:text-gray-100'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                {/* Mobile Menu */}
            
                <ul className={!nav ? 'hidden' : 'bg-gray-100 text-gray-500 absolute top-0 left-0 w-full h-screen dark:bg-[#0a192f] flex flex-col justify-center items-center dark:text-gray-200'}>
                    <li className='py-3 text-2xl hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500'><Link onClick={handleClick} to="home" smooth={true} duration={600}>Home</Link></li>
                    <li className='py-3 text-2xl hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500'><Link onClick={handleClick} to="about" smooth={true} duration={600}>About</Link></li>
                    <li className='py-3 text-2xl hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500'><Link onClick={handleClick} to="experience" smooth={true} duration={600}>Experience</Link></li>
                    <li className='py-3 text-2xl hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500'><Link onClick={handleClick} to="projects" smooth={true} duration={600}>Projects</Link></li>
                    <li className='py-3 text-2xl hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500'><Link onClick={handleClick} to="contact" smooth={true} duration={600}>Contact</Link></li>
                    <li className='py-3 text-2xl hover:text-cyan-500 duration-200 hover:border-b-2 border-cyan-500'><WordToggle /></li>
                </ul>
                {/* Social Icons   */}
                {/* <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                    <ul>
                        <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-white text-blue-500 rounded-tr-full rounded-br-full shadow-lg'>
                            <a href="/" className='flex justify-between items-center w-full'>
                                Facebook <FaFacebook size={25} />
                            </a>
                        </li>
                        <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-gray-800 text-gray-50 rounded-tr-full rounded-br-full shadow-lg'>
                            <a href="https://github.com/rookieSeason" className='flex justify-between items-center w-full'>
                                Github  <FaGithub size={25} />
                            </a>
                        </li>
                        <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0077b5] text-gray-50 rounded-tr-full rounded-br-full shadow-lg'>
                            <a href="" className='flex justify-between items-center w-full'>
                                Linkedin<FaLinkedin size={25} />
                            </a>
                        </li>
                        <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-700 via-rose-500 to-orange-400 text-gray-50 rounded-tr-full rounded-br-full shadow-lg'>
                            <a href="" className='flex justify-between items-center w-full'>
                                Instagram<BsInstagram size={25} />
                            </a>
                        </li>
                        <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-green-500 text-gray-50 rounded-tr-full rounded-br-full shadow-lg'>
                            <a href={Lester} download="resume-pdf" target='_blank' rel='nonreferrer' className='flex justify-between items-center w-full'>
                                Resume<BsFillPersonLinesFill size={25} />
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>

        </div>
        
    );
}

export default Nav