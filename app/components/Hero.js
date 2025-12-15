"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="max-w-full w-full flex items-center justify-center max-sm:flex max-sm:flex-col mt-10">
        <div className="flex items-center justify-end gap-4 max-w-6xl w-full max-sm:flex max-sm:flex-col">
            <div className="w-1/2 p-4 flex gap-4 flex-1 max-sm:w-full">
                <div className="w-14 flex flex-col gap-3 justify-center max-sm:hidden">
                    <span className="rounded-full p-4 bg-gray-100 tex-black">
                        <FiFacebook size={17} />
                    </span>
                    <span className="rounded-full p-4 bg-gray-100 tex-black">
                        <FiTwitter size={17}/>
                    </span>
                    <span className="rounded-full p-4 bg-gray-100 tex-black">
                        <FiLinkedin size={17} />
                    </span>

                </div>
                <div className="flex flex-col gap-5">    
                    <p className="text-sm text-gray-600">PRECISION AT WORK</p>
                    <h1 className="text-6xl font-semibold">
                        Simplify Land <span className="text-orange-600">Surveys</span> with just a click
                    </h1>
                    <p className="text-md text-gray-600">
                        Connect with certified surveyors to process
                        faster, track progress in real-time, and ensure payments-all in one place.
                    </p>   
                    <div className="flex items-center gap-4 max-sm:flex max-sm:flex-col">
                        <Link href={"/client/dashboard"} className="max-sm:w-full max-sm:flex max-sm:justify-center rounded-full py-2 px-4 flex items-center gap-3 bg-orange-600 text-white hover:bg-orange-700">Request a survey<FaArrowRight className="inline" size={15}/></Link>
                        <Link href={"/surveyor/dashboard"} className="max-sm:w-full max-sm:flex max-sm:justify-center rounded-full py-2 px-4 flex items-center gap-3 border border-gray-200 hover:bg-gray-100">Sign up as a surveyor<FaArrowRight className="inline" size={15}/></Link>
                    </div> 
                </div>
            </div>
            
            <div className="self-end">
                <Image src={"/Group 114.png"} alt="" width={400} height={400}/>
            </div>
        </div>
    </div>
  )
}
