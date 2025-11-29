import SurveyStatus from "../../components/SurveyStatus";
// import SurveyForm from "../../components/SurveyForm";
// import ProtectedRoute from "../../components/ProtectedRoute";

export default function RequestSurvey() {
  return (
    // <ProtectedRoute roles={["client"]}>
    <div className="max-h-screen flex gap-3 max-sm:px-1 max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
        <SurveyStatus />
        {/* <SurveyForm /> */}
    </div>
    // </ProtectedRoute>
  )
}
