"use client"
import Image from "next/image";
import Link from "next/link";

import { FaLandmark } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiList } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export default function AssignedSurveyor() {
  const assigned = false;
  return (
   <>
    {assigned ? (
      <div className="bg-white w-56 max-sm:w-full p-4 rounded-lg mt-5 flex justify-center items-center h-48">
        <div className="flex flex-col items-center">
          <Image src="/profile1.png" alt="profile-pic" width={100} height={100}/>
          <span className="text-sm text-gray-400">No surveyor assigned yet</span>
        </div>
      </div>
    ) : (
      <div className="bg-white w-56 max-sm:w-full p-4 rounded-lg mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Image src="/profile1.png" alt="profile-pic" className="" width={50} height={50}/>
          <div className="flex flex-col">
            <span className="text-sm">Land Surveyor</span>
            <span className="text-lg font-bold">Christell Tawiah</span>
            <span className="text-sm">Starting from <b>$90/hr</b></span>
          </div>
        </div>

        <span className="flex items-center gap-2">
          <span className="text-amber-400"><AiFillStar size={18}/></span> <span>5.0 (4 reviews)</span>
        </span>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 flex items-center gap-2"><span className="bg-purple-100 p-1 rounded-md text-purple-300"><FaLandmark size={18}/></span> <span>Location</span></span>
            <span className="font-bold">Ghana,Accra</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 flex items-center gap-2"><span className="bg-emerald-100 p-1 rounded-md text-emerald-300"><FiClock size={18}/></span> <span>Response time</span></span>
            <span className="font-bold">1hr</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 flex items-center gap-2"><span className="p-1 rounded-md bg-amber-100 text-amber-300"><FiGlobe size={18}/> </span> <span>Languages</span></span>
            <span className="font-bold">English,Twi</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 flex items-center gap-2"><span className="p-1 rounded-md bg-red-100 text-red-300"><FiList size={18}/> </span> <span>Experience</span></span>
            <span className="font-bold">5+ Years</span>
          </div>
          <Link href={"/client/messages"} className="px-4 py-2 rounded-lg text-white text-center bg-orange-600 hover:bg-orange-700">Send Message</Link>
        </div>
      </div>
    )}
   </> 
  )
}

{/* <div className="bg-white w-56 max-sm:w-full p-4 rounded-lg mt-5 flex justify-center items-center h-48">
        {assigned ? (
          <div>
            <img src="../profile1.png" alt="profile-pic" />
            <span className="text-sm text-gray-400">No surveyor assigned yet</span>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3">
              <img src="../profile1.png" alt="profile-pic" className="w-8 h-8"/>
              <div className="flex flex-col items-center">
                <span className="font-bold text-sm">Land Surveyor</span>
                <span className="font-bold text-lg">Christell Tawiah</span>
                <span className="font-bold text-sm">starting from $90/hr</span>
              </div>
            </div>
          </div>
        )}
        {/* <div>
            <img src="../profile1.png" alt="profile-pic" />
            <span className="text-sm text-gray-400">No surveyor assigned yet</span>
        </div> *
    </div> */}
