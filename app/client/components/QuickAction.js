"use client";
import React from "react";
import Link from "next/link";
import { FiChevronDown, FiPlus, FiFolder, FiDollarSign } from "react-icons/fi";

export default function QuickAction() {
  return (
    <div className="bg-white w-80 max-sm:w-full max-md:w-full max-sm:py-3 max-sm:px-5 rounded-md mt-3 px-3 py-2">
      <div className="flex justify-between mb-3">
        <h3>Quick Action</h3>
        <FiChevronDown size={18} />
      </div>

      <div className="flex flex-col">

        <Link
          className="bg-gray-100 hover:bg-gray-300 px-3 py-2 max-sm:p-3 rounded-md mb-3 flex items-center gap-2"
          href={"/client/surveys/request-survey"}
        >
          <FiPlus size={18} />
          Request New Survey
        </Link>

        <Link
          className="bg-gray-100 hover:bg-gray-300 px-3 py-2 max-sm:p-3 rounded-md mb-3 flex items-center gap-2"
          href={"/client/surveys"}
        >
          <FiFolder size={18} />
          View Completed Projects
        </Link>

        <Link
          className="bg-gray-100 hover:bg-gray-300 px-3 py-2 max-sm:p-3 rounded-md mb-3 flex items-center gap-2"
          href={"/client/payments"}
        >
          <FiDollarSign size={18} />
          Make a Payment
        </Link>

      </div>
    </div>
  );
}

// "use client"
// import React from 'react'
// import Link from 'next/link'

// export default function QuickAction() {
//   return (
//     <div className="bg-white w-80 max-sm:w-full max-md:w-full max-sm:py-3 max-sm:px-5 rounded-md mt-3 px-3 py-2">
//         <div className="flex justify-between mb-3">
//             <h3>Quick Action</h3>
//             <span>⬇️</span>
//         </div>
//         <div className='flex flex-col'>
//             <Link className="bg-gray-100 hover:bg-gray-300 px-3 py-2 max-sm:p-3 rounded-md mb-3" href={"/client/surveys/request-survey"}>➕ Request New Survey</Link >
//             <Link className="bg-gray-100 hover:bg-gray-300 px-3 py-2 max-sm:p-3 rounded-md mb-3" href={""}>📁 View Completed projects</Link >
//             <Link className="bg-gray-100 hover:bg-gray-300 px-3 py-2 max-sm:p-3 rounded-md mb-3" href={""}>💰 Make a payment</Link >
//         </div>
//     </div>
//   )
// }
