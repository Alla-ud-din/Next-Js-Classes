import { Menu } from "./menu"
import logo from "@/assets/logo.png"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar(){
    return (
        <div className="flex items-center justify-center bg-white min-h-[64px]">
            <div className="grid grid-cols-[10%,80%,10%] items-center w-4/5 h-full">
                {/* Logo  */}
                <div>
                    <Image src={logo} className="h-20 w-20 rounded-full" alt="Logo"/>
                </div>
                {/* Menu */}
                <div className="text-black flex justify-center"><Menu/></div>
                {/* Avatar */}
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}