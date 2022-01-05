import { ReactNode } from "react"
import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'

import loadingImg from '../../../public/images/loading.gif'
import useAuthData from "../../data/hook/useAuthData"
import { route } from "next/dist/server/router"

interface ForcerAuthProps{
    children:ReactNode
}

export default function ForcerAuth(props:ForcerAuthProps){

    const {loading,user} = useAuthData()

    function renderContent(){
        return(
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html:`
                        if(!document.cookie?.includes("admin-template-auth")){window.location.href="/Authentication"}`
                }}/>
            </Head>
            {props.children}
            </>
        )
    }

    function renderLoading(){
        return(
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loadingImg}/>
            </div>
        )
    }

    if(!loading&&user?.email){
        return renderContent()
    }else if(loading){
        return renderLoading()
    }else{
        router.push('/Authentication')
        return null
    }
}