"use client";
import { useState } from "react";

export default function FrequentQuestions() {
    const [survey,setSurvey] = useState(true);
    const [documents,setDocuments] = useState(false);
    const [communication,setCommunication] = useState(false);
    const [payments,setPayments] = useState(false);
    const [disputes,setDisputes] = useState(false);

    const showSurvey = ()=> {
        setSurvey()
        setDocuments()
        setCommunication()
        setPayments()
        setDisputes()
    }

    const showDocuments = ()=> {
        setSurvey()
        setDocuments()
        setCommunication()
        setPayments()
        setDisputes()
    }

    const showComm = ()=> {
        setSurvey()
        setDocuments()
        setCommunication()
        setPayments()
        setDisputes()
    }

    const showPayment = ()=> {
        setSurvey()
        setDocuments()
        setCommunication()
        setPayments()
        setDisputes()
    }

    const showDisputes =()=> {
        setSurvey()
        setDocuments()
        setCommunication()
        setPayments()
        setDisputes()
    }

  return (
    <div className="flex items-center gap-5">
        <div className="flex flex-col gap-4 w-1/2 ">
            <button className={`${survey ? "text-blue-600 text-left": "hover:bg-gray-100 font-semibold p-2 text-left"}`}>Survey Request and Process</button>
            <button className={`${documents ? "text-blue-600 text-left": "hover:bg-gray-100 font-semibold p-2 text-left"}`}>Documents & Requirements</button>
            <button className={`${communication ? "text-blue-600 text-left": "hover:bg-gray-100 font-semibold p-2 text-left"}`}>Surveyor Selection & Communication</button>
            <button className={`${payments ? "text-blue-600 text-left": "hover:bg-gray-100 font-semibold p-2 text-left"}`}>Payments & Pricing</button>
            <button className={`${disputes ? "text-blue-600 text-left": "hover:bg-gray-100 font-semibold p-2 text-left"}`}>Disputes & Cancellation</button>
        </div>

        <div className="self-start w-1/2">
            <details className="border-b-2 border-gray-200">
                <summary className="py-4 ">How do I request a land survey?</summary>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quisquam architecto dolorem non assumenda itaque porro accusamus placeat, facilis quo sequi ipsam neque eaque minus necessitatibus. Aliquid atque, reiciendis ad corrupti, eaque delectus aspernatur non modi obcaecati, explicabo odio placeat!</p>
            </details>
            <details className="border-b-2 border-gray-200">
                <summary className="py-4 ">How do I stay in touch?</summary>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quisquam architecto dolorem non assumenda itaque porro accusamus placeat, facilis quo sequi ipsam neque eaque minus necessitatibus. Aliquid atque, reiciendis ad corrupti, eaque delectus aspernatur non modi obcaecati, explicabo odio placeat!</p>
            </details>
            <details className="border-b-2 border-gray-200">
                <summary className="py-4 ">What types of surveys do you offer?</summary>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quisquam architecto dolorem non assumenda itaque porro accusamus placeat, facilis quo sequi ipsam neque eaque minus necessitatibus. Aliquid atque, reiciendis ad corrupti, eaque delectus aspernatur non modi obcaecati, explicabo odio placeat!</p>
            </details>
            <details className="border-b-2 border-gray-200">
                <summary className="py-4 ">How long does a survey typically take?</summary>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quisquam architecto dolorem non assumenda itaque porro accusamus placeat, facilis quo sequi ipsam neque eaque minus necessitatibus. Aliquid atque, reiciendis ad corrupti, eaque delectus aspernatur non modi obcaecati, explicabo odio placeat!</p>
            </details>
        </div>

    </div>
  )
}
