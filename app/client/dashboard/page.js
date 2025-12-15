"use client"
import QuickAction from "../components/QuickAction"
import RecentTransaction from "../components/RecentTransaction"
import QuickMessages from "../components/QuickMessages"
import SurveyItem from "../components/SurveyItem";
// import useClientSurveys from "../../hooks/clientHooks/useClientSurveys";

export default function Dashboard() {
  // const {data: surveysData, isLoading, isError} = useClientSurveys();

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


  return (
    <div className=" flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-between max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
        <QuickAction />
        <RecentTransaction />
        <QuickMessages />
      </div>

      <div className="flex flex-col justify-evenly gap-3">
        <h3 className="font-bold text-lg">My Surveys</h3>

        {/* {isLoading && <p>Loading surveys...</p>}
        {isError && <p>Error loading surveys. Please try again later.</p>} */}
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
