import route from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps{
    user?:User|null
    loading?:boolean
    loginGoogle?:()=>Promise<void>
    logoutGoogle?:()=>Promise<void>
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
        name:userFirebase.displayName??"",
        email:userFirebase.email??"",
        token,
        provider:userFirebase.providerData[0]?.providerId,
        imageUrl:userFirebase.photoURL??""

    }
}

function managerCookie(logged:boolean){
    if(logged){
        Cookies.set('admin-template-auth',logged.toString(),{
            expires:2
        })
    }

    if(!logged){
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider({children}:AuthProviderProps){
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState<User|null>(null)

    async function configureSession(userFirebase:firebase.User|null){
        if(userFirebase?.email){
            const user = await normalizedUser(userFirebase);
            setUser(user);
            managerCookie(true);
            setLoading(false)
            return user.email
        }else{
            setUser(null)
            managerCookie(false);
            setLoading(false)
            return false
        }
    }

    async function loginGoogle(){
        try{
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            if(resp.user){
                configureSession(resp.user)
                route.push('/')
            } 
        }finally{
            setLoading(false)
        }
    }

    async function logoutGoogle(){
        try{
            setLoading(true)
            await firebase.auth().signOut()
            await configureSession(null)
            route.push('/Authentication')
        }finally{
            setLoading(false);

        }

    }

    useEffect(()=>{
        if(Cookies.get('admin-template-auth')){
            const cancel = firebase.auth().onIdTokenChanged(configureSession)  
            return () => cancel()
        }else{
            setLoading(false)
        }
    },[])

    return(
        <AuthContext.Provider value={{
            user,loginGoogle,logoutGoogle,loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}