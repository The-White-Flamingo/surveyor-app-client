"use client";

import { FaTimes } from 'react-icons/fa';
import { usePathname } from "next/navigation";
import { MdDashboard, MdReportProblem } from "react-icons/md";
import { HiClipboardList } from "react-icons/hi";
import { RiWallet3Fill } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import LogoutButton from "./Logout";
import Link from "next/link"
import Logo from "./Logo";
import SidebarLogo from "./SidebarLogo";


export default function MobileSideBar({showNavBar,setShowNavBar}) {
    const pathname = usePathname();
    const menu = [
    {name:"Dashboard",href:"/client/dashboard",icon: <MdDashboard size={20}/>},
    {name:"My Surveys",href:"/client/surveys",icon: <HiClipboardList size={20}/>},
    {name:"Payments",href:"/client/payments",icon: <RiWallet3Fill size={20}/>},
    {name:"Messages",href:"/client/messages",icon: <BiMessageRounded size={20}/>},
    {name:"Help",href:"/client/help",icon: <AiOutlineQuestionCircle size={20}/>},
    {name:"Account",href:"/client/account",icon: <FaUserCircle size={20}/>},
    // {name:"Disputes",href:"/client/disputes",icon: <MdReportProblem size={20}/>}
]

  return (
    <div style={(showNavBar) ? {display: 'flex', zIndex: 5, background: "rgba(0,0,0,0.7"} : {display: 'none'}} className="w-full min-h-screen absolute">
        <div className='w-1/2 bg-white flex flex-col gap-3 p-4 items-center h-screen'>
            <button onClick={()=>showNavBar ? setShowNavBar(false) : setShowNavBar(true)} className='self-end font-medium p-2'>
               <FaTimes size={18}/> 
            </button>
            {/* <h3 className='text-xl px-3 py-2 font-bold text-slate-900'>Client Panel</h3> */}
            <Logo />
            <nav className="text-left flex flex-col gap-2 px-8 w-56">
                {menu.map((item)=>(
                    <>
                        <Link
                            onClick={()=>showNavBar ? setShowNavBar(false) : setShowNavBar(true)}
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
            <SidebarLogo />
        </div>
    </div>
  )
}
