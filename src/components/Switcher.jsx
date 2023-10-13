import React, { useEffect, useState } from 'react'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'


const Switcher =() => {

    const[theme, setTheme] = useState(false);

    useEffect(()=>{
        if(theme === "light"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    });

    const darkModeSwitch = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    }
        
    // setTheme(prevMode => !prevMode)
    

  return (
    <div>
        <button className='border-gray-800 rounded-full dark:text-gray-100
        dark:border-gray-100' onClick={darkModeSwitch}>
            <span>{theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}</span>
        </button>
    </div>
  )
}

export default Switcher