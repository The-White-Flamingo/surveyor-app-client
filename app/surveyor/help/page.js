"use client";
import { useState } from "react";
import ContactSupport from "../components/ContactSupport";
import FrequentQuestions from "../components/FrequentQuestions";

export default function Help() {
  const [contactSupport,setContactSupport] = useState(false);
  const [questions,setQuestions] = useState(true);

  const showContact = ()=>{
    setContactSupport(true);
    setQuestions(false);
  }

  const showQuestions = () =>{
    setContactSupport(false);
    setQuestions(true);
  }

  return (
    // <ProtectedRoute roles={["client"]}>
    <div className="bg-white p-2">
      <div className="bg-gray-100 flex items-center justify-start gap-4 rounded-lg mb-4">
        <button onClick={showQuestions} className={`${questions ? "text-red-400" : "hover:bg-gray-200"} " font-semibold"`} style={{padding: "0.7ch 1.5ch"}}>Frequently Asked Questions</button>
        <button onClick={showContact} className={`${contactSupport ? "text-red-400" : "hover:bg-gray-200"} " font-semibold"`} style={{padding: "0.7ch 1.5ch"}}>Contact Support</button>
      </div>

      {questions ? (
        <>
          <FrequentQuestions />
        </>
      ):(<></>)}

      {contactSupport ? (
        <>
          <ContactSupport />
        </>
      ):(<></>)}

    </div>
    // </ProtectedRoute>
  )
}
