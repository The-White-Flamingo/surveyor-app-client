"use client"
import { useParams } from "next/navigation";
import AssignedSurveyor from "../../components/AssignedSurveyor";
import SurveyContent from "../../components/SurveyContent";
// import ProtectedRoute from "../../components/ProtectedRoute";

export default function Survey(){
    const {id: paramId} = useParams();

    return(
    // <ProtectedRoute roles={["client"]}>
    <div className="flex gap-3 max-sm:px-1 max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
        <SurveyContent paramId={paramId}/>
        <AssignedSurveyor />
    </div>   
    // </ProtectedRoute>
    )
}