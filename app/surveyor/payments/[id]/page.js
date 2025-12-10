"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import PaymentDetail from "../../components/PaymentDetail";
import { FaArrowLeft } from "react-icons/fa";
// import ProtectedRoute from "../../components/ProtectedRoute";

export default function Payment() {
    const router = useRouter();
    const {id:paramId} = useParams();
    
  return (
    // <ProtectedRoute roles={["client"]}>
    <div className="max-w-3xl mt-5 rounded-lg bg-white p-5">
        <button onClick={()=>router.replace('/client/payments')} className="mb-5 cursor-pointer"><FaArrowLeft size={18}/></button>
        <PaymentDetail paramId={paramId}/>
    </div>
    // </ProtectedRoute>
  )
}
