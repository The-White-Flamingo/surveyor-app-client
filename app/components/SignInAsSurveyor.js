"use client";
import { FaArrowLeft } from "react-icons/fa";

export default function SignInAsSurveyor({surveyorSignIn,setClientSignIn,setSurveyorSignIn,setAccess}) {
  
  const showAccess = ()=>{
    if(surveyorSignIn === true){
      setSurveyorSignIn(false);
      setAccess(true);
    }else{
      setSurveyorSignIn(true);
      setAccess(false)
    }
  }

  const showClientSignIn = ()=>{
    if(surveyorSignIn === true){
      setClientSignIn(true);
      setSurveyorSignIn(false);
    }else{
      setClientSignIn(false);
      setSurveyorSignIn(true);
    }
  }
  return (
    <div className={surveyorSignIn ? "w-1/2 max-sm:w-full min-h-screen rounded-3xl flex flex-col items-center p-4 gap-4" : "hidden"}>
      <button onClick={showAccess} className="self-start cursor-pointer"><FaArrowLeft size={17} className="inline mr-3"/>Back</button>
      <h2 className="text-2xl font-bold">Continue with your email as client</h2>
      <button onClick={showClientSignIn} className="underline cursor-pointer">Sign in as Surveyor</button>
      <form className="flex flex-col gap-2 w-full">
        {/* email */}
          <label htmlFor="email" className="text-blue-600">
              Email
              <input required type="email" name="email" className="w-full p-3 rounded-full border border-gray-200 block"/>
          </label>
          
          {/* password */}
          <label htmlFor="password" className="text-blue-600">
              Password 
              <input required type="password" name="password" className="w-full p-3 rounded-full border border-gray-200 block"/>
          </label>

          <button className="bg-orange-600 text-white rounded-full py-2 px-4 text-center hover:bg-orange-700 cursor-pointer mt-10">Continue</button>

      </form>
    </div>
  )
}
