"use client";

export default function Questions() {
  return (
    <div
     className="w-full flex justify-center">
        <div className="max-w-5xl max-sm:flex max-sm:flex-col max-sm:w-full mt-20 mb-20 max-sm:p-2">
            <div className="flex max-sm:flex max-sm:flex-col max-sm:gap-4 max-sm:w-full items-center justify-between mb-10">
                <h1 className="font-bold text-3xl w-1/2 max-sm:w-full p-2">Ask Us Some Questions</h1>
                <p className="text-sm text-gray-600 w-1/2 max-sm:w-full p-2">
                    Construction is the art of building structures from home 
                    skyscraper using materials like concrete steel.
                </p>

            </div>
            
            <div className="flex max-sm:flex max-sm:flex-col max-sm:w-full items-center justify-between gap-5">
                <div className="w-1/2 flex flex-col gap-4 max-sm:w-full">
                    <div className="rounded-full px-4 py-3 font-semibold shadow-lg">1. What types of projects do specialize in?</div>
                    <div className="rounded-full px-4 py-3 font-semibold shadow-lg">2. How doy you ensure quality in surveys?</div>
                    <div className="rounded-full px-4 py-3 font-semibold shadow-lg">3. Are you licensed and insured?</div>
                </div>
                <div className="w-1/2 flex flex-col gap-4 max-sm:w-full">
                    <div className="rounded-full px-4 py-3 font-semibold shadow-lg">4. What is your process for project timelines?</div>
                    <div className="rounded-full px-4 py-3 font-semibold shadow-lg">5. Do you offer environmentally friendly?</div>
                    <div className="rounded-full px-4 py-3 font-semibold shadow-lg">6. What Surveyor services do you offer?</div>
                </div>
            </div>
        </div>
    </div>
  )
}
