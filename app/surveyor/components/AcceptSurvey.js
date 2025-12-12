"use client";
import { FiCheck, FiFile } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function AcceptSurvey({survey}) {
  return (
    <div className='w-96 flex flex-col'>
        <div className='flex flex-col bg-white rounded-2xl'>
            <div className="border-b-2 border-gray-200 flex flex-col gap-3 items-center">
                <span className="px-4 py-2 rounded-lg text-red-600 bg-red-100">{survey.surveyStatus}</span>

                <h3 className="font-bold text-2xl mb-10">{survey.budget}</h3>
            </div>

            <div className="flex flex-col gap-3 p-3">
                <h3 className="font-bold">Documents attached</h3>
                <div className="mb-5">
                    {survey.documents.map((document)=>{
                        <div className="flex items-center gap-3">
                            <FiFile size={17} className="inline"/>
                            <p>{document.fileName}</p>
                        </div>
                    })}
                </div>
            </div>

        </div>
        <div className="flex items-center gap-3 justify-around">
            <button className="rounded-full py-2 px-4 flex items-center gap-2 hover:bg-orange-700 bg-orange-600 text-white">Accept <FiCheck size={17} className="inline"/></button>
            <button className="rounded-full py-2 px-4 flex items-center gap-2 hover:bg-gray-100 text-gray-700 border-gray-700 order">Decline <FaTimes size={17} className="inline"/></button>
        </div>

    </div>
  )
}
