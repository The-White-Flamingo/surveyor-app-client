"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import apiInstance from "../lib/axios";
import Link from "next/link";

export default function LoginPage() {
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
      const res = await apiInstance.post("/surveyor/login", {
        email,
        password,
      });

      await queryClient.invalidateQueries({ queryKey: ["authSurveyor"] });

      const { ok, message, surveyor } = res.data;

      console.log("User: ",surveyor, "Okay: ",ok, "Message: ",message)

      if (!ok) {
        setErrorMsg(message || "Invalid credentials");
        return;
      }

      setOk(true);
      setErrorMsg(message);

      if (surveyor.role === "surveyor") router.push("/surveyor/dashboard");

    } catch (error) {
      console.log(error.response?.data);
      setErrorMsg("Something went wrong. Try again.");
    }
  };

  
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setErrorMsg("");

  //   try {
  //     const res = await apiInstance.post("/signin", {
  //       email,
  //       password,
  //     });

  //     await queryClient.invalidateQueries({ queryKey: ["authUser"] });
  //     const data = await res.data.user;

  //     if (!data.ok) {
  //       setErrorMsg(data.message || "Invalid credentials");
  //       return;
  //     }

  //     console.log("Logged in user:", data);

  //     if (!data) {
  //       setErrorMsg("Invalid credentials");
  //       return;
  //     }

  //     // redirect by Role
  //     if (data.role === "client") {
  //       router.push("/client/dashboard");
  //       return;
  //     }
  //     else if (data.role === "surveyor") {
  //       router.push("/surveyor/dashboard");
  //       return;
  //     }
  //     else if (data.role === "admin") {
  //       router.push("/admin/dashboard");
  //       return;
  //     }
  //   } catch (error) {
  //     setErrorMsg("Something went wrong. Try again.");
  //   }
  // };

  return (
    <div className="min-h-screen w-full bg-white"> 
      <div style={{background: "rgba(0,0,0,0.6)"}} className="w-full h-screen flex justify-center items-center p-4">
        <form className="flex flex-col gap-2 max-w-3xl p-4 w-full bg-white rounded-3xl" onSubmit={handleLogin}>
          <Link href={"/"}><FaArrowLeft size={17} className="inline"/>Home</Link>
          <h2 className="text-2xl font-bold">Continue with your email</h2>
          {ok ? (
            <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
          ) : (
              <>
                  {errorMsg && (
                      <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
                  )}
              </>
          )}

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

          <button type="submit" className="bg-orange-600 text-white rounded-full py-2 px-4 text-center hover:bg-orange-700 cursor-pointer mt-10 mb-10">Sign In</button>

        </form>
      </div>
    </div>
  );
}

// "use client"
// import { useState, useContext } from "react"
// import { AuthContext } from "../context/AuthContext"
// import { useRouter } from "next/navigation"

// export default function LoginPage() {
//   const router = useRouter();
//   const { setUser } = useContext(AuthContext);

//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [errorMsg,setErrorMsg] = useState("");

//   const handleLogin = async (e)=> {
//     e.preventDefault();
//     setErrorMsg("");

//     try{
//       const res = await fetch("http://localhost:5000/api/signin",{
//         method: "POST",
//         credentials: "include",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify({email,password})
//       })

//       const data = await res.json();

//       if(!res.ok){
//         setErrorMsg(data.message || "Invalid credentials");
//         return;
//       }

//       setUser(data.user);

//       if(data.user.role === "client") router.push("/client");
//       else if(data.user.role === "surveyor") router.push("/surveyor");
//       else if(data.user.role === "admin") router.push("/admin");
//       else router.push("/dashboard");
//     }catch(error){
//       setErrorMsg("Something went wrong. Try again.");
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form onSubmit={handleLogin}
//       className="bg-white p-6 shadow-md rounded-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         {errorMsg && <p className="bg-red-100 text-red-600 p-2 rounded mb-3">{errorMsg}</p>}

//         <label className="block mb-1 font-medium">Email</label>
//         <input
//          type="email"
//           name="email" 
//           id="email"
//           className="w-full border px-3 py-2 mb-4 rounded"
//           onChange={(e)=>setEmail(e.target.value)} />

//         <label className="block mb-1 font-medium">Password</label>
//         <input type="password" name="password" id="password"
//           className="w-full border px-3 py-2 mb-4 rounded"
//           onChange={(e)=>setPassword(e.target.value)} />

//           <button
//             type="submit"
//             className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-bold">
//             Login
//           </button>
//       </form>
//     </div>
//   )
// }
