import React, { useEffect } from 'react'
import profile from '../assets/profile.jpg'

const About = () => {
          
    return (
        <div name='about' className='w-screen h-screen bg-gray-100 text-gray-900'>
            <div className='sm:flex flex-col justify-center items-center w-screen h-full py-8 whitespace-pre-line' >
                <div  className='max-w-[1000px] w-full grid grid-cols-2 gap-4'>
                    <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="500" className='ml-4 px-4 py-4 sm:text-right pb-4'>
                        <span>
                            <h1 className='mt-2 text-2xl sm:text-4xl text-[#0a192f] font-bold inline border-b-4 border-cyan-500'>About</h1>
                        </span>
                    </div>
                </div>
                <div  className='max-w-[1000px] text-2xl w-full grid sm:grid-cols-2 gap-4 px-4'>
                    <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="500" className='text-md sm:text-right text-4xl font-semibold pt-4 px-4'>
                        <p>Please have a look @ my <span className='text-cyan-600'>tech stack</span> that would <span className='text-cyan-600'>interest</span> you</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="500" className='px-6'>
                        <p className='text-2xl pb-1 sm:text-2xl text-[#0a192f] font-bold inline border-b-4 border-gray-400 whitespace-pre-line'>Tech Stack</p>
                        <span className='sm:flex flex-col justify-center py-2 '>
                            <div className='my-1 hover:scale-105 duration-200'>
                                <label htmlFor="JavaScript" className='text-sm'>JavaScript</label>
                                <div className='mb-3 h-2 w-full bg-neutral-300 dark:bg-neutral-800 rounded'>
                                    <div className='rounded-l h-2 bg-yellow-400' style={{ width: 80 }}></div>
                                </div>
                            </div>
                            <div className='my-1 hover:scale-105 duration-200'>
                                <label htmlFor="PHP" className='text-sm'>PHP</label>
                                <div className='mb-3 h-2 w-full bg-neutral-300 dark:bg-neutral-800 rounded'>
                                    <div className='rounded-l h-2 bg-[#8993be]' style={{ width: 140 }}></div>
                                </div>
                            </div>
                            <div className='my-1 hover:scale-105 duration-200'>
                                <label htmlFor="JavaScript" className='text-sm'>Laravel</label>
                                <div className='mb-3 h-2 w-full bg-neutral-300 dark:bg-neutral-800 rounded'>
                                    <div className='rounded-l h-2 bg-[#f55247]' style={{ width: 90 }}></div>
                                </div>
                            </div>
                            <div className='my-1 hover:scale-105 duration-200'>
                                <label htmlFor="JavaScript" className='text-sm'>React JS</label>
                                <div className='mb-3 h-2 w-full bg-neutral-300 dark:bg-neutral-800 rounded'>
                                    <div className='rounded-l h-2 bg-[#61DBFB]' style={{ width: 80 }}></div>
                                </div>
                            </div>
                            <div className='my-1 hover:scale-105 duration-200'>
                                <label htmlFor="JavaScript" className='text-sm'>Node JS</label>
                                <div className='mb-3 h-2 w-full bg-neutral-300 dark:bg-neutral-800 rounded'>
                                    <div className='rounded-l h-2 bg-[#215732]' style={{ width: 70 }}></div>
                                </div>
                            </div>
                            <div className='my-1 hover:scale-105 duration-200'>
                                <label htmlFor="JavaScript" className='text-sm'>My SQL</label>
                                <div className='mb-3 h-2 w-full bg-neutral-300 dark:bg-neutral-800 rounded'>
                                    <div className='rounded-l h-2 bg-sky-500' style={{ width: 70 }}></div>
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