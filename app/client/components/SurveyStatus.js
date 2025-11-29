"use client"
export default function SurveyStatus() {
  return (
    <div className="max-w-56 self-start rounded-lg p-7 max-sm:w-full bg-white mt-5 flex flex-col gap-1 justify-center items-start">
        <div className="flex gap-2 items-center">
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            <span className="font-bold">About project</span>
        </div>

        <div className="border-l-4 border-gray-300 pl-4 ml-1">
            <span className="text-sm text-gray-400">Add details to ypur project that explains it well to all surveyors</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-300"> </span>
            <span className="font-bold">Review and work</span>
        </div>

        <div className="pl-4 ml-1">
            <span className="text-sm text-gray-400">Once your documents are verified work will begin</span>
        </div>
    </div>
  )
}
