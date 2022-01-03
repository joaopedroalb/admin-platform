import useAppData from "../../data/hook/useAppData"

import { IconSun,IconMoon } from "../icons"

export default function BtnTheme(){
    const {theme,switchTheme} = useAppData()

    return theme==='dark'?(
        <div onClick={switchTheme} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                flex items-center justify-center
              text-yellow-600 text-yellow-600 bg-white
                w-6 h-6 rounded-full
            `}>
                {IconSun(4)}
            </div>
            <div className={`
                hidden lg:flex items-center ml-2
                text-white
            `}>
                <span>Ligth</span>
            </div>
        </div>
    ):(
        <div onClick={switchTheme} className={`
            hidden sm:flex items-center justify-end cursor-pointer 
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                hidden lg:flex items-center mr-4 
                text-gray-300
            `}>
                <span>Dark</span>
            </div>
            <div className={`
                flex items-center justify-center
             text-yellow-300 bg-black
                w-6 h-6 rounded-full 
            `}>
                {IconMoon(4)}
            </div>
        </div>
    )
}