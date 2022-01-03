import useAppData from "../../data/hook/useAppData"

import { IconSun,IconMoon } from "../icons"

export default function BtnTheme(){
    const {theme,switchTheme} = useAppData()

    return theme==='dark'?(
        <div onClick={switchTheme} className={`
        
        `}>
            <div className={`
        
            `}>
                {IconSun}
            </div>
        </div>
    ):(
        <div onClick={switchTheme} className={`
        
        `}>
            <div>
                {IconMoon}
            </div>
        </div>
    )
}