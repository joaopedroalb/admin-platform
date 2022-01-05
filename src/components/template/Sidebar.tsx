import MenuItem from "./MenuItem";
import {IconHome,IconConfig, IconBell, IconLogout} from "../icons"
import Logo from "./Logo";
import useAuthData from "../../data/hook/useAuthData";

export default function Sidebar(){
    const {logout} = useAuthData()

    return(
        <aside className={`
            flex flex-col
            bg-gray-200 
            dark:bg-gray-900 
        `}>
            <div className={`
             h-20 w-20 
             bg-gradient-to-r from-indigo-500 to-purple-800
             flex flex-col items-center justify-center
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" icon={IconHome} text="Home" />
                <MenuItem url="/Setting" icon={IconConfig} text="Settings" />
                <MenuItem url="/News" icon={IconBell} text="News" />
            </ul>
            <ul>
                <MenuItem icon={IconLogout} text="Logout" 
                onClick={logout}
                className={`text-red-600 dark:text-red-400
                            hover:bg-red-400 hover:text-white
                            dark:hover:text-white`}
                />
            </ul>
        </aside>
    )
}