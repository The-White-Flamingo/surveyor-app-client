"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [showNavBar,setShowNavBar] = useState(true);

    const toggleNavBar = ()=>{
        if(showNavBar === true){
            setShowNavBar(false)
        }else if(showNavBar === false){
            setShowNavBar(true)
        }
        // showNavBar ? setShowNavBar(false) : setShowNavBar(true);
    }


    return (
    <ThemeContext.Provider value={{showNavBar,setShowNavBar,toggleNavBar}}>
        {children}
    </ThemeContext.Provider>
  )
}
