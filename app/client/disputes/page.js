"use client";
import DisputeItem from "../components/DisputeItem";
// import ProtectedRoute from "../components/ProtectedRoute";

export default function Dispute() {
  const nums = [1,2,3,4];
  const disputes = [
    {
      disputeId: "00251",
      status: "Canceled",
      date: "Jan 25, 2024",
      reason: "Incorrect Charge",
      adminStatus: "Pending Review",
      explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis possimus deleniti sed corporis earum facere totam sit placeat magni cupiditate, reprehenderit deserunt aspernatur, tempora provident? Similique delectus cupiditate sit."
    },
    {
      disputeId: "00197",
      status: "Resolved",
      date: "Dec 12, 2023",
      reason: "Survey Quality Issue",
      adminStatus: "Resolved",
      explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis possimus deleniti sed corporis earum facere totam sit placeat magni cupiditate, reprehenderit deserunt aspernatur, tempora provident? Similique delectus cupiditate sit."
    },
    {
      disputeId: "00175",
      status: "Resolved",
      date: "Oct 20, 2023",
      reason: "Survey Not Completed",
      adminStatus: "Resolved",
      explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis possimus deleniti sed corporis earum facere totam sit placeat magni cupiditate, reprehenderit deserunt aspernatur, tempora provident? Similique delectus cupiditate sit."
    },
    {
      disputeId: "00163",
      status: "Resolved",
      date: "Nov 5, 2023",
      reason: "Delaved Service",
      adminStatus: "Resolved",
      explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis possimus deleniti sed corporis earum facere totam sit placeat magni cupiditate, reprehenderit deserunt aspernatur, tempora provident? Similique delectus cupiditate sit."
    },
    {
      disputeId: "00154",
      status: "Canceled",
      date: "Jul 12, 2023",
      reason: "Survey Not Completed",
      adminStatus: "Pending Review",
      explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis possimus deleniti sed corporis earum facere totam sit placeat magni cupiditate, reprehenderit deserunt aspernatur, tempora provident? Similique delectus cupiditate sit."
    },
  ];
  return (
    // <ProtectedRoute roles={["client"]}>
    <div className="flex flex-col gap-3 max-sm:px-1">
      <div className="flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start">
        <h3 className="font-bold text-lg">My Disputes</h3>
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">Filter by: </span>
          <select name="survey" id="survey" className="bg-white px-3 py-2 rounded-md max-sm:flex-1">
            <option value="pending admin review">All</option>
            <option value="">Ongoing</option>
            <option value="">Resolved</option>
            <option value="">Canceled</option>
          </select>
        </div>
      </div>


      <div className="flex flex-col gap-3">
        {disputes.map((dispute)=>(
          <>
            <DisputeItem dispute={dispute}/>
          </>
        ))}

      </div>
    </div>
    // </ProtectedRoute>
  )
}
