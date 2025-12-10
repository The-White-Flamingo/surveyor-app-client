"use client"
import { useParams } from "next/navigation";
import DisputeDetail from "../../components/DisputeDetail";
import useSingleDispute from "../../../hooks/clientHooks/useSingleDispute";

export default function DisputePage(){
    const {id:paramId} = useParams();
    const {data: dispute, isLoading, isError} = useSingleDispute(paramId);

    if(isLoading){
        return <p className="text-center mt-10">Loading dispute details...</p>
    }
    if(isError){
        return <p className="text-center mt-10">Error loading dispute details.</p>
    }

    return(
        <div className="flex gap-3 max-sm:px-1">
            <DisputeDetail dispute={dispute} />
        </div>
    )
}