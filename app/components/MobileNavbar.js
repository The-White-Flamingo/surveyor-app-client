"use client";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";


export default function MobileNavbar({showNavBar,setShowNavBar}) {
  return (
    <div style={(showNavBar) ? {background: "rgba(0,0,0,0.6)",top:"0",left:"0"} : {display:"none"}} className="w-full max-h-screen overflow-y-auto absolute z-10 flex flex-col items-center">
        <div className="w-3/4 flex-1 self-end bg-black text-white flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-orange-600">
                    Surveyor Hub
                </h3>
                <button onClick={()=>showNavBar ? setShowNavBar(false) : setShowNavBar(true)} className="p-4 bg-orange-600 text-white rounded-full"><FaTimes size={17}/></button>
            </div>

            <nav className="flex flex-col gap-3">
                <Link href={"/"} className="border-b-2 border-white p-3">Home</Link>
                <Link href={"/about"} className="border-b-2 border-white p-3">About Us</Link>
                <Link href={"/"} className="border-b-2 border-white p-3">Services</Link>
                <Link href={"/"} className="border-b-2 border-white p-3">How It Works</Link>
            </nav>
            <Link href={"/surveyor-signup"}>Join as a Surveyor</Link>
            <Link href={"/signup"} className="py-2 px-4 rounded-full border-white border bg-orange-600 text-white hover:bg-orange-700 text-center">Request a survey <FaArrowRight size={17} className="inline ml-3"/></Link>

            <div className="flex flex-col gap-4">
                <h3 className="text-orange-600 font-bold">Contact Info</h3>
                <div className="flex items-center gap-4 p-2">
                    <span className="p-4 rounded-full bg-slate-800 text-white">
                        <FiMapPin size={17}/>
                    </span>
                    <span>
                        6391 Elgin St. Celina Delware 10299
                    </span>
                </div>
                <div className="flex items-center gap-4 p-2">
                    <span className="p-4 rounded-full bg-slate-800 text-white">
                        <FiPhone size={17}/>
                    </span>
                    <span>
                        (+233) 555-0104
                    </span>
                </div>
                <div className="flex items-center gap-4 p-2">
                    <span className="p-4 rounded-full bg-slate-800 text-white">
                        <FiMail size={17}/>
                    </span>
                    <span>
                        fullname@gmail.com
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="p-4 rounded-full bg-gray-100 text-black">
                    <FiFacebook size={17}/>
                </span>
                <span className="p-4 rounded-full bg-gray-100 text-black">
                    <FiTwitter size={17}/>
                </span>
                <span className="p-4 rounded-full bg-gray-100 text-black">
                    <FiLinkedin size={17}/>
                </span>
            </div>
        </div>
    </div>
  )
}
