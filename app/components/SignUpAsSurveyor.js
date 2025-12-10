"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient  } from "@tanstack/react-query";
import apiInstance from "../lib/axios";

export default function SignUpAsSurveyor({surveyorSignUp,setSurveyorSignUp,setAccess}) {
    const router = useRouter();
    const queryClient = useQueryClient();

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [residentialAddress,setResidentialAddress] = useState("");
    const [postalAddress,setPostalAddress] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    const [ok,setOk] = useState(false);

const handleSignin = async (e)=>{
    e.preventDefault();
    setErrorMsg("");

    try{
        if(password !== confirmPassword){
            setErrorMsg("Password and the same as confirm password");
            return;
        }
      const res = await apiInstance.post("/surveyor/signup",{
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        residentialAddress,
        postalAddress,
        role:"client"
      });

      await queryClient.invalidateQueries({ queryKey: ["authUser"] });
      
      const {ok, message, user} = await res.data;

      if(!ok) {
        setErrorMsg(message || "Invalid credentials");
        return
      }

      if(!user){
        setErrorMsg("Invalid credentials");
        return;
      }

      setOk(true);
      setErrorMsg(message);

      router.push("/surveyor/dashboard");

    }catch(error){
      setErrorMsg("Something went wrong. Try again.")
    }
  };



    const showAccessPanel = ()=>{
        if(surveyorSignUp === true){
            setAccess(true);
            setSurveyorSignUp(false);
        }else{
            setAccess(false);
            setSurveyorSignUp(true);
        }
    }

  return (
    <div 
        className={surveyorSignUp ? "w-1/2 max-sm:w-full min-h-screen rounded-3xl flex flex-col justify-start p-4 gap-4": "hidden"}>
        <button onClick={()=>showAccessPanel()} className="self-start cursor-pointer"><FaArrowLeft size={17} className="inline mr-3"/>Back</button>
        <h2 className="text-2xl font-bold">Continue with your email as surveyor</h2>
        {ok ? (
            <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
        ) : (
            <>
                {errorMsg && (
                    <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
                )}
            </>
        )}

        <form className="flex flex-col gap-2 w-full" onSubmit={handleSignin}>
            <div className="flex items-center gap-4 w-full max-sm:flex max-sm:flex-col">
                {/* first name */}
                <label htmlFor="firstName" 
                className="w-full text-blue-600">
                    First Name
                    <input required type="text" name="firstName"
                    onChange={(e)=>setFirstName(e.target.value)} 
                    className="w-full p-3 rounded-full border border-gray-200 block"/>
                </label>
                {/* last name */}
                <label htmlFor="lastName"
                className="w-full text-blue-600">
                    Last Name
                    <input required type="text" name="lastName" 
                    onChange={(e)=>setLastName(e.target.value)}
                    className="w-full p-3 rounded-full border border-gray-200 block"/>
                </label>
            </div>
            {/* email */}
            <label htmlFor="email" 
            className="text-blue-600">
                Email
                <input required type="email" name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* phone number */}
            <label htmlFor="phone"
            className="text-blue-600">
                Phone number
                <input required type="phone" name="phone" 
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* password */}
            <label htmlFor="password" className="text-blue-600">
                Password 
                <input required type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                name="password" className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* confirm password */}
            <label htmlFor="confirmPassword" className="text-blue-600">
                Confirm password
                <input required type="password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                name="confirmPassword" className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* residential address */}
            <label htmlFor="residentialAddress" className="text-blue-600">
                Residential address
                <input required type="text" 
                onChange={(e)=>setResidentialAddress(e.target.value)}
                name="residentialAddress" className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* postal address */}
            <label htmlFor="postalAddress" className="text-blue-600">
                Postal address
                <input required type="text"
                onChange={(e)=>setPostalAddress(e.target.value)}
                name="postalAddress" className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>

            <button type="submit" className="bg-orange-600 text-white rounded-full py-2 px-4 text-center hover:bg-orange-700 cursor-pointer mt-10">Continue</button>
        </form>
    </div>
  )
}
