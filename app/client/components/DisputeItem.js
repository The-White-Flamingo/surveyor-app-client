"use client"
import Link from "next/link";
 
export default function DisputeItem({dispute}) {
    const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis possimus deleniti sed corporis earum facere totam sit placeat magni cupiditate, reprehenderit deserunt aspernatur, tempora provident? Similique delectus cupiditate sit.";
  return (
    <div className="bg-white rounded-lg p-4 max-w-full flex flex-col gap-2 mt-5">
        <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">DISP-{dispute.disputeId}</h3>
            <span className="text-gray-500 font-bold">{dispute.status}</span>
        </div>
        <div>
            <h3 className="text-gray-600">{dispute.date}  <b className="font-bold">{dispute.reason}</b></h3>
        </div>
        <div className="flex justify-between gap-2 items-center max-sm:flex max-sm:flex-col ">
            <span className="py-1 px-3 max-sm:self-start rounded-lg text-gray-600 bg-gray-200 font-bold">{dispute.adminStatus}</span>
            <span className="font-bold flex-1 text-sm">
                {`${dispute.explanation.substring(0,72)}...`}
            </span>
            <Link href={`/client/disputes/${dispute.disputeId}`} className="py-1 px-3 border rounded-lg font-bold max-sm:w-full max-sm:text-center">View Details</Link>
        </div>
    </div>
  )
}
