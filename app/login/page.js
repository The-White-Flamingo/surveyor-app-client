"use client";

import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  // const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // try {
    //   const res = await fetch("http://localhost:5000/api/signin", {
    //     method: "POST",
    //     credentials: "include",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await res.json();
    //   console.log(data);
    //   if (!res.ok) {
    //     setErrorMsg(data.message || "Invalid credentials");
    //     return;
    //   }

    //   // store user in context
    //   setUser(data.user);

    //   // redirect based on role
    //   if (data.user.role === "client") router.push("/client/dashboard");
    //   else if (data.user.role === "surveyor") router.push("/surveyor");
    //   else if (data.user.role === "admin") router.push("/admin");
    //   else router.push("/dashboard");

    // } catch (error) {
    //   setErrorMsg("Something went wrong. Try again.");
    // }
    router.push("/client/dashboard");
    
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div style={{background: "rgba(0,0,0,0.6)"}} className="w-full h-screen flex justify-center items-center p-4">
        <form 
          onSubmit={handleLogin}
          className="bg-white p-6 shadow-md rounded-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          {errorMsg && <p className="bg-red-100 text-red-600 p-2 rounded mb-3">{errorMsg}</p>}

          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 mb-4 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 mb-4 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-bold mb-4"
            type="submit"
          >
            Log In
          </button>

          <span className="block mb-3 font-small">Don't have an account</span>
          <Link href={"/signup"} className="w-full block py-2 text-center border border-gray-400 rounded-full hover:bg-gray-200 font-medium mb-5">
            Sign Up
          </Link>
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
