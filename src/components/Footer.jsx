import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-800 dark:bg-[#0a192f] dark:text-gray-100 overscroll-x-none shadow-lg duration-300">
            <div className="w-screen mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center ">© 2023 <a href="/" className="hover:underline">Gatpolintan™</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
        
    );
}

export default Footer