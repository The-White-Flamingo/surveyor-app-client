"use client";
import { FiArrowRight, FiCalendar, FiCheck } from "react-icons/fi";
import Link from 'next/link';
import { FaTimes } from "react-icons/fa";

export default function RequestedSurveyItem({survey}) {
  return (
    <div className="bg-white max-w-full rounded-md p-5 mt-3 relative">
        <span className={`${survey.surveyStatus === "ongoing" ? "bg-blue-100 text-blue-500 rounded-md font-bold px-4 py-2" : survey.surveyStatus === "pending_admin_approval" ? "text-amber-300 bg-amber-100 rounded-md font-bold px-4 py-2": survey.surveyStatus === "expired" ? "text-red-300 bg-red-100 rounded-md font-bold px-4 py-2" : ""}`}>{survey.surveyStatus}</span>
        <div className="flex flex-col gap-1 mt-4">
            <div className="flex justify-between">
                <span className="font-bold">{survey.title} - {survey.location}</span>
                <span className="text-sm">Project Cost</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 flex"><FiCalendar size={18} className='mr-2'/> Expected Completion - {survey.deadline && new Date(survey.deadline).toLocaleDateString()}</span>
                <span className="font-bold text-lg">${survey.budget}</span>
            </div>
            
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Summary</h4>
                <p className="text-sm">{survey.additionalNotes}</p>
            </div>

            
            <div className="flex items-center justify-end gap-3">
                {survey.surveyStatus === "requested" ? (
                    <>
                        <Link href={"/surveyor/dashboard"} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center">Accept <FiCheck size={17}/></Link>
                        <Link href={"/surveyor/dashboard"}>Decline <FaTimes size={17} className="inline ml-2"/></Link>
                    </>
                ):(
                    <Link href={"/surveyor/dashboard"} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center">View Project <FiArrowRight size={17}/></Link>
                )}
            </div>

        </div>
    </div>
  )
}
