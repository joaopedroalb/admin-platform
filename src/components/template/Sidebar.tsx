import MenuItem from "./MenuItem";
import {IconHome,IconConfig, IconBell} from "../icons"

export default function Sidebar(){
    return(
        <aside>
            <ul>
                <MenuItem url="/" icon={IconHome} text="Home" />
                <MenuItem url="/Setting" icon={IconConfig} text="Settings" />
                <MenuItem url="/News" icon={IconBell} text="News" />
            </ul>
        </aside>
    )
}