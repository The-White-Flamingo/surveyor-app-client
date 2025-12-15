"use client";
import { FaForward, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gray-100 w-full max-sm:px-1 max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col flex justify-center">
        <div className="flex items-center justify-between gap-3 max-w-6xl w-full mt-10 mb-10 max-sm:flex max-sm:flex-col">
            
            <div className="w-1/2 max-sm:w-full flex-1 flex flex-col gap-2 p-4">
            <span className="text-sm">About us</span>
            <h1 className="text-3xl font-semibold">
                Turning Visions Into Reality, One Survey At A Time
            </h1>
            <p className="text-gray-500 text-sm">
                We connect clients with professional land surveyors for precise mapping,
                boundary identification, and topolographic surveys, ensuring accuracy, and efficiency.
            </p>
            <div className="flex flex-col gap-3">
                <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:items-start flex items-center gap-5 font-semibold text-sm">
                <span><FaForward size={10} className="inline mr-2"/>Certified Professionals</span>
                <span><FaForward size={10} className="inline mr-2"/>Cutting-Edge Technology</span>
                </div>
                <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:items-start flex items-center gap-5 font-semibold text-sm">
                <span><FaForward size={10} className="inline mr-2"/>Fast & Reliable Service</span>
                <span><FaForward size={10} className="inline mr-2"/>Transparent Pricing</span>
                </div>
                {/* <button 
                className="bg-orange-600 self-start text-white py-2 px-4 rounded-full hover:bg-orange-700">
                    Join Today 
                    <FaArrowRight size={15} className="inline ml-2"/>
                </button> */}
                <Link href={"/client/dashboard"}
                className="bg-orange-600 self-start text-white py-2 px-4 rounded-full hover:bg-orange-700">
                    Join Today 
                    <FaArrowRight size={15} className="inline ml-2"/>
                </Link>
            </div>
            </div>
            
            <div className="w-1/2 max-sm:w-full">
            <Image src={"/Container (8).png"} alt="" width={800} height={800}/>
            </div>
        
        </div>
    </div>
  )
}
