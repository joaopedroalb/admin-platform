import BtnTheme from "./BtnTheme";
import Title from "./Title";

interface HeaderProps{
    title:string
    subtitle:string
}

export default function Header(props:HeaderProps){
    return(
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow justify-end`}>
                <BtnTheme/>
            </div>
        </div>
    )
}