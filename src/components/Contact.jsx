import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
const Contact= () => {
    return (
        <div name='contact' className='overscroll-x-none w-screen h-screen bg-gray-100 dark:bg-[#0a192f] duration-300'>
            <div className='overscroll-x-none flex flex-col justify-center items-center w-full h-screen pt-12 px-12'>
                <div className='whitespace-pre-line max-w-[900px] w-full grid sm:grid-cols-2 gap-2 pb-1 top-0'>
                    <div className='ml-4 sm:text-center pb-4' data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">
                        <h1 className='my-8 text-2xl sm:text-3xl text-gray-800 dark:text-gray-100 font-bold inline border-b-4 border-cyan-500'>Contact Me</h1>
                        <div className='pt-8 px-auto py-4 text-gray-600 dark:text-gray-400'>
                            <p className='mx-auto flex py-2 items-center text-left text-xl'>
                                <BsFillTelephoneFill />
                                <span className='pl-4'>
                                    0945-601-8650
                                </span>
                            </p>
                            <p className='mx-auto flex py-2 items-center text-xl'>
                                <ImLocation />
                                <span className='pl-4'>
                                    Brgy. Molino 1, Bacoor, Cavite
                                </span>
                            </p>
                        </div>
                         
                    </div>
                    <div className='pb-4 sm:flex justify-center items-center h-full'>
                        <form>
                            <div className="bg-white py-8 rounded-xl w-full">
                                <div className="space-y-2 px-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-1 text-gray-600 font-semibold">Name</label>
                                        <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <div>
                                        <label html="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                                        <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block mb-1 text-gray-600 font-semibold">Message</label>
                                        <textarea type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                                    </div>
                                    <button className='mt-4 mb-4 py-2 w-full bg-cyan-600 text-gray-50  font-semibold rounded-md  tracking-wide hover:bg-cyan-700 duration-200'>Send Message</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact
