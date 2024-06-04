"use client"

import { SunSolid } from "@medusajs/icons"
import { Sun } from "@medusajs/icons"
import { useState } from "react";
const DarkMode = () => {

    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <div className="flex items-center">
        <button className="p-2"  onClick={()=> darkModeHandler()}>
            {
                
                dark && <Sun />
            }
            {
                !dark && <SunSolid />
            }
        </button>
    </div>
    )
}


export default DarkMode;