"use client";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="bg-white w-full flex flex-col items-center gap-4">
        <div className="flex flex-col mt-20 mb-10 items-center gap-2">
            <span className="text-sm">CLIENTS TESTIMONIAL</span>
            <h1 className="text-3xl leading-7 tracking-wide text-center">
                See What Our Clients Are Saying
            </h1>
        </div>
        
        <div className="flex items-center justify-between gap-4 w-5xl max-sm:w-full mb-20 max-sm:flex-col max-sm:flex max-sm:p-2">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="bg-orange-600 text-white p-4 rounded-full">
                        <FaQuoteLeft size={30} className="inline"/>
                    </span>

                    <span className="flex items-center gap-1 text-yellow-400">
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold tracking-wide text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.
                    </h3>
                    <p className="text-slate-600 text-sm leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempora minima dolores saepe odio, iste temporibus laudantium? Ducimus, laudantium praesentium nihil ipsum alias unde exercitationem omnis. Et incidunt accusantium consequuntur?
                    </p>

                    <div className="flex items-center gap-3">
                        <Image src={"/tesit-author-icon-2.png.png"} alt="" width={50} height={50}/>
                        <span className="font-semibold text-sm">Jon Haris</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="bg-orange-600 text-white p-4 rounded-full">
                        <FaQuoteLeft size={30} className="inline"/>
                    </span>

                    <span className="flex items-center gap-1 text-yellow-400">
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                        <FaStar size={17} className="inline"/>
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold tracking-wide text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.
                    </h3>
                    <p className="text-slate-600 text-sm leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempora minima dolores saepe odio, iste temporibus laudantium? Ducimus, laudantium praesentium nihil ipsum alias unde exercitationem omnis. Et incidunt accusantium consequuntur?
                    </p>

                    <div className="flex items-center gap-3">
                        <Image src={"/tesit-author-icon-1.png.png"} alt="" width={50} height={50}/>
                        <span className="font-semibold text-sm">Jon Haris</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
