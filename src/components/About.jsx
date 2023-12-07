import React from 'react'
import profile from '../assets/profile.jpg'
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiMysql, SiPhp, SiTailwindcss, SiExpress, SiSequelize } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { LiaLaravel } from "react-icons/lia";
import { FaAws, } from "react-icons/fa6";
import { FaGitAlt, FaBootstrap } from "react-icons/fa";

const About = () => {

    return (
        <div name='about' className='overscroll-x-none w-screen h-screen bg-gray-100 dark:bg-[#0a192f] duration-300'>
            <div className='sm:flex flex-col justify-center items-center w-screen h-full py-8 whitespace-pre-line' >
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-4'>
                    <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="500" className='ml-4 px-4 py-4 sm:text-right pb-4'>
                        <span className='text-gray-700'>
                            <h2 className='mt-2 text-2xl dark:text-gray-100 sm:text-4xl font-semibold inline border-b-4 border-cyan-500'>About</h2>
                        </span>
                    </div>
                </div>
                <div className='max-w-[1000px] text-2xl w-full grid sm:grid-cols-2 gap-4 px-4'>
                    <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="500" className='dark:text-gray-300 text-md sm:text-right text-4xl font-semibold pt-4 px-4'>
                        <div className='hidden sm:inline-flex border-solid border-4 border-cyan-500 rounded-br-3xl rounded-tl-3xl'>
                            <img src={profile} alt="profile" height={240} width={240} className=' rounded-br-2xl rounded-tl-2xl' />
                        </div>


                        <p>Please have a look @ my <span className='text-cyan-600 dark:text-cyan-500'>tech stack</span> that would <span className='text-cyan-600 dark:text-cyan-500'>interest</span> you</p>

                    </div>
                    <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="500">
                        <p className='dark:text-gray-200 text-2xl pb-1 sm:text-2xl font-semibold inline border-b-4 border-gray-400 whitespace-pre-line'>Tech Stack</p>
                        <span className='sm:flex flex-col items-center py-2 dark:text-gray-300 text-center'>
                            <div className='animate-float max-w-[600px] justify-center items-center w-full grid grid-cols-3 text-gray-500 dark:text-gray-400'>
                                
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#F0DB4F]'>
                                    <RiJavascriptFill size={70} />
                                </div>
                                
                                
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#61DBFB]'>
                                    <IoLogoReact size={70} />
                                    
                                </div>
                                
                                <div className='py-2 hover:scale-110 duration-300 hover:text-gray-700'>
                                    <SiExpress size={70} />
                                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#68a063]'>
                                    <IoLogoNodejs size={70} />
                                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#f05340]'>
                                    <LiaLaravel size={70} />
                                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#00758f]'>
                                    <SiMysql size={70} />
                                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#FF9900]'>
                                    <FaAws size={70} />
                                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#AEB2D5]'>
                                    <SiPhp size={70} />
                                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#3490dc]'>
                                    <SiTailwindcss size={70} />
                    
                                </div>
                                 <div className='py-2 hover:scale-110 duration-300 hover:text-[#f34f29]'>
                                    <FaGitAlt size={70} />
                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#563d7c]'>
                                    <FaBootstrap size={70} />
                    
                                </div>
                                <div className='py-2 hover:scale-110 duration-300 hover:text-[#01B3F2]'>
                                    <SiSequelize size={70} />
                    
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About