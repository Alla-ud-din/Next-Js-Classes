import Image from "next/image"
import logo from "@/assets/logo.png"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Menu } from "./Menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function Navbar() {
  return (
    <nav className="px-5 grid grid-cols-[auto,auto] md:grid-cols-[10%,80%,10%] min-h-full justify-between items-center">
      <div className="">
        {/* Logo  */}
        <div className="flex items-center">
            <Image src={logo} className="h-20 w-20 rounded-full" alt="Logo"/>
            <div className="md:hidden bg-gray-950 p-0.5 rounded-xl flex justify-center items-center">
            <HamburgerMenuIcon className="text-gray-200 w-6 h-6"/>
            </div>
        </div>
      </div>
      {/* Menu */}
      <div className="hidden  text-black md:flex justify-center"><Menu/></div>
      {/* Avatar */}
      <div className="">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
