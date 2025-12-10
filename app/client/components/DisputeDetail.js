"use client"
import { FiEdit3 } from "react-icons/fi"

export default function DisputeDetail({dispute}) {
  return (
    <div className="bg-white rounded-lg p-5 mt-5 max-w-3xl flex flex-col gap-3">
        <h3 className="font-bold">Dispute #{dispute._id.substring(0, 8)}</h3>
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-3">
            <span className="text-md font-bold text-gray-400">
                {new Date(dispute.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </span>

            <div className="flex items-center gap-3">
                {/* edit button icon */}
                <button className={``}><FiEdit3 size={18}/></button>
                <span className="bg-amber-100 py-1 px-3 text-amber-500 font-bold rounded-lg">{dispute.status}</span>
            </div>
        </div>
        <p className="font-bold text-sm">Reason</p>
        <p className="font-bold text-sm text-gray-700">{dispute.reason}</p>

        <p className="font-bold text-sm">Additional Details</p>
        <p className="font-bold text-sm text-gray-700">{dispute.explanation}</p>

        <div className="flex gap-5 items-center max-sm:flex max-sm:flex-col">
            <button disabled={dispute.status === "cancelled"} className="py-2 px-3 rounded-lg hover:bg-gray-100 border max-sm:w-full">{dispute.status === "cancelled" ? "Cancelled" : "Cancel Dispute"}</button>
            <button className="py-2 px-3 rounded-lg hover:bg-orange-700 text-white bg-orange-600 max-sm:w-full">Contact Support</button>
        </div>
    </div>
  )
}
