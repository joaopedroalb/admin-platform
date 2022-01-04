import route from 'next/router'
import { createContext, ReactNode, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps{
    user?:User
    loginGoogle?:()=>Promise<void>
}

interface AuthProviderProps{
    children:ReactNode
}

const AuthContext = createContext<AuthContextProps>({})

export default AuthContext

async function normalizedUser(userFirebase:firebase.User):Promise<User>{
    const token = await userFirebase.getIdToken()
    return{
        uid:userFirebase.uid,
        name:userFirebase.displayName,
        email:userFirebase.email,
        token,
        provider:userFirebase.providerData[0]?.providerId,
        imageUrl:userFirebase.photoURL

    }
}

export function AuthProvider({children}:AuthProviderProps){
    const[user,setUser] = useState<User>()

    async function loginGoogle(){
        console.log('login google')
        route.push('/')
    }

    return(
        <AuthContext.Provider value={{
            user,loginGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}