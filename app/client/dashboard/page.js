"use client"
import QuickAction from "../components/QuickAction"
import RecentTransaction from "../components/RecentTransaction"
import QuickMessages from "../components/QuickMessages"
import SurveyItem from "../components/SurveyItem";
import useClientSurveys from "../../hooks/clientHooks/useClientSurveys";

export default function Dashboard() {
  const {data: surveysData, isLoading, isError} = useClientSurveys();

  const surveys = surveysData || [{}];

  return (
    <div className=" flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-between max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
        <QuickAction />
        <RecentTransaction />
        <QuickMessages />
      </div>

      <div className="flex flex-col justify-evenly gap-3">
        <h3 className="font-bold text-lg">My Surveys</h3>

        {isLoading && <p>Loading surveys...</p>}
        {isError && <p>Error loading surveys. Please try again later.</p>}
        {surveys.length > 0 ? surveys.map((survey)=>(
          <>
            <SurveyItem key={survey._id} survey={survey}/>
          </>
          )): (
          <>
            <p className="font-medium">No Surveys created yet...</p>
          </>
        )}

      </div>              
    </div>
  )
}
