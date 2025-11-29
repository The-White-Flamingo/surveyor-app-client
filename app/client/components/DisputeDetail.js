"use client"
import { FiEdit3 } from "react-icons/fi"

export default function DisputeDetail({paramId}) {
  return (
    <div className="bg-white rounded-lg p-5 mt-5 max-w-3xl flex flex-col gap-3">
        <h3 className="font-bold">Dispute #{paramId}</h3>
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-3">
            <span className="text-md font-bold text-gray-400">
                02/15/2020
            </span>

            <div className="flex items-center gap-3">
                {/* edit button icon */}
                <button className={``}><FiEdit3 size={18}/></button>
                <span className="bg-amber-100 py-1 px-3 text-amber-500 font-bold rounded-lg">Ongoing</span>
            </div>
        </div>
        <p className="font-bold text-sm">Reason</p>
        <p className="font-bold text-sm text-gray-700">Reason</p>

        <p className="font-bold text-sm">Additional Details</p>
        <p className="font-bold text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio sed earum illum nemo, deleniti laborum molestiae porro consequuntur, in, saepe unde ex soluta?</p>

        <div className="flex gap-5 items-center max-sm:flex max-sm:flex-col">
            <button className="py-2 px-3 rounded-lg hover:bg-gray-100 border max-sm:w-full">Cancel Dispute</button>
            <button className="py-2 px-3 rounded-lg hover:bg-orange-700 text-white bg-orange-600 max-sm:w-full">Contact Support</button>
        </div>
    </div>
  )
}
