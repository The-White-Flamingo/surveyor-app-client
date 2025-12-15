"use client";
import DisputeItem from "../components/DisputeItem";
// import useClientDisputes from "../../hooks/clientHooks/useClientDisputes";
import { useState} from "react";

export default function Dispute() {

  // const {data: disputesData, isLoading, isError} = useClientDisputes();
  const [filter, setFilter] = useState("Pending");

  // if(isLoading) {
  //   return <p className="text-center mt-10">Loading disputes...</p>
  // }

  // if(isError) {
  //   return <p className="text-center mt-10">Error loading disputes. Please try again later.</p>
  // }

  // const disputes = disputesData || [{}];
  const disputes = [
    {
      _id:"1234",
      reason:"Inccorrect Charge",
      explanation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      status:"Pending",
      resolutionPreference:"Redo survey",
      survey:"5321",
      createdAt:"2025-10-11"
    },
    {
      _id:"1235",
      reason:"Survey quailty work",
      explanation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      status:"Resolved",
      resolutionPreference:"Refund",
      survey:"6321",
      createdAt:"2025-10-11"
    },{
      _id:"1236",
      reason:"Delayed service",
      explanation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta similique, iusto rem dolorum deserunt labore est recusandae iste voluptas magnam autem vel consequatur assumenda culpa! Ad blanditiis iste necessitatibus expedita minus hic fugiat nostrum voluptates, adipisci molestias tenetur autem!",
      status:"Cancelled",
      resolutionPreference:"Pending",
      survey:"7321",
      createdAt:"2025-10-11"
    },
  ];


  const handleFilterChange = (e)=>{
    setFilter(e.target.value);
  };

  const filteredDisputes = disputes.filter((dispute) =>{
    dispute.status?.toLowerCase() === filter.toLowerCase();
  })
  return (
    <div className="flex flex-col gap-3 max-sm:px-1">
      <div className="flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start">
        <h3 className="font-bold text-lg">My Disputes</h3>
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">Filter by: </span>
          <select name="survey" id="survey" value={filter} onChange={handleFilterChange} className="bg-white px-3 py-2 rounded-md max-sm:flex-1">
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Under Reivew">Under Review</option>
          </select>
        </div>
      </div>


      <div className="flex flex-col gap-3">
        {filteredDisputes.length === 0 ? (<p className="text-center mt-10">No disputes found.</p>) : (
          filteredDisputes?.map((dispute)=>(
            <DisputeItem key={dispute._id} dispute={dispute}/>
          ))
        )}
      </div>
    </div>
  )
}
