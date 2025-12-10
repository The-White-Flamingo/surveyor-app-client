"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiBell } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiMenu } from 'react-icons/fi';
import MobileSideBar from './MobileSideBar';
import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";

export default function Topbar() {
    const { data:surveyor} = SurveyorAuth();
    const [showNavBar,setShowNavBar] = useState(false);

    console.log("Surveyor details in topbar: ",surveyor)

    useEffect(()=>{
    },[showNavBar])

    const pathname = usePathname();
    const menu = [
    {name:"Dashboard",href:"/surveyor/dashboard"},
    {name:"My Surveys",href:"/surveyor/surveys"},
    {name:"Request Survey",href:"/surveyor/surveys/request-survey"},
    {name:"My Survey",href:"/surveyor/surveys/survey"},
    {name:"Payments",href:"/surveyor/payments"},
    {name:"Messages",href:"/surveyor/messages"},
    {name:"Help",href:"/surveyor/help"},
    {name:"Account",href:"/surveyor/account"},
    // {name:"Disputes",href:"/surveyor/disputes"},
    {name:"Notifications",href:"/surveyor/notifications"}
]
  return (
    <>
      <MobileSideBar showNavBar={showNavBar} setShowNavBar={setShowNavBar}/>
      
      <div className="bg-white h-14 px-5 py-2 flex items-center justify-between max-sm:flex">
          <h3 className="text-xl font-bold max-sm:hidden max-md:hidden">
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

          <div className="flex items-center gap-2 max-sm:self-end">
            {/* notification icon */}
            
            <span className="w-8 h-8 rounded-lg max-sm:w-8 max-sm:h-8 max-sm:rounded-lg max-sm:p-1 bg-amber-100 text-center flex justify-center items-center"><FiBell size={20}/></span>
            {surveyor.surveyor.profilePhoto ? (<>
              <Image 
                className=""
                src={surveyor.surveyor.profilePhoto}
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
            </>)}

            {surveyor.surveyor ? (
              <>
              <div className="flex flex-col">
                <span className="font-semibold">{surveyor.surveyor.firstName} {surveyor.surveyor.lastName}</span>
                <span className="text-sm text-gray-500">{surveyor.surveyor.role}</span>
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

            {/* <Image 
              className=""
              src="/profile1.png"
              alt="Profile picture"
              width={40}
              height={40}
              priority
            /> */}

            {/* <div className="flex flex-col">
              <span className="font-semibold">{surveyor.userfirstName ? (<>{user.user.firstName}</>):(<>Name</>)}</span>
              <span className="text-sm text-gray-500">{user.user.role ? (<>{user.user.role}</>):(<>Role</>)}</span>
            </div>
            <FiChevronDown size={18} /> */}

          </div>
      </div>
    </>
  )
}
