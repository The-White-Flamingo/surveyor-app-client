"use client"
import React from 'react'
import Image from 'next/image'
import { FiChevronDown } from "react-icons/fi";


export default function RecentTransaction() {
  return (
    <div className="bg-white w-80 max-md:w-full max-sm:w-full max-sm:py-3 max-sm:px-5 rounded-md mt-3 px-3 py-2">
        <div className="flex justify-between mb-3">
            <h3>Recent Transaction</h3>
            <FiChevronDown size={18} />
        </div>

        <div className="flex items-center gap-2 pt-3 pb-5 border-b-2 border-gray-300">
            <Image src="/profile1.png" alt="Profile picture" className="w-10 h-10" width={40} height={40}/>
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between font-semibold">
                    <span>Name</span>
                    <span className="text-green-600">$200</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>Surveyor</span>
                    <span>02:15 PM | 04/04/26</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2 pt-3 pb-4">
            <Image src="/profile1.png" alt="Profile picture" className="w-10 h-10" width={40} height={40}/>
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between font-semibold">
                    <span>Name</span>
                    <span className="text-green-600">$200</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>Surveyor</span>
                    <span>02:15 PM | 04/04/26</span>
                </div>
            </div>
        </div>
    </div>
  )
}
