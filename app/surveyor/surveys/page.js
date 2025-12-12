"use client";
import SurveyItem from "../components/SurveyItem";
import GetAssignedSurveys from "../../hooks/surveyorHooks/getAssignedSurveys";
import { useState } from "react";
// import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";
// import RequestedSurveyItem from "../components/RequestedSurveyItem";

export default function SurveysPage(){
    const {data: surveysData, isLoading, isError} = GetAssignedSurveys();
    // const {data: surveyor} = SurveyorAuth();
    // const surveyorId = surveyor.surveyor._id;
    // console.log("Authenticate surveyor in surveys page: ", surveyor.surveyor._id);
    const [filter,setFilter] = useState("requested");

    if(isLoading) return <p className="text-center mt-10">Loading Surveys...</p>

    if(isError) return <p className="text-center mt-10">Error Loading surveys. Please try again later</p>

    const surveys = surveysData || [];
    
    const handleFilterChange = (e)=> {
        setFilter(e.target.value);
    }

    const filteredSurveys = surveys.filter((survey)=>{
        survey.surveyStatus?.toLowerCase() === filter.toLowerCase();
    });

    return(
        <div className="flex flex-col gap-3 max-sm:px-1">
            <div className="flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start">
                <h3 className="font-bold text-lg">My Surveys</h3>
                <div className="flex items-center gap-3">
                    <span className="font-bold text-sm">Filter by: </span>
                    <select name="survey" id="survey" value={filter} onChange={handleFilterChange} className="bg-white px-3 py-2 rounded-md max-sm:flex-1">
                        <option value="requested">Requested</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                        <option value="awaiting_surveyor_response">Awaiting surveyor response</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="disputed">Disputed</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                
                {filteredSurveys.length > 0 ? (
                    filteredSurveys.map((survey)=>(
                        <SurveyItem key={survey._id} survey={survey} surveyorId={surveyorId}/>
                    ))
                ) : (
                    <p className="font-medium">No such Surveys found for this filter</p>
                )}
            </div>
        </div>
    )
}