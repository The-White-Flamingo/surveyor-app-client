"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient  } from "@tanstack/react-query";
import apiInstance from "../lib/axios";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function SignupPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [residentialAddress,setResidentialAddress] = useState("");
  const [postalAddress,setPostalAddress] = useState("");
  const [errorMsg,setErrorMsg] = useState("");
  const [ok,setOk] = useState(false);

  const handleSignin = async (e)=>{
    e.preventDefault();
    setErrorMsg("");

    try{
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
      
      router.push("/client/dashboard");

    }catch(error){
      setErrorMsg("Something went wrong. Try again.")
    }
  };

  return (
    <div className="max-h-screen w-full bg-white overflow-y-auto">
      <div style={{background:"rgba(0,0,0,0.6)"}} className="w-full max-h-screen overflow-y-auto flex justify-center items-center max-sm:py-20">
            <form className="flex flex-col gap-2 max-sm:w-full w-4xl p-6 bg-white rounded-3xl max-sm:mt-50 "
            onSubmit={handleSignin}>
              <Link href={"/"}><FaArrowLeft size={17} className="inline"/>Home</Link>
              <h2 className="font-semibold text-2xl">Join us as a Surveyor</h2>
              <span>Already have an account? <Link href={"/surveyor-login"} className="underline cursor-pointer">Sign in</Link></span>
              {ok ? (
              <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
              ) : (
                  <>
                      {errorMsg && (
                          <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
                      )}
                  </>
              )}

              <div className="flex items-center gap-4 w-full max-sm:flex max-sm:flex-col">
                {/* first name */}
                <label htmlFor="firstName" className="w-full text-blue-600">
                    First Name
                    <input 
                    required type="text" name="firstName" 
                    onChange={(e)=>setFirstName(e.target.value)} 
                    className="w-full p-3 rounded-full border border-gray-200 block"/>
                </label>
                {/* last name */}
                <label htmlFor="lastName" className="w-full text-blue-600">
                    Last Name
                    <input 
                    required type="text" name="lastName" 
                    onChange={(e)=>setLastName(e.target.value)}
                    className="w-full p-3 rounded-full border border-gray-200 block"/>
                </label>
            </div>
            {/* email */}
            <label htmlFor="email" className="text-blue-600">
                Email
                <input 
                required type="email" name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* phone number */}
            <label htmlFor="phoneNumber" className="text-blue-600">
                Phone number
                <input 
                required type="phone" name="phone" 
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* password */}
            <label htmlFor="password" className="text-blue-600">
                Password 
                <input 
                required type="password" name="password" 
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* confirm password */}
            <label htmlFor="confirmPassword" className="text-blue-600">
                Confirm password
                <input 
                required type="password" name="confirmPassword" 
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* residential address */}
            <label htmlFor="residentialAddress" className="text-blue-600">
                Residential address
                <input 
                required type="text" name="residentialAddress" 
                onChange={(e)=>setResidentialAddress(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>
            {/* postal address */}
            <label htmlFor="postalAddress" className="text-blue-600">
                Postal address
                <input 
                required type="text" name="postalAddress" 
                onChange={(e)=>setPostalAddress(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-200 block"/>
            </label>

            <button type="submit" className="bg-orange-600 text-white rounded-full py-2 px-4 text-center hover:bg-orange-700 cursor-pointer mt-10">Continue</button>
        </form>

      </div>

    </div>
  )
}
