"use client"
import QuickAction from "../components/QuickAction"
import RecentTransaction from "../components/RecentTransaction"
import QuickMessages from "../components/QuickMessages"
import SurveyItem from "../components/SurveyItem";
// import ProtectedRoute from "../components/ProtectedRoute";

export default function page() {
  const surveys = [
    {
      surveyId: "12345678",
      location: "Accra",
      status: "Ongoing",
      cost: 1000,
      completionDate: "Jan 24, 2023",
      assignedSurveyor: {
        name: "Sam Smith"
      } 
    },
  ]
  return (
    // <ProtectedRoute roles={["client"]}>
    <div className=" flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-between max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
        <QuickAction />
        <RecentTransaction />
        <QuickMessages />
      </div>

      <div className="flex flex-col justify-evenly gap-3">
        <h3 className="font-bold text-lg">My Surveys</h3>

        {surveys.map((survey)=>{
          <>
            <SurveyItem key={survey.surveyId} survey={survey}/>          
          </>
        })}

      </div>              
    </div>
    // </ProtectedRoute>
  )
}
