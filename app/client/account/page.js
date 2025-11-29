"use client"
import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import AccountSettings from "../components/AccountSettings";
import BillingInfo from "../components/BillingInfo";
import { FiSettings } from "react-icons/fi"
import { FaIdCard } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
// import ProtectedRoute from "../components/ProtectedRoute";


export default function Account() {
  const [profile,setProfile] = useState(true);
  const [billingInfo,setBillingInfo] = useState(false);
  const [account,setAccount] = useState(false);

  const showProfile = ()=>{
    setProfile(true);
    setBillingInfo(false);
    setAccount(false);
  }

  const showBillingInfo = ()=>{
    setBillingInfo(true);
    setAccount(false);
    setProfile(false);
  }

  const showAccount = ()=>{
    setAccount(true);
    setBillingInfo(false);
    setProfile(false);
  }

  return (
    <div className="flex gap-3 max-sm:flex max-sm:flex-col ">
        <div className="bg-white text-md flex flex-col gap-3 rounded-lg w-56 max-sm:w-full py-3 px-2 mt-5 self-start">
          <button onClick={()=>showProfile()} className={`py-1 px-2 hover:bg-gray-100 rounded-md flex items-center gap-2 ${profile ? "bg-gray-100" : "bg-white"}`}><FiUser size={18}/><span>Profile settings</span></button>
          <button onClick={()=>showBillingInfo()} className={`py-1 px-2 hover:bg-gray-100 rounded-md flex items-center gap-2 ${billingInfo ? "bg-gray-100" : "bg-white"}`}><FaIdCard size={18}/><span>Billing information</span></button>
          <button onClick={()=>showAccount()} className={`py-1 px-2 hover:bg-gray-100 rounded-md flex items-center gap-2 ${account ? "bg-gray-100" : "bg-white"}`}><FiSettings size={18} className=""/><span>Account settings</span></button>
        </div>
        {profile ? (
          <>
            <ProfileForm />        
          </>
        ):(
          <>
          
          </>
        )}

        {billingInfo ? (
          <>
            <BillingInfo />
          </>
        ):(
          <>
          
          </>
        )}

        {account ? (
          <>
            <AccountSettings />
          </>
        ):(
          <>
          
          </>
        )}
    </div>
  )
}
