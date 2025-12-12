"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
// import PaymentDetail from "../../components/PaymentDetail";
import { FaArrowLeft } from "react-icons/fa";

export default function Payment() {
    const router = useRouter();
    const {id:paramId} = useParams();
    
  return (
    <div className="max-w-3xl mt-5 rounded-lg bg-white p-5">
        <button onClick={()=>router.replace('/surveyor/payments')} className="mb-5 cursor-pointer"><FaArrowLeft size={18}/></button>
        // <PaymentDetail paramId={paramId}/>
      <div className="flex flex-col gap-4">
            <h3 className="font-bold">Payment Details</h3>
            <div className="border-2-0 border text-sm w-2/4 max-sm:w-full flex flex-col gap-3 rounded-lg border-gray-600 p-4">
                <div className="flex justify-between items-center">
                    <span className="text-md font-bold">Status</span>
                    <span className="px-3 py-1 bg-green-200 rounded-lg text-green-500">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Survey ID</span>
                    <span className="font-bold">{paramId}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Amount Paid</span>
                    <span className="font-bold">$2000</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Payment Date</span>
                    <span className="font-bold">April 12, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Payment Method</span>
                    <span className="font-bold">Card Transfer</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Transaction Id</span>
                    <span className="font-bold">TXN-122234</span>
                </div>
            </div>
            <button className="self-start px-4 py-2 bg-orange-600 hover:bg-orange-700 cursor-pointer text-white rounded-lg">Download Reciept</button>
        </div>

    </div>
  )
}
