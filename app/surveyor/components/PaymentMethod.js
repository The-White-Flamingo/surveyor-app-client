"use client";
import Link from "next/link";
import { FaArrowRight, FaMobileAlt } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
export default function PaymentMethod() {
  return (
    <div className="w-64 max-sm:w-full bg-white rounded-lg self-start max-sm:flex max-sm:flex-col">
        <h3 className="font-semibold p-2">Payment methods</h3>
        <div className="border-t-2 border-gray-200 p-2 flex flex-col gap-4">
            <Link href={"/surveyor/mobile-payment"} className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 flex items-center justify-between"><span className="text-sm font-semibold flex items-center gap-3"><FaMobileAlt className="inline" size={17}/>Setup mobile money</span> <FaArrowRight size={10}/></Link>
            <Link href={"/surveyor/bank-payment"} className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 flex items-center justify-between"><span className="text-sm font-semibold flex items-center gap-3"><AiFillBank className="inline" size={17}/>Setup Bank account</span> <FaArrowRight size={10}/></Link>
        </div>
        <p className="text-sm text-gray-400 p-2">
            Choose any payment method to receive your earned amount direct to your
            desired account. Leaving this empty or unchecked will cause delay or no
            payments. For further info read our details
        </p>
        <div className="px-2">
            <Link href={"/terms-and-conditions"} className="text-blue-600 text-sm">Terms and Conditions</Link>
            <span className="ml-1 mr-1">and</span>
            <Link href={"/privacy-policy"} className="text-blue-600 text-sm">Privacy Policy</Link>
        </div>
        
    </div>
  )
}
