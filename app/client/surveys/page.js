"use client";
import SurveyItem from "../components/SurveyItem";
import Link from "next/link";
// import useClientSurveys from "../../hooks/clientHooks/useClientSurveys";
import { useState } from "react";

export default function Surveys() {
  // const {data: surveysData, isLoading, isError} = useClientSurveys();
  const [filter, setFilter] = useState("pending_admin_approval");

  // if(isLoading) {
  //   return <p className="text-center mt-10">Loading surveys...</p>
  // }

  // if(isError) {
  //   return <p className="text-center mt-10">Error loading surveys. Please try again later.</p>
  // }

  // const surveys = surveysData || [{}];
  const surveys = [
    {
      _id: "1234",
      title:"Land Survey",
      budget:5000,
      location:"Accra",
      additionalNotes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      deadline:"2024-10-12",
      surveyStatus:"pending_admin_approval",
      createdAt:"2024-09-01",
      assignedSurveyor: "2345"
    },
    {
      _id: "1235",
      title:"Site Survey",
      budget:5000,
      location:"Kumasi",
      additionalNotes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      deadline:"2025-10-12",
      surveyStatus:"pending_admin_approval",
      createdAt:"2025-02-01",
      assignedSurveyor: "2346"
    },
    {
      _id: "1236",
      title:"Site Survey",
      budget:5000,
      location:"Kumasi",
      additionalNotes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      deadline:"2025-10-12",
      surveyStatus:"ongoing",
      createdAt:"2025-04-27",
      assignedSurveyor: "2347"
    },
    {
      _id: "1237",
      title:"Land Survey",
      budget:5000,
      location:"Accra",
      additionalNotes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      deadline:"2025-10-12",
      surveyStatus:"ongoing",
      createdAt:"2025-01-14",
      assignedSurveyor: "2348"
    },
];

  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const filteredSurveys = surveys.filter((survey) =>
    survey.surveyStatus?.toLowerCase() === filter.toLowerCase()
  );

  
  return (
    <div className="flex flex-col gap-3 max-sm:px-1">
      <p></p>
        <div className="flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start">
          <h3 className="font-bold text-lg">My Surveys</h3>
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm">Filter by: </span>
            <select name="survey" id="survey" value={filter} onChange={handleFilterChange} className="bg-white px-3 py-2 rounded-md max-sm:flex-1">
              <option value="pending_admin_approval">Pending admin approval</option>
              <option value="approved">Approved</option>
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
          <Link href={"/client/surveys/request-survey"}
            className="px-3 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg lg:self-start max-sm:w-full max-md:self-start"
          >
            Request New Survey
          </Link>

          {filteredSurveys.length > 0 ? (
            filteredSurveys.map((survey) => (
              <SurveyItem key={survey._id} survey={survey} />
            ))
            ) : (
              <p className="font-medium">No Surveys found for this filter...</p>
          )}

        </div>
    </div>
  )
}
