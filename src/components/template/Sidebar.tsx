import MenuItem from "./MenuItem";
import {IconHome,IconConfig, IconBell} from "../icons"
import Logo from "./Logo";

export default function Sidebar(){
    return(
        <aside>
            <div className={`
             h-20 w-20 
             bg-gradient-to-r from-indigo-500 to-purple-800
             flex flex-col items-center justify-center
            `}>
                <Logo/>
            </div>
            <ul>
                <MenuItem url="/" icon={IconHome} text="Home" />
                <MenuItem url="/Setting" icon={IconConfig} text="Settings" />
                <MenuItem url="/News" icon={IconBell} text="News" />
            </ul>
        </aside>
    )
}