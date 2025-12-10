import React from 'react'
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center max-w-full">
        <span className="text-sm text-center mt-10">SERVICE CATEGORY</span>
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        
        <div className="flex items-center justify-between gap-6 mt-10 mb-20 max-w-full max-sm:w-full max-sm:flex max-sm:flex-col max-sm:p-2">
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container.png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Sign Up</h3>
            <p className="text-gray-500 p-2 text-sm">
                Create an account as a client or surveyor.
            </p>
            </div>
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container (1).png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Request/Accept Jobs</h3>
            <p className="text-gray-500 p-2 text-sm">
                Clients request surveyors. Surveyors get assigned jobs in their area.
            </p>
            </div>
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container (2).png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Complete and Deliver</h3>
            <p className="text-gray-500 p-2 text-sm">
                Receive your processed plans quickly and securely.
            </p>
            </div>
            <div className="shadow-md w-56 p-4 rounded-lg">
            <Image src={"/Container (3).png"} alt="" width={200} height={150} />
            <h3 className="font-semibold text-lg p-2">Pay on Completion</h3>
            <p className="text-gray-500 p-2 text-sm">
                Pay when your service is confirmed as done.
            </p>
            </div>
        </div>
    </div>
  )
}
