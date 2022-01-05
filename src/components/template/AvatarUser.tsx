import Link from "next/link";
import useAuthData from "../../data/hook/useAuthData";

export default function AvatarUser(){
    const {user} = useAuthData()

    return(
        <Link href="/Profile">
            <img src={user?.imageUrl ?? '/images/defaultImage.png'} 
                 alt="Avatar user"
                className="h-10 w-10 rounded-full cursor-pointer"
            />
        </Link>
    )
}