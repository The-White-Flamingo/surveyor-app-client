"use client"
import { useParams } from "next/navigation";
import DisputeDetail from "../../components/DisputeDetail";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function DisputePage(){
    const {id:paramId} = useParams();

    return(
        <div className="flex gap-3 max-sm:px-1">
            <DisputeDetail paramId={paramId}/>
        </div>
    )
}