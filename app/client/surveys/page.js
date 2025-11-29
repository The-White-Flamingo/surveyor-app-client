import SurveyItem from "../components/SurveyItem"
import Link from "next/link";
// import ProtectedRoute from "../components/ProtectedRoute";

export default function Surveys() {
  const nums = [1,2,3,4,5];
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
    {
      surveyId: "23456789",
      location: "Accra",
      status: "Pending admin review",
      cost: 3000,
      completionDate: "Dec 12, 2023",
      assignedSurveyor: {
        name: "Peter Walker"
      } 
    },
    {
      surveyId: "34567891",
      location: "Accra",
      status: "Pending admin review",
      cost: 4000,
      completionDate: "July 9, 2023",
      assignedSurveyor: {
        name: "Jonny Bravo"
      } 
    },
    {
      surveyId: "45678912",
      location: "Accra",
      status: "Expired",
      cost: 2000,
      completionDate: "Nov 18, 2023",
      assignedSurveyor: {
        name: "John Paul"
      } 
    },
    {
      surveyId: "56789123",
      location: "Accra",
      status: "Pending admin review",
      cost: 6000,
      completionDate: "Oct 26, 2023",
      assignedSurveyor: {
        name: "Alex Jones"
      } 
    },
  ]
  return (
    // <ProtectedRoute roles={["client"]}>
    <div className="flex flex-col gap-3 max-sm:px-1">
        <div className="flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start">
          <h3 className="font-bold text-lg">My Surveys</h3>
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm">Filter by: </span>
            <select name="survey" id="survey" className="bg-white px-3 py-2 rounded-md max-sm:flex-1">
              <option value="pending admin review">Pending admin review</option>
              <option value="">Approved</option>
              <option value="">Ongoing</option>
              <option value="">Completed</option>
              <option value="">Awaiting surveyor response</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href={"/client/surveys/request-survey"}
            className="px-3 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg lg:self-start max-sm:w-full max-md:self-start"
          >
            Request New Survey
          </Link>

          {surveys.map((survey)=>(
            <>
              <SurveyItem key={survey.surveyId} survey={survey}/>
            </>
          ))}
        </div>
    </div>
    // </ProtectedRoute>
  )
}
