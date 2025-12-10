"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import apiInstance from "../lib/axios";
import Link from "next/link";

export default function SignIn({clientSignIn,setClientSignIn,setSurveyorSignIn,setAccess}) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [ok,setOk] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await apiInstance.post("/client/login", {
        email,
        password,
      });

      await queryClient.invalidateQueries({ queryKey: ["authUser"] });

      const { ok, message, user } = res.data;

      console.log("User: ",user, "Okay: ",ok, "Message: ",message)

      if (!ok) {
        setErrorMsg(message || "Invalid credentials");
        return;
      }

      setOk(true);
      setErrorMsg(message);

      // redirect by role
      if (user.role === "client") router.push("/client/dashboard");
      // else if (user.role === "surveyor") router.push("/surveyor/dashboard");
      // else if (user.role === "admin") router.push("/admin/dashboard");

    } catch (error) {
      console.log(error.response?.data);
      setErrorMsg("Something went wrong. Try again.");
    }
  };


  const showAccess = ()=>{
    if(clientSignIn === true){
      setClientSignIn(false);
      setAccess(true);
    }else{
      setClientSignIn(true);
      setAccess(false)
    }
  }
  return (
    <div className={clientSignIn ? "w-1/2 max-sm:w-full min-h-screen rounded-3xl flex flex-col items-center p-4 gap-4" : "hidden"}>
      <button onClick={showAccess} className="self-start cursor-pointer"><FaArrowLeft size={17} className="inline mr-3"/>Back</button>
      <h2 className="text-2xl font-bold">Continue with your email</h2>
      <Link href={"/surveyor-login"} className="underline">Sign in as surveyor</Link>
      {ok ? (
            <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
        ) : (
            <>
                {errorMsg && (
                    <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
                )}
            </>
        )}

      <form className="flex flex-col gap-2 w-full" onSubmit={handleLogin}>
        {/* email */}
          <label htmlFor="email" className="text-blue-600">
              Email
              <input required type="email" name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-full border border-gray-200 block"/>
          </label>
          
          {/* password */}
          <label htmlFor="password" className="text-blue-600">
              Password 
              <input required type="password" name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-full border border-gray-200 block"/>
          </label>

          <button type="submit" className="bg-orange-600 text-white rounded-full py-2 px-4 text-center hover:bg-orange-700 cursor-pointer mt-10">Continue</button>

      </form>
    </div>
  )
}
