import { createContext, ReactNode, useEffect, useState } from "react";

//type Theme = 'dark' | ''

type AppContextData={
    theme:string
    switchTheme:()=>void
}

type AppProviderProps = {
    children:ReactNode
}

export function AppProvider(props:AppProviderProps){
    const [theme,setTheme] = useState('dark')
    
    function switchTheme(){
        const newTheme = theme === '' ? 'dark':''
        setTheme(newTheme)
        localStorage.setItem('theme',newTheme)
    }

    useEffect(()=>{
        const themeSaved = localStorage.getItem('theme')
        setTheme(themeSaved??'dark')
    },[])

    return(
        <AppContext.Provider value={{
            theme,
            switchTheme,

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

const AppContext = createContext({} as AppContextData)

export default AppContext

export const AppConsume = AppContext.Consumer