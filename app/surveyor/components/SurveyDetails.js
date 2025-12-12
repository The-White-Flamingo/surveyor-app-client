"use client";

export default function SurveyDetails({survey}) {
  return (
    <div className="bg-white p-4 rounded-2xl max-w-4xl">
        <div className="flex flex-col gap-2 py-3">
            <h1 className="text-2xl font-semibold ">Survey Request For Land at {survey.location}</h1>
            <div className="flex flex-col gap-2 text-sm">
                <h3 className="font-semibold">Type <span className="text-slate-700 font-medium"> - {survey.title}</span></h3>
                <h3 className="font-semibold">Location<span className="text-slate-700 font-medium"> - {survey.location}</span></h3>
                <h3 className="font-semibold">Requested On<span className="text-slate-700 font-medium"> - {survey.createdAt}</span></h3>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Additional Notes</h1>
                <p className="text-sm text-gray-600">{survey.additionalNotes}</p>
            </div>
        </div>

    </div>
  )
}
