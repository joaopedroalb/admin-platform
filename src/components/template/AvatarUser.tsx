import Link from "next/link";
import { useEffect } from "react";
import useAuthData from "../../data/hook/useAuthData";

export default function AvatarUser(){
    const {user} = useAuthData()

    
    function getPathImg(){
        if(user?.imageUrl == '' || !user?.imageUrl || !user){
            return '/images/defaultImage.png'
        }

        return user?.imageUrl
    }
    return(
        <Link href="/Profile">
            <img src={getPathImg()} 
                 alt="Avatar user"
                className="h-10 w-10 rounded-full cursor-pointer"
            />
        </Link>
    )
}