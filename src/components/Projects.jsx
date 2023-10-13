import React from 'react'

const Projects = () => {
  return (
      <div name='projects' className='bg-gray-100 overscroll-x-none w-screen h-screen dark:bg-[#0a192f] duration-300 whitespace-pre-line py-8'>
          
          <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='500' className='flex flex-col justify-center items-center w-full h-full py-6'>
              <span>
                <p className='text-gray-800 text-2xl sm:text-4xl dark:text-gray-50 border-b-4 border-cyan-500'>Projects</p>
              </span>
              <p className='text-gray-700 dark:text-gray-200 py-4'>My Recent Projects that i worked before</p>
              <div className='max-w-[1200px] w-full grid md:grid-cols-3 gap-4 py-3 px-12 mx-12'>
                  <div className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl px-6 py-4 hover:scale-105 duration-300 '>
                      <p className='text-cyan-700 dark:text-cyan-400 text-xl text-center'>Online Relocation MIS of HUDRD</p>
                      <p className='text-gray-700 dark:text-gray-100 text-sm text-center mt-2'>Web Based Capstone Project</p>
                      <p className='text-gray-600 dark:text-gray-200 text-sm text-center'>Tech Stack:HTML, CSS3, JS, PHP, MySQL, & Bootstrap</p>
                  </div>
                  <div className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl px-6 py-4 hover:scale-105 duration-300'>
                      <p className='text-cyan-700 dark:text-cyan-400 text-xl text-center'>Student System Basic CRUD Functions</p>
                      <p className='text-gray-700 dark:text-gray-100 text-sm text-center mt-2'>A Web Based for Basic Practices</p>
                      <p className='text-gray-600 dark:text-gray-200 text-sm text-center'>Tech Stack: Laravel 10, MySQL, Tailwind CSS & Alpine JS</p>
                  </div>
                  <div className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl px-6 py-4 hover:scale-105 duration-300'>
                      <p className='text-cyan-700 dark:text-cyan-400 text-xl text-center'>React & Node Basic CRUD Web App</p>
                      <p className='text-gray-700 dark:text-gray-100 text-sm text-center mt-2'>Basic CRUD Practices</p>
                      <p className='text-gray-600 dark:text-gray-200 text-sm text-center'>Tech Stack: React, Reactstrap, Node, Express, & MySQL</p>
                  </div>                 
              </div>
          </div>
    </div>
  )
}

export default Projects