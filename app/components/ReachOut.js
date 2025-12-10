"use client";
import { FaLandmark, FaPhone, FaArrowRight } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function ReachOut() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center bg-gray-50">
        <div className="p-4 flex w-5xl gap-4 mt-10 mb-10 bg-black p-10 rounded-lg max-sm:flex max-sm:flex-col max-sm:w-full max-sm:py-4 max-sm:px-2">
            <form className="rounded-lg p-10 text-white bg-gray-800 flex flex-col gap-5 max-sm:w-full max-md:self-start max-sm:p-4">
                <h3 className="font-semibold">Send Message</h3>
                <div className="flex items center justify-between gap-5 max-sm:flex max-sm:flex-col">
                    <input type="text" className="p-3 border text-white border-gray-100 rounded-full" placeholder="Your Name"/>
                    <input type="text" className="p-3 border text-white border-gray-100 rounded-full" placeholder="Your Email"/>
                </div>
                <div className="flex items center justify-between gap-5 max-sm:flex max-sm:flex-col">
                    <input type="text" className="p-3 border border-gray-100 rounded-full" placeholder="Phone Number"/>
                    <select type="text" className="w-1/2 p-3 border border-gray-300 rounded-full">
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </div>

                <textarea name="" id="" className="p-3 h-32 rounded-2xl border border-gray-100 w-full">
                    {/* Message here.. */}
                </textarea>

                <button type="submit" className="w-full rounded-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-center flex items-center gap-3 justify-center">Send Now <FaArrowRight className="block" size={18}/></button>
            </form>

            <div className="text-white flex flex-col gap-5 p-4">
                <h3 className="font-semibold text-3xl">Reach Out To Us Anytime</h3>
                <span className="text-sm text-gray-100 block mb-2">We are active 24/7 and will respond to you whenever you reach out</span>
                <div className="flex items-center gap-8 max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
                    <div className="flex flex-col self-start gap-4">
                        <div className="bg-gray-800 rounded-lg flex gap-4 items-center p-4">
                            <span className="w-12 rounded-full block bg-slate-700 p-4">
                                <FaLandmark size={18} className=" text-white"/>
                            </span>
                            <span className="flex items-center gap-5"><b>Address</b> 211 Something city, country</span>
                        </div>

                        <div className="bg-gray-800 rounded-lg flex gap-4 items-center p-4">
                            <span className="w-12 rounded-full block bg-slate-700 p-4">
                                <FaPhone size={18} className=" text-white"/>
                            </span>
                            <span className="flex items-center gap-5"><b>Number</b> (211) 555-0119</span>
                        </div>

                        <div className="bg-gray-800 rounded-lg flex gap-4 items-center p-4">
                            <span className="w-12 rounded-full block bg-slate-700 p-4">
                                <FiMail size={18} className=" text-white"/>
                            </span>
                            <span className="flex items-center gap-5"><b>E-mail</b> something@gmail.com</span>
                        </div>
                    </div>

                    
                </div>
            </div>
        
        </div>
    </div>
  )
}
