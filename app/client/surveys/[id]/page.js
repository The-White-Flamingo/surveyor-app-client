"use client"
import { useParams } from "next/navigation";
import AssignedSurveyor from "../../components/AssignedSurveyor";
import SurveyContent from "../../components/SurveyContent";
import useSingleSurvey from "../../../hooks/clientHooks/useSingleSurvey";

export default function Survey(){
    const {id: paramId} = useParams();
    const {data: survey, isLoading, isError} = useSingleSurvey(paramId);

    if(isLoading){
        return <p className="text-center mt-10">Loading survey details...</p>
    }
    if(isError){
        return <p className="text-center mt-10">Error loading survey details.</p>
    }

    return(
    // <ProtectedRoute roles={["client"]}>
    <div className="flex gap-3 max-sm:px-1 max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
        <SurveyContent survey={survey}/>
        {survey.assignedSurveyor && <AssignedSurveyor assignedSurveyor={survey.assignedSurveyor} surveyStatus={survey.surveyorResponse} paymentStatus={survey.paymentStatus}/>}
    </div>   
    // </ProtectedRoute>
    )
}