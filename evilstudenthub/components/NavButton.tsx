import {IconType} from "react-icons";
import Link from "next/link";

function NavButton({Icon, isActive, PageLink }:
                   {Icon: IconType, isActive: boolean, PageLink : string}) {
    return(
        <Link
            href={PageLink}
            className={`flex inline-flex p-4 mx-4 mt-4 rounded-2xl 
            ${isActive ? "bg-[#0ed72f]" : "hover:bg-[#f5f5f5]"}
            `}>
            <Icon className="h-5 w-5"/>
        </Link>
    )
}

export default NavButton;