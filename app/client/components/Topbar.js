"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiBell } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiMenu } from 'react-icons/fi';
import MobileSideBar from './MobileSideBar';
import useAuth from '../../hooks/clientHooks/useAuth';
import Link from "next/link";
import SearchBar from "./SearchBar";
// import LanguagueOption from "./LanguagueOption";

export default function Topbar() {
    const [showNavBar,setShowNavBar] = useState(false);
    const { data: user, isLoading } = useAuth();

    console.log(user.user);
    useEffect(()=>{
    },[showNavBar])

    const pathname = usePathname();
    const menu = [
    {name:"Dashboard",href:"/client/dashboard"},
    {name:"My Surveys",href:"/client/surveys"},
    {name:"Request Survey",href:"/client/surveys/request-survey"},
    {name:"My Survey",href:"/client/surveys/survey"},
    {name:"Payments",href:"/client/payments"},
    {name:"Messages",href:"/client/messages"},
    {name:"Help",href:"/client/help"},
    {name:"Account",href:"/client/account"},
    {name:"Disputes",href:"/client/disputes"},
    {name:"Notifications",href:"/client/notifications"}
]
  return (
    <>
      <MobileSideBar showNavBar={showNavBar} setShowNavBar={setShowNavBar}/>
      
      <div className="bg-white h-14 px-5 py-2 flex items-center justify-between max-sm:flex">
          <h3 className="text-xl font-bold max-sm:hidden max-md:hidden max-lg:hidden">
          {
              menu.map((item)=>(
                  pathname === item.href ? (
                      <>{item.name}</>
                  ) : (
                      <>{null}</>
                  )
              ))    
          }</h3>

          <button 
          onClick={()=>showNavBar ? setShowNavBar(false) : setShowNavBar(true)} 
          className='lg:hidden md:self-start sm:self-start bg-orange-600 p-2 rounded-lg text-white hover:bg-orange-700 cursor-pointer'>
            <FiMenu size={20}/>
          </button>

          <SearchBar />

          <div className="flex items-center gap-2 max-sm:self-end">
            {/* notification icon */}
            {/* <LanguagueOption /> */}
            
            <Link href={"/client/notifications"} className="w-8 h-8 rounded-lg max-sm:w-8 max-sm:h-8 max-sm:rounded-lg max-sm:p-1 bg-amber-100 text-center flex justify-center items-center"><FiBell size={20}/></Link>
            {user.user.profilePhoto ? (
              <Image 
                src={user.user.profilePhoto}
                alt="Profile picture"
                width={40}
                height={40}
                priority
                className="rounded-full"
              />
            ):(
              <Image 
                className=""
                src="/profile1.png"
                alt="Profile picture"
                width={40}
                height={40}
                priority
              />
            )}

            {user.user ? (
              <>
              <div className="flex flex-col">
                <span className="font-semibold">{user.user.firstName} {user.user.lastName}</span>
                <span className="text-sm text-gray-500">{user.user.role}</span>
              </div>
              <FiChevronDown size={18} />
              </>
            ):(
              <>
              <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span className="text-sm text-gray-500">Role</span>
              </div>
              <FiChevronDown size={18} />
              </>
            )}
            {/* {user.profilePhoto ? (<>
              <Image 
                className=""
                src={user.profilePhoto}
                alt="Profile picture"
                width={40}
                height={40}
                priority
              />
            </>) : (<>
              <Image 
                className=""
                src="/profile1.png"
                alt="Profile picture"
                width={40}
                height={40}
                priority
              />
            </>)} */}

            {/* <Image 
              className=""
              src="/profile1.png"
              alt="Profile picture"
              width={40}
              height={40}
              priority
            /> */}

            {/* {user ? (
              <>
              <div className="flex flex-col">
                <span className="font-semibold">{user.firstName}</span>
                <span className="text-sm text-gray-500">{user.role}</span>
              </div>
              <FiChevronDown size={18} />
              </>
            ): (
              <>
              <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span className="text-sm text-gray-500">Role</span>
              </div>
              <FiChevronDown size={18} />
              </>
            )} */}
            {/* <div className="flex flex-col">
              <span className="font-semibold">{user.firstName ? (<>{user.firstName}</>):(<>Name</>)}</span>
              <span className="text-sm text-gray-500">{user.role ? (<>{user.role}</>):(<>Role</>)}</span>
            </div>
            <FiChevronDown size={18} /> */}

          </div>
      </div>
    </>
  )
}
