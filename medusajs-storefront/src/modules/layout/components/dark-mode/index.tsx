"use client"

import { Sun, MoonSolid } from "@medusajs/icons"
import { useState } from "react";
const DarkMode = () => {

    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <div className="flex items-center">
        <button className="p-2 ms-8"  onClick={()=> darkModeHandler()}>
            {
                
                dark && <MoonSolid />
            }
            {
                !dark && <Sun />
            }
        </button>
    </div>
    )
}


export default DarkMode;