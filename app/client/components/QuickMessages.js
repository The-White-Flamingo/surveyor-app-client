"use client"
import React from 'react'
import Image from 'next/image'
import { FiChevronDown } from "react-icons/fi";


export default function QuickMessages() {
  return (
    <div className="bg-white w-80 max-md:w-full max-sm:w-full max-sm:py-3 max-sm:px-5 rounded-md mt-3 px-3 py-2">
        <div className="flex justify-between mb-3">
            <h3>Quick Message</h3>
            <FiChevronDown size={18} />
        </div>

        <div className="flex items-center gap-2 pt-2 pb-4 border-b-2 border-gray-300">
            <Image src="/profile1.png" alt="Profile picture" className="w-10 h-10" width={40} height={40}/>
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between font-semibold">
                    <span>Name</span>
                    <span>Now</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 items-center">
                    <span>Im working on it should be ready</span>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full">5</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2 pt-3 pb-4">
            <Image src="/profile1.png" alt="Profile picture" className="w-10 h-10" width={40} height={40}/>
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between font-semibold">
                    <span>Name</span>
                    <span>05 Nov</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>Hope you like it</span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}
