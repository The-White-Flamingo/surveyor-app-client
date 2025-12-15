"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from 'react-icons/fi';
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from 'react';
import AccessOption from "./AccessOption";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const menu = [
    {name:"Home",href:"/"},
    {name:"Abot",href:"/about"},
  ]
  const [showNavBar,setShowNavBar] = useState(false);
  const [showAccess,setShowAccess] = useState(false);

  useEffect(()=>{
  },[showNavBar,showAccess]);

  return (
    <div className="bg-white shadow-md mt-2 rounded-full max-w-6xl w-full py-3 px-5 flex justify-between items-center">
        <AccessOption showAccess={showAccess} setShowAccess={setShowAccess}/>
        <MobileNavbar showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
        <Image src={"/ANSS.svg"} alt="logo" width={50} height={500} className="max-sm:inline lg:hidden"/>
        <h3 className="font-bold text-md max-sm:hidden text-orange-600 flex items-center gap-2"><Image src={"/ANSS.svg"} alt="logo" width={50} height={20}/>Surveyor Hub</h3>
        <nav className="flex items-center gap-4 max-sm:hidden">
            <Link href={"/"} className={pathname === menu[0].href ? "text-orange-600" : "text-black"}>Home</Link>
            <Link href={"/about"}  className={pathname === menu[1].href ? "text-orange-600" : "text-black"}>About Us</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/how-it-works"}>How it works</Link>
        </nav>
        <div className="flex items-center gap-4">
            <button onClick={()=>showNavBar ? setShowNavBar(false) : setShowNavBar(true)} className="lg:hidden"><FiMenu size={17}/></button>
            <Link href={"/surveyor/dashboard"} className="bg-gray-50 py-2 px-5 rounded-full hover:bg-gray-100 max-sm:hidden">Join as Surveyor</Link>
            <Link href={"/client/dashboard"} className="bg-orange-600 text-white py-2 px-5 rounded-full hover:bg-orange-700 max-sm:hidden">Sign In</Link>
            
            {/* <button onClick={()=>showAccess ? setShowAccess(false) : setShowAccess(true)} className="bg-orange-600 text-white py-2 px-5 rounded-full hover:bg-orange-700 max-sm:hidden">Sign in</button> */}
        </div>
    </div>
  )
}
