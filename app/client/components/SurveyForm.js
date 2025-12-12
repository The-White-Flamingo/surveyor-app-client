"use client";

import { useState } from "react";
import apiInstance from "../../lib/axios"
import { useQueryClient } from "@tanstack/react-query";
import { FiArrowUp } from "react-icons/fi";

export default function SurveyForm() {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("title", title);
      formData.append("budget", budget);
      formData.append("location", location);
      formData.append("additionalNotes", additionalNotes);

      documents.forEach((file) => {
        formData.append("documents", file);
      });

      const res = await apiInstance.put("/client/profile", formData, {
        withCredentials:true});

      console.log("Submitting survey:", {
        title,
        budget,
        location,
        additionalNotes,
        documents,
      });

      alert("Survey submitted successfully");
    }catch(error){
      console.log(error);
    }
  }
  

  return (
    <div className="bg-white max-w-3xl max-h-screen rounded-lg mt-5 flex flex-col gap-3 px-3 py-2">
         <h3 className="text-lg font-bold">Tell us about your project</h3>
         <form action="" className="flex flex-col gap-2">
             <label htmlFor="title" className="text-lg font-bold">Add project title</label>
             <input type="text" name="title"  className="w-full border mb-5 py-1 px-2 rounded-lg border-gray-300"/>

             <label htmlFor="budget" className="text-lg font-bold">Add budget</label>
             <input type="number" name="budget" id="budget" className="w-2/4 border mb-5 py-1 px-2 rounded-lg border-gray-300" min={0} max={10000}/>

             <label htmlFor="location" className="text-lg font-bold">Select location</label>
             <input type="text" name="location" placeholder="Enter area" className="w-2/4 mb-5 py-1 px-2 rounded-lg border border-gray-300"/>
             {/* {google map for user to select location} */}
             <label htmlFor="additional-notes" className="text-lg font-bold">Additional notes to the surveyor</label>
             <textarea name="additionalNotes" id="additionalNotes" className="w-full border rounded-lg py-1 px-2 h-46 border-gray-300"></textarea>
             {/* react-blog */}
             {/* <Quill /> */}
            

             <label htmlFor="documents" className="text-lg font-bold">Add media/attachment documents</label>
             <span className="text-sm">Make sure to add the following documents - <b>Land Ownership Documents, Construction Plans (if applicable)</b></span>
             <span className="font-bold">Upload file</span>
            
             {/* <input type="file" name="documents" id="documents" className=""/> */}
             <input type="file" className="border-dashed border-gray-500 border rounded-lg text-center flex justify-center items-center gap-2 w-full py-2 px-3"/>

             <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-3 py-2 self-end">Save & Continue</button>
         </form>
     </div>
  );
}

// "use client"
// import { FiArrowUp } from "react-icons/fi";
// import Quill from "./Quill";

// export default function SurveyForm() {
//   return (
//     <div className="bg-white max-w-3xl max-h-screen rounded-lg mt-5 flex flex-col gap-3 px-3 py-2">
//         <h3 className="text-lg font-bold">Tell us about your project</h3>
//         <form action="" className="flex flex-col gap-2">
//             <label htmlFor="title" className="text-lg font-bold">Add project title</label>
//             <input type="text" name="title"  className="w-full border mb-5 py-1 px-2 rounded-lg border-gray-300"/>

//             <label htmlFor="budget" className="text-lg font-bold">Add budget</label>
//             <input type="number" name="budget" id="budget" className="w-2/4 border mb-5 py-1 px-2 rounded-lg border-gray-300" min={0} max={10000}/>

//             <label htmlFor="location" className="text-lg font-bold">Select location</label>
//             <input type="text" name="location" placeholder="Enter area" className="w-2/4 mb-5 py-1 px-2 rounded-lg border border-gray-300"/>
//             {/* {google map for user to select location} */}
//             <label htmlFor="additional-notes" className="text-lg font-bold">Additional notes to the surveyor</label>
//             {/* react-blog */}
//             {/* <Quill /> */}
            

//             <label htmlFor="documents" className="text-lg font-bold">Add media/attachment documents</label>
//             <span className="text-sm">Make sure to add the following documents - <b>Land Ownership Documents, Construction Plans (if applicable)</b></span>
//             <span className="font-bold">Upload file</span>
            
//             <input type="file" name="documents" id="documents" className=""/>
//             <div className="border-dashed border rounded-lg text-center flex justify-center items-center gap-2 w-full py-1 px-2"><FiArrowUp size={18}/> <span className="text-gray-400"> <span>Drop items here</span></span> <b>or Browse files</b></div>

//             <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-3 py-2 self-end">Save & Continue</button>
//         </form>
//     </div>
//   )
// }
