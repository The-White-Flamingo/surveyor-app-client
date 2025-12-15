import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutService() {
  return (
    <div className="bg-white w-full flex flex-col gap-4 p-4 items-center justify-center max-w-full">
        <span className="text-sm text-center mt-10">SERVICE CATEGORY</span>
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        
        <div className="flex items-center justify-between gap-6 mt-10 mb-10 max-w-full max-sm:w-full max-sm:flex max-sm:flex-col max-sm:p-2">
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container.png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Sign Up</h3>
            <p className="text-gray-500 p-2 text-sm">
                Create an account as a client or surveyor.
            </p>
            </div>
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container (1).png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Request/Accept Jobs</h3>
            <p className="text-gray-500 p-2 text-sm">
                Clients request surveyors. Surveyors get assigned jobs in their area.
            </p>
            </div>
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container (2).png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Complete and Deliver</h3>
            <p className="text-gray-500 p-2 text-sm">
                Receive your processed plans quickly and securely.
            </p>
            </div>
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container (3).png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Pay on Completion</h3>
            <p className="text-gray-500 p-2 text-sm">
                Pay when your service is confirmed as done.
            </p>
            </div>
        </div>

        <div className="flex items-center gap-4 max-sm:flex max-sm:flex-col mb-20">
            <Link href={"/client/dashboard"} className="max-sm:w-full max-sm:flex max-sm:justify-center rounded-full py-2 px-4 flex items-center gap-3 bg-orange-600 text-white hover:bg-orange-700">Request a survey<FaArrowRight className="inline" size={15}/></Link>
            <Link href={"/surveyor/dashboard"} className="max-sm:w-full max-sm:flex max-sm:justify-center rounded-full py-2 px-4 flex items-center gap-3 border border-gray-200 hover:bg-gray-100">Sign up as a surveyor<FaArrowRight className="inline" size={15}/></Link>
        </div>
    </div>
  )
}
