"use client";
import { FaUser } from "react-icons/fa";


export default function AccessPanel({access,setAccess,setClientSignUp,setClientSignIn,setSurveyorSignUp}) {
    const showClientSignUp = ()=>{
        if(access === true){
            setClientSignUp(true);
            setAccess(false)
        }else{
            setClientSignUp(false);
            setAccess(true);
        }
    }

    const showSurveyorSignUP = ()=>{
        if(access === true){
            setSurveyorSignUp(true);
            setAccess(false)
        }else{
            setSurveyorSignUp(false);
            setAccess(true)
        }
    }

    const showClientSignIn = ()=>{
        if(access == true){
            setClientSignIn(true);
            setAccess(false);
        }else{
            setClientSignIn(false);
            setAccess(true);
        }
    }
    return (
    <div className={access ? "w-1/2 max-sm:w-full min-h-screen rounded-3xl flex flex-col items-center p-4 gap-4" : "hidden"}>
        <div>
            <h2 className="text-2xl font-semibold">Sign Up as a Client or Surveyor</h2>
            <span>Already have an account? <button onClick={showClientSignIn} className="underline cursor-pointer">Sign in</button></span>                        
        </div>

        <div className="flex flex-col gap-4 w-96 max-sm:w-full">
            <button onClick={showClientSignUp} className="py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-start text-center px-4 rounded-full border border-gray-100"><FaUser size={17} className="inline self-start mr-20"/>Continue as client</button>
            <button onClick={showSurveyorSignUP} className="py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-start text-center px-4 rounded-full border border-gray-100"><FaUser size={17} className="inline self-start mr-20"/>Continue as surveyor</button>
        </div>
    </div>
  )
}
