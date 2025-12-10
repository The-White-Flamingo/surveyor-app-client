"use client";
import { FaStar, FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Innovation() {
  return (
    <div className="w-full flex flex-col items-center bg-black text-white">
        <div className="w-4xl flex flex-col max-sm:w-full gap-4 mt-20 mb-20 max-sm:p-2">
            <div className="flex items-center justify-between max-sm:flex max-sm:flex-col">
                <div className="w-96 max-sm:w-full">
                    <span className="text-sm">OUR CEO</span>
                    <h1 className="text-3xl font-bold">
                        Innovation in Surveying Tradition In Service
                    </h1>
                </div>
                <div className="flex items-center gap-2 max-sm:hidden">
                    <span className="p-4 rounded-full bg-amber-800 text-white">
                        <FaArrowLeft size={17}/>
                    </span>
                    <span className="p-4 rounded-full bg-amber-800 text-white">
                        <FaArrowRight size={17}/>
                    </span>
                </div>
            </div>

            <div className="bg-orange-600 rounded-2xl flex items-center gap-3 max-sm:flex max-sm:flex-col">
                <div className="flex flex-col gap-4 flex-1 p-5">
                    <div className="flex justify-between items-center p-5 mt-5">
                        <span className=""><FaQuoteRight size={30} className="inline"/></span>
                        <span className="text-white flex gap-1 items-center">
                            <FaStar size={17} className="inline"/>
                            <FaStar size={17} className="inline"/>
                            <FaStar size={17} className="inline"/>
                            <FaStar size={17} className="inline"/>
                            <FaStar size={17} className="inline"/>
                        </span>
                    </div>
                    <div className="flex flex-col gap-4 p-5">                        
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold tracking-wide">
                                Marin Murphy
                            </h4>
                            <span className="text-sm">CEO</span>
                        </div>
                        
                        <p className="leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio sit nam illum. Dicta enim, ipsa, labore sint perferendis rem officiis vitae beatae distinctio dolorem incidunt. Aliquam suscipit numquam repudiandae!
                            {/* Construction is the art of building structures from
                            home skyscraper material like concrete steel, and wood
                            the main thing like concrete steel and wood. */}
                        </p>
                    </div>
                </div>
                <div className="mr-10 mt-5">
                    <Image src={"/testimonialThumb2_1.png.png"} alt="" width={300} height={300}/>
                </div>
            </div>

        </div>

    </div>
  )
}
