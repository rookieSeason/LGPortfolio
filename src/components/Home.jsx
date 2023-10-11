import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
        AOS.init();
    return (
        <div name='home' className='w-screen h-screen bg-[#0a192f] m-0 p-0 overflow-x-hidden'>
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" className='whitespace-pre-line sm:max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full z-10'>
                <p className='text-gray-100 text-2xl'>Hi my name is,</p>
                <p className='motion-safe:animate-bounce text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-200 sm:text-6xl font-bold py-2'>Lester John Gatpolintan</p>
                <h3 className='animate-typing overflow-hidden whitespace-nowrap text-gray-100 sm:text-3xl'>I'm a Junior Software Developer. </h3>
                <p className='text-gray-300 max-w-[700px] py-3 text-lg'>A hardworking Junior Software Developer
                that willing to learn and can provide an innovative solution in a least amount of time</p>
                <Link to='about' smooth={true} duration={600}>
                    <button className='text-gray-50 flex group px-3 my-2 py-2 bg-cyan-500 justify-center items-center mr-3 rounded-md hover:bg-cyan-700 duration-200 hover:scale-105'>View More
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-2' />
                        </span> 
                    </button>
                </Link>
            </div>
            

        </div>
    );
}

export default Home
