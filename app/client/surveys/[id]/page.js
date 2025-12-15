"use client"
import { useParams } from "next/navigation";
import AssignedSurveyor from "../../components/AssignedSurveyor";
import SurveyContent from "../../components/SurveyContent";
// import useSingleSurvey from "../../../hooks/clientHooks/useSingleSurvey";

export default function Survey(){
    const {id: paramId} = useParams();
    // const {data: survey, isLoading, isError} = useSingleSurvey(paramId);

    // if(isLoading){
    //     return <p className="text-center mt-10">Loading survey details...</p>
    // }
    // if(isError){
    //     return <p className="text-center mt-10">Error loading survey details.</p>
    // }

    const survey = {
      _id: "1237",
      title:"Land Survey",
      budget:5000,
      location:"Accra",
      additionalNotes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      deadline:"2025-10-12",
      surveyStatus:"ongoing",
      createdAt:"2025-01-14",
      assignedSurveyor: "2348"
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