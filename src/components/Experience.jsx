import React from 'react'
import {BiSolidBriefcase} from 'react-icons/bi';
const Experience = () => {
  return (
    <div name='experience' className='overscroll-x-none w-screen h-screen bg-gray-100 text-gray-800 dark:bg-[#0a192f] duration-300'>
        <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='500' className='sm:flex flex-col justify-center items-center w-screen h-screen whitespace-pre-line'>
            <div className=' text-center py-8'>
                <span>
                    <h1 className='mt-2 text-2xl dark:text-gray-50 sm:text-4xl font-bold inline border-b-4 border-cyan-500'>Experience</h1>
                </span>
            </div>
           
            {/* <!-- component --> */}
           
<ol className="items-center sm:flex">
    <div className='max-w-[1000px] px-8'>
    <li className="relative mb-6 px-8 sm:mb-0 py-8 mt-8 rounded-lg shadow-lg mx-4 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-gray-800 sm:ring-8 dark:ring-gray-600 shrink-0 dark:text-gray-100">
                <BiSolidBriefcase/>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-800"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">In1Go Technologies Inc.</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">September 2023 - Present</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-300">Junior Software Developer</p>
        </div>
    </li>

    <li className="relative mb-6 px-8 sm:mb-0  py-8 mt-8 rounded-lg shadow-lg mx-4 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-gray-800 sm:ring-8 dark:ring-gray-600 shrink-0 dark:text-gray-100">
                <BiSolidBriefcase/>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-800"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">Phosclay Chemical Mfg.</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">March 2023 - June 2023</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-300">Graphic Designer Intern</p>
        </div>
    </li>
</div>


    
    {/* <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <BiSolidBriefcase/>
            </div>
           <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li clasNames="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <BiSolidBriefcase/>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li> */}
</ol>

        </div>
    </div>
  );
}

export default Experience