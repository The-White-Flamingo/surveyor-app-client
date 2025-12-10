"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdReportProblem } from "react-icons/md";
import { HiClipboardList } from "react-icons/hi";
import { RiWallet3Fill } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import LogoutButton from "./Logout";

export default function Sidebar() {
    const pathname = usePathname();
    const menu = [
    {name:"Dashboard",href:"/surveyor/dashboard",icon: <MdDashboard size={20}/>},
    {name:"My Surveys",href:"/surveyor/surveys",icon: <HiClipboardList size={20}/>},
    {name:"Payments",href:"/surveyor/payments",icon: <RiWallet3Fill size={20}/>},
    {name:"Messages",href:"/surveyor/messages",icon: <BiMessageRounded size={20}/>},
    {name:"Help",href:"/surveyor/help",icon: <AiOutlineQuestionCircle size={20}/>},
    {name:"Account",href:"/surveyor/account",icon: <FaUserCircle size={20}/>},
    {name:"Disputes",href:"/surveyor/disputes",icon: <MdReportProblem size={20}/>}
]

  return (
    <aside className="bg-white flex flex-col gap-3 items-center w-64 min-h-screen max-sm:hidden max-md:hidden">
        <h3 className='text-xl px-3 py-2 font-bold text-slate-900'>Client Panel</h3>
        <nav className="text-left flex flex-col gap-2 px-8 w-56">
            {menu.map((item)=>(
                <>
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-4 rounded-3xl text-sm px-4 py-3 cursor-pointer font-medium ${pathname === item.href ? "bg-orange-500 text-white shadow-lg" : "hover:bg-gray-100"}`}
                    >
                        {item.icon}
                        {`${item.name}`}
                    </Link>
                </>
            ))}
            <LogoutButton />
        </nav>
    </aside>
  )
}
