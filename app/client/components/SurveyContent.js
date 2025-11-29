"use client"
export default function SurveyContent({paramId}) {
  return (
    <div className="max-w-3xl flex-1 flex flex-col gap-3 bg-white mt-5 rounded-lg p-5">
        <span className="px-3 py-2 bg-yellow-100 self-start rounded-lg text-yellow-500">Pending admin review</span>
        <div className=" border-t-2 border-gray-200 border-b-2 py-3">
            <div className="w-2/4 max-sm:w-full flex justify-between items-center">
                <h3 className="font-bold">Site Survey - #{paramId}</h3>
                <span className="text-sm text-gray-400">
                    {/* location icon */}
                    Accra, Ghana
                </span>
            </div>
            <div>
                {/* google map to display location */}
            </div>
            <button className="px-4 py-2 bg-white border-slate-950 border rounded-full">
                {/* location icon */}
                View on map
            </button>
        </div>
        <span>
            {/* informaion icon */}
            Awaiting Admin to Assign a Surveyor
        </span>
    </div>
  )
}
