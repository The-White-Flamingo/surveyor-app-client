"use client"
import { FiSettings } from "react-icons/fi"
import { FaIdCard } from "react-icons/fa"
import { FiUser } from "react-icons/fi"

export default function ProfileStatus() {
  return (
    <div className="bg-white text-md flex flex-col gap-3 rounded-lg w-56 max-sm:w-full py-3 px-2 mt-5 self-start">
        <button className="py-1 px-2 hover:bg-gray-100 rounded-md flex items-center gap-2"><FiUser size={18}/><span>Profile settings</span></button>
        <button className="py-1 px-2 hover:bg-gray-100 rounded-md flex items-center gap-2"><FaIdCard size={18}/><span>Billing information</span></button>
        <button className="py-1 px-2 hover:bg-gray-100 rounded-md flex items-center gap-2"><FiSettings size={18} className=""/><span>Account settings</span></button>
    </div>
  )
}
