import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
// import Blockchain from '../assets/blockchain.png'
import avatar from '../assets/peeps-avatar-alpha.png';
import Atropos from 'atropos/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
        AOS.init();
    return (
        <div name='home' className='bg-gray-100 w-screen h-screen dark:bg-[#0a192f] m-0 p-0 overflow-x-hidden antialiased transition-colors duration-300'>
            <div className='whitespace-pre-line sm:max-w-[1100px] max-h-screen mx-auto px-12 py-8 flex flex-col justify-center items-center h-full w-full z-20'>
                <div className=' max-w-[1100px] w-full grid sm:grid-cols-2 gap-x-8 col-span-1'>
                    <div className='p-0' data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                        <p className='text-gray-800 text-md sm:text-2xl dark:text-gray-100 mt-2'>Hi my name is,</p>
                        <h1 className='text-cyan-600 text-4xl dark:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 sm:text-7xl font-semibold py-1 dark:motion-safe:animate-pulse'>Lester John Gatpolintan</h1>
                        <h3 className='animate-typing text-md text-gray-800 overflow-hidden whitespace-nowrap dark:text-gray-100 sm:text-2xl'>I'm a Junior Software Developer. </h3>
                        <p className='text-gray-500 max-w-[700px] dark:text-gray-300 py-3 text-sm sm:text-lg'>A hardworking Junior Software Developer
                            that willing to learn and can provide an innovative solution in a least amount of time</p>
                        <Link to='about' smooth={true} duration={600}>
                            <button className='text-gray-100 flex group px-3 my-2 py-2 bg-cyan-900  hover:bg-cyan-600 justify-center items-center mr-3 rounded-md dark:bg-sky-500 dark:text-gray-800 dark:hover:bg-cyan-700 duration-200 hover:scale-105 hover:text-gray-50'>View More
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-2' />
                                </span>
                            </button>
                        </Link>
                        
                        <ul className='flex items-center text-gray-500 dark:text-gray-300 pt-2'>
                            <a href="https://www.facebook.com/Liquid.L">
                                <li className='hover:text-cyan-500 duration-300'><FaFacebook size={20} /></li>
                            </a>
                            <a href="/">
                                <li className='hover:text-cyan-500 duration-300'><FaInstagram size={20} /></li>
                            </a>
                            <a href="https://github.com/rookieSeason">
                                <li className='hover:text-cyan-500 duration-300'><FaGithub size={20} /></li>
                            </a>
                            <a href="https://www.linkedin.com/in/lester-john-gatpolintan-119112272/"></a>
                            <li className='hover:text-cyan-500 duration-300'><FaLinkedin size={20} /></li>
                        </ul>
                        
                    </div>
                    <div className='max-w-[700px]sm:flex flex-wrap justify-center items-center max-w-lg bg-right relative z-[-200px] pt-4'>
                        <Atropos className='p-4' shadow={false} shadowScale={0}>
                            <img src={avatar} width={450} height={450} alt="avatar" className='border border-cyan-500 rounded-full animate-float text-center hover:scale-125' data-aos="fade-left" data-aos-delay="300" data-aos-duration="500" />
                        </Atropos>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home
