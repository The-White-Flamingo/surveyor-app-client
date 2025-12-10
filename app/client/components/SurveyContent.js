"use client"
import { FaLandmark } from "react-icons/fa"
export default function SurveyContent({survey}) {
  return (
    <div className="max-w-3xl flex-1 flex flex-col gap-3 bg-white mt-5 rounded-lg p-5">
        <span className={`${survey.surveyStatus === "Ongoing" ? "bg-blue-100 text-blue-500 rounded-md font-bold px-4 py-2 self-start" : survey.surveyStatus === "pending_admin_approval" ? "text-amber-300 bg-amber-100 rounded-md font-bold px-4 py-2 self-start": survey.surveyStatus === "Expired" ? "text-red-300 bg-red-100 rounded-md font-bold px-4 py-2 self-start" : ""}`}>{survey.surveyStatus}</span>
        <div className=" border-t-2 border-gray-200 border-b-2 py-3">
            <div className="w-3/4 max-sm:w-full flex justify-between items-center">
                <h3 className="font-bold">{survey.title} - #{survey._id.substring(0, 8)}</h3>
                <span className="text-sm text-gray-400 flex items-center">
                    {/* location icon */}
                    <FaLandmark className="inline mr-3" />
                    <span>{survey.location}</span>
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
            {survey.surveyorResponse === "pending" ? (
                <>Awaiting Admin to Assign a Surveyor</>
            ) : ( survey.surveyorResponse === "declined" ? (
                <>Survey Rejected</>
            ) : (   survey.surveyorResponse === "accepted" ? (
                <>Survey Accepted - awaiting payment</>
            ) : (
                <>Survey Accepted</>
            )))}
        </span>
    </div>
  )
}
