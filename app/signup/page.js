"use client"
import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [residentialAddress,setResidentialAddress] = useState("");
  const [postalAddress,setPostalAddress] = useState("");
  const [errorMsg,setErrorMsg] = useState("");

  const handleSignin = async (e)=>{
    e.preventDefault();
    setErrorMsg("");

    try{
      const res = await fetch("http://localhost:5000/api/signup",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({firstName,lastName,email,phoneNumber,password,residentialAddress,postalAddress,role:"client"}),
      });

      const data = await res.json();
      console.log(data)
      if(!res.ok) {
        setErrorMsg(data.message || "Invalid credentials");
        return
      }

      setUser(data.user);
      
      if (data.user.role === "client") router.push("/client/dashboard");
      else if (data.user.role === "surveyor") router.push("/surveyor/dashboard");
      else if (data.user.role === "admin") router.push("/admin/dashboard");
      else router.push("/client/dashboard");
    }catch(error){
      setErrorMsg("Something went wrong. Try again.")
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div style={{background:"rgba(0,0,0,0.6)"}} className="w-full h-screen p-4 flex justify-center max-sm:p-0">
        <div className="flex items-center shadow-lg w-2/3 rounded-md bg-orange-600 max-sm:w-ful">

          <div className="w-full max-w-md rounded-md flex flex-col items-center max-sm:hidden">
            <h3 className="text-white">Surveyor App</h3>
            <span className="text-white mb-3 text-sm ">Already have an account</span>
            <Link href={"/login"} className="text-white shadow-lg py-2 px-1 w-32 text-center rounded-full bg-orange-500 hover:bg-orange-700">Login</Link>
          </div>

          <form onSubmit={handleSignin}
            className="bg-white p-6 shadow-md rounded-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

            {errorMsg && <p className="bg-red-100 text-red-600 p-2 rounded mb-3">{errorMsg}</p>}

            <label className="block mb-1 font-medum">First Name</label>
            <input type="text" name="firstName" id="firstName"
            onChange={(e)=>setFirstName(e.target.value)} 
            className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"/>

            <label className="block mb-1 font-medium">Last Name</label>
            <input type="text" name="lastName" id="lastName"
            className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"
            onChange={(e)=>setLastName(e.target.value)} />

            <label className="block mb-1 font-medium">Email</label>
              <input type="text" className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"
              onChange={(e)=>setEmail(e.target.value)}/>

            <label className="block mb-1 font-medium">Phone Number</label>
              <input type="phone" className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"
              onChange={(e)=>setPhone(e.target.value)}/>

            <label className="block mb-1 font-medium">Password</label>
              <input type="password" className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"
              onChange={(e)=>setPassword(e.target.value)}/>

            <label className="block mb-1 font-medium">Residential Address</label>
              <input type="text" className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"
              onChange={(e)=>setResidentialAddress(e.target.value)}/>

            <label className="block mb-1 font-medium">Postal Code</label>
              <input type="text" className="border border-gray-300 w-full rounded-lg mb-2 py-1 px-2"
              onChange={(e)=>setPostalAddress(e.target.value)}/>

            <button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-bold"
                type="submit"
              >
                Sign Up
            </button>
            <span className="text-black mb-3 block text-sm lg:hidden">Already have an account</span>
            <Link href={"/login"} className="text-white block shadow-lg py-2 px-1 w-full text-center bg-orange-600 hover:bg-orange-700 lg:hidden">Login</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
