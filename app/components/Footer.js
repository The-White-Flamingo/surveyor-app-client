"use client";
import { FaTelegram, FaPinterest } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-slate-900 flex flex-col items-center">
        <div className="w-5xl max-sm:w-full">
            
            <div className="border-b-2 border-slate-500 py-4 flex gap-3 items-center justify-end max-sm:flex max-sm:justify-center">
                <span className="p-4 rounded-full bg-gray-600 text-white">
                    <FiFacebook size={17} className="inline"/>
                </span>
                <span className="p-4 rounded-full bg-gray-600 text-white">
                    <FiTwitter size={17} className="inline"/>
                </span>
                <span className="p-4 rounded-full bg-gray-600 text-white">
                    <FiLinkedin size={17} className="inline"/>
                </span>
                <span className="p-4 rounded-full bg-gray-600 text-white">
                    <FaPinterest size={17} className="inline"/>
                </span>
            </div>

            <div className="flex items-center justify-between mt-10 mb-10 max-sm:flex max-sm:flex-col max-sm:items-center">
                <div className="flex flex-col gap-3 max-sm:flex max-sm:items-center max-sm:justify-between">
                    <h1 className="text-3xl font-bold text-white">Let's Work Together</h1>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 p-2">
                            <span className="p-4 rounded-full bg-slate-800 text-white">
                                <FiMapPin size={17}/>
                            </span>
                            <span className="text-white">
                                6391 Elgin St. Celina Delware 10299
                            </span>
                        </div>
                        <div className="flex items-center gap-4 p-2">
                            <span className="p-4 rounded-full bg-slate-800 text-white">
                                <FiPhone size={17}/>
                            </span>
                            <span className="text-white">
                                (+233) 555-0104
                            </span>
                        </div>
                        <div className="flex items-center gap-4 p-2">
                            <span className="p-4 rounded-full bg-slate-800 text-white">
                                <FiMail size={17}/>
                            </span>
                            <span className="text-white">
                                fullname@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className="self-start max-sm:self-center mb-5 flex flex-col gap-3 max-sm:flex max-sm:items-center max-sm:justify-between">
                    <h3 className="font-semibold text-white">Pages</h3>
                    <nav className="text-gray-500 flex flex-col max-sm:flex max-sm:items-center gap-3">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"}>About</Link>
                        <Link href={"/"}>How it works</Link>
                        <Link href={"/"}>Services</Link>
                    </nav>
                </div>

                <div className="self-start flex flex-col gap-3 max-sm:flex max-sm:items-center max-sm:justify-between">
                    <h3 className="font-semibold text-white">Newsletter</h3>
                    <p className="py-4 text-gray-500 max-sm:p-2">
                        It is a long established fact that a reader will distracted
                    </p>

                    <input type="text" className="border border-blue-800 p-4 rounded-full text-gray-500" placeholder="Enter email address"/>
                </div>

            </div>

        </div>

        <div className="w-full border-t-2 border-gray-500 flex items-center justify-between max-sm:flex max-sm:flex-col py-2 px-4">
            <span className="text-gray-500 text-sm">@ Surveyor Hub 2025 | All Rights Reserved</span>
            <span className="text-gray-500 text-sm">Terms &amp; Condition. Privacy Policy Contact Us</span>
        </div>

    </div>
  )
}
