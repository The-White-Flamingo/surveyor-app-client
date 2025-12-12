"use client"
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function Completed() {
  return (
    <div className="bg-white w-72 max-sm:w-full max-md:w-full max-sm:py-3 max-sm:px-5 rounded-md mt-3 p-5">
        <div className="flex flex-col items-center gap-2">
            <span className="bg-green-100 p-2 rounded-md text-green-300"><FaCheck size={30}/></span>
            <span className="text-gray-600 text-sm">Completed Projects</span>
            <span className="font-semibold text-lg">0</span>
            <Link href={"/surveyor/surveys"} className="bg-gray-100 rounded-full py-1 px-4 text-sm hover:bg-gray-300">View</Link>
        </div>
    </div>
  )
}
