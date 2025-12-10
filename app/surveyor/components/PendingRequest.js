"use client";
import { FaRepeat } from "react-icons/fa6";
import Link from "next/link";

export default function PendingRequest() {
  return (
        <div className="bg-white w-64 max-sm:w-full max-md:w-full max-sm:py-3 max-sm:px-5 rounded-md mt-3 p-5">
            <div className="flex flex-col items-center gap-2">
                <span className="bg-orange-100 p-2 rounded-md text-orange-300"><FaRepeat size={30}/></span>
                <span className="text-gray-600 text-sm">Pending Request</span>
                <span className="font-semibold text-lg">0</span>
                <Link href={"/surveyor/requested-surveyors"} className="bg-gray-100 rounded-full py-1 px-4 text-sm hover:bg-gray-300">View</Link>
            </div>
        </div>
  )
}
