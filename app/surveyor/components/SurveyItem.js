"use client"
import React from 'react'
import Link from 'next/link';
import { FiArrowRight, FiCalendar  } from "react-icons/fi";
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function SurveyItem({survey, surveyorId}) {
  return (
    <div className="bg-white max-w-full rounded-md p-5 mt-3 relative">
        <span 
        className={`${survey.surveyStatus === "ongoing" 
            ? "bg-blue-100 text-blue-500 rounded-md font-bold px-4 py-2" 
            : survey.surveyStatus === "cancelled" 
            ? "text-gray-300 bg-gray-100 rounded-md font-bold px-4 py-2" 
            : survey.surveyStatus === "expired" 
            ? "text-purple-300 bg-purple-100 rounded-md font-bold px-4 py-2" 
            : survey.surveyStatus === "requested" 
            ? "text-red-300 bg-red-100 rounded-md font-bold px-4 py-2" 
            : survey.surveyStatus === "completed" 
            ? "text-green-300 bg-green-100 rounded-md font-bold px-4 py-2" 
            : ""}`}
            >
                {survey.surveyStatus}
            </span>
        <div className="flex flex-col gap-1 mt-4">
            <div className="flex justify-between">
                <span className="font-bold">{survey.title} - {survey.location}</span>
                <span className="text-sm">Project Cost</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 flex"><FiCalendar size={18} className='mr-2'/> {survey.surveyStatus === "requested" ? "Requested at" : "Expected Completion"} - {survey.createdAt && new Date(survey.createdAt).toLocaleDateString()}</span>
                <span className="font-bold text-lg">${survey.budget}</span>
            </div>
            
            <div className='p-2'>
                <span className='text-md font-semibold'>Summary</span>
                <p className="text-sm font-bold mb-2">{survey.additionalNotes}</p>
            </div>
            {/* && survey.assignedSurveyor === surveyorId */}
            {survey.surveyStatus === "requested" ? (
                <>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"><span>Accept</span> <FaCheck /></button>    
                    <button className="bg-white hover:bg-gray-100 text-black py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"><span>Decline</span> <FaTimes /></button>    
                </>
            ) : survey.surveyStatus === "ongoing" ? (
                <>
                    <Link href={`/surveyor/surveys/${survey._id}`} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"><span>View Project</span> <FiArrowRight /></Link>    
                </>
            ):(
                <Link href={`/surveyor/surveys/${survey._id}`} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-full self-end max-sm:w-full max-md:w-full flex gap-2 items-center max-sm:mt-4 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"><span>View Project</span> <FiArrowRight /></Link>    
            )}
            
        </div>
        
    </div>
  )
}
