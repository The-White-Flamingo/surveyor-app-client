"use client";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="w-full p-5 flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-6xl w-full gap-4 mt-10 mb-10">
            <span className="text-sm">LATEST PROJECT</span>
            <h1 className="font-bold text-3xl">Checkout Some Of Our Completed Orders</h1>
            <div className="flex items-center gap-4 mt-10">
                <div className="flex flex-col gap-3 w-1/2 max-sm:w-full">
                    <Image src={"/Container (7).png"} alt="" width={800} height={800} />
                    <Image src={"/Container (6).png"} alt="" width={800} height={800} />
                </div>
                <div className="flex flex-col gap-3 w-1/2 max-sm:w-full">
                    <Image src={"/Container (4).png"} alt="" width={800} height={1200} />
                    <Image src={"/Container (5).png"} alt="" width={800} height={400} />
                </div>
            </div>
        </div>

    </div>
  )
}
