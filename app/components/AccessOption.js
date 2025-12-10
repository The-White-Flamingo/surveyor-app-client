"use client";
import { FaTimes, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import AccessPanel from "./AccessPanel";
import SignUpAsClient from "./SignUpAsClient";
import SignUpAsSurveyor from "./SignUpAsSurveyor";
import SignIn from "./SignIn";

export default function AccessOption({showAccess,setShowAccess}) {
    const [clientSignUp,setClientSignUp] = useState(false);
    const [surveyorSignUp,setSurveyorSignUp] = useState(false);
    
    const [clientSignIn,setClientSignIn] = useState(false);

    const [access,setAccess] = useState(true);

    useEffect(()=>{

    },[clientSignUp,surveyorSignUp,clientSignIn,access])
    return (
    <div
        style={(showAccess) ? {background:"rgba(0,0,0,0.6)",top:"0",left:"0"} : {display:"none"}}
        className='absolute z-10 w-full max-h-screen overflow-y-auto flex flex-col gap-3 p-4'>
            <button onClick={()=>showAccess ? setShowAccess(false) : setShowAccess(true)} className="p-4 rounded-full cursor-pointer bg-orange-600 text-white self-end"><FaTimes size={17}/></button>
            <div className="w-full flex items center bg-white rounded-3xl">
                <div className="w-1/2 max-sm:hidden max-md:hidden rounded-3xl relative">
                    <div style={{left:"10%",top:"3%"}} className="absolute flex flex-col gap-4 max-sm:hidden max-md:hidden text-white">
                        <h2 className="text-2xl font-bold">Welcome to Surveyors Hub</h2>
                        <p><FaCheck size={17} className="inline mr-3"/>Quality work</p>
                        <p><FaCheck size={17} className="inline mr-3"/>Access to the best surveyors</p>
                        <p><FaCheck size={17} className="inline mr-3"/>Fast and assured delivery</p>
                    </div>
                    <Image src={"/image 13.png"} alt="" className="rounded-3xl" width={1000} height={1000}/>
                </div>
                
                <AccessPanel access={access} setAccess={setAccess} setClientSignUp={setClientSignUp} 
                    surveyorSignUp={surveyorSignUp} setSurveyorSignUp={setSurveyorSignUp}
                    setClientSignIn={setClientSignIn}
                />

                <SignIn clientSignIn={clientSignIn} setClientSignIn={setClientSignIn} setAccess={setAccess}/>
                <SignUpAsClient clientSignUp={clientSignUp} setClientSignUp={setClientSignUp} setAccess={setAccess}/>
                <SignUpAsSurveyor surveyorSignUp={surveyorSignUp} setSurveyorSignUp={setSurveyorSignUp} setAccess={setAccess}/>
            </div>
    </div>
  )
}
