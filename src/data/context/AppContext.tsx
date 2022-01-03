import { createContext, ReactNode, useState } from "react";

type Theme = 'dark' | ''

type AppContextData={
    theme:Theme
    switchTheme:()=>void
}

type AppProviderProps = {
    children:ReactNode
}

export function AppProvider(props:AppProviderProps){
    const [theme,setTheme] = useState<Theme>('dark')
    
    function switchTheme(){
        setTheme(theme === '' ? 'dark':'')
    }

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