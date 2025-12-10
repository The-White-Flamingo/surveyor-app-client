"use client";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";
// import "./style.css";

export default function AboutHero() {
  return (
    <div className="about-hero w-full flex flex-col max-sm:min-h-4xl relative">
        <div style={{left:"10%",top:"25%"}} className="w-4xl m-auto absolute flex flex-col max-sm:w-full gap-4">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="font-bold flex items-center gap-1">
                <span>Home</span><span><FaGreaterThan size={15} className="inline text-orange-600"/></span><span>About</span>
            </p>
        </div>
        <div className="w-full self-end">
            <Image src={"/gettyimages-502558371-612x612 1.png"} alt="" width={2000} height={400}/>
        </div>

    </div>
  )
}
