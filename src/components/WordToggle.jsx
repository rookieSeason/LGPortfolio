import React, { useEffect, useState } from 'react'

const WordToggle = () => {

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
    return (
        <div>
            <button onClick={darkModeSwitch}>
                {theme === "light" ? <span>Light Mode</span> : <span>Dark Mode</span>}
            </button>
        </div>
    );
}

export default WordToggle