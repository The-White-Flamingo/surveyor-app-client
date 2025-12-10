"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white w-full flex items-center justify-center max-sm:flex max-sm:flex-col">
        <div className="w-4xl max-sm:w-full flex items-center gap-5 mt-10 mb-20 max-sm:flex max-sm:flex-col max-sm:p-2">
            <div className="flex items-center gap-3">
                <Image src={"/about1.png"} alt="" width={200} height={400}/>
                <div className="flex flex-col gap-3">
                    <Image src={"/about2.png"} alt="" width={200} height={400}/>
                    <div className="bg-orange-600 text-white rounded-3xl p-5 text-center flex flex-col items-center gap-3">
                        <h1 className="text-2xl font-bold">10</h1>
                        <p>years of experience</p>
                    </div>
                </div>

            </div>
            <div className="flex-1 flex flex-col gap-3 mt-10 mb-20">
                <h3 className="font-bold text-2xl">What We Are About</h3>
                <p className="text-sm text-gray-600 leading-7">
                    At Surveyor's Hub, we are committed to making land
                    surveying seamless, transparet, and accessible to everyone.
                    Whether you're a landowner looking for a trusted surveyor or a
                    professional surveyor seeking reliable clients, our platform bridges
                    the gap-ensurin a smooth, secure, and efficient process.
                </p>
            </div>
        </div>
    </div>
  )
}
