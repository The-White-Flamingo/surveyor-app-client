"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FiArrowRight, FiCalendar  } from "react-icons/fi";

export default function SurveyItem({survey}) {
    const profile = false;
  return (
    <div className="bg-white max-w-full rounded-md p-5 mt-3 relative">
        <span className={`${survey.status === "Ongoing" ? "bg-blue-100 text-blue-500 rounded-md font-bold px-4 py-2" : survey.status === "Pending admin review" ? "text-amber-300 bg-amber-100 rounded-md font-bold px-4 py-2": survey.status === "Expired" ? "text-red-300 bg-red-100 rounded-md font-bold px-4 py-2" : ""}`}>{survey.status}</span>
        <div className="flex flex-col gap-1 mt-4">
            <div className="flex justify-between">
                <span className="font-bold">Site Survey - {survey.location}</span>
                <span className="text-sm">Project Cost</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 flex"><FiCalendar size={18} className='mr-2'/> Expected Completion - {survey.completionDate}</span>
                <span className="font-bold text-lg">${survey.cost}</span>
            </div>
            
            {profile ? (
                <>
                    <p className="text-sm font-bold mb-2">Hired Surveyor</p>
                    <div className="bg-gray-50 flex justify-between w-80 max-sm:w-full p-2 rounded-md">
                        <div className="flex gap-3 items-center">
                            <Image src="/profile1.png" alt="Profile picture" className="w-10 h-10" width={40} height={40}/>
                            <div className="flex flex-col">
                                <span>{survey.assignedSurveyor.name}</span>
                                <span className="text-blue-600 font-bold text-sm">View profile</span>
                            </div>
                        </div>
                        <span className="bg-blue-100 text-blue-500 rounded-md font-bold text-sm px-2 py-1 h-7">{survey.status}</span>
                    </div>
    
                </>
            ) : (
                <>
                </>
            )}
            
            <Link href={`/client/surveys/${survey.surveyId}`} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"><span>View Project</span> <FiArrowRight /></Link>    
        </div>
        
    </div>
  )
}
