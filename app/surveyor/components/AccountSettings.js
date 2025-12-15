"use client"
import {useState} from "react";
// import { useQueryClient } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function AccountSettings() {
    // const queryClient = useQueryClient();
    const [form,setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [errorMsg,setErrorMsg] = useState("");
    const [ok, setOk] = useState(false);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg("");

        if(form.newPassword !== form.confirmPassword) {
            setErrorMsg("New password and confirm password do not match.");
            return;
        }

        try {
            const res = await apiInstance.put("/surveyor/update-password", form, {withCredentials: true});
            // await queryClient.invalidateQueries({ queryKey: ["authSurveyor"] });
            const { ok, message } = res.data;
            console.log("Account settings update: ", ok, message);
            if(!ok) {
                setErrorMsg(message || "Could not update account settings. Try again.");
                return;
            }

            setOk(true);
            setErrorMsg("Account settings updated successfully.");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="max-w-3xl bg-white rounded-lg p-3 mt-5 flex-1">
        <h3 className="font-bold">Change Password</h3>
        {ok ? (
            <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
        ) : (
            <>
                {errorMsg && (
                    <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
                )}
            </>
        )}

        {/* {ok ? (
            <div className="text-green-500 bg-green-100 p-2 mt-3 rounded-md">
                {errorMsg}
            </div>
        ) : errorMsg ? (
            <div className="text-red-500 bg-red-100 p-2 mt-3 rounded-md">
                {errorMsg}
            </div>
        ) : null} */}
        <form className="my-4 flex flex-col gap-3" 
            // onSubmit={handleSubmit}
            >   
            <div className="border-t-2 border-b-2 border-gray-300 flex flex-col gap-4 py-4">
                <div className="flex gap-3 items-center justify-between">
                    <label htmlFor="current-password" className="text-sm font-bold">Current password:</label>
                    <input type="password" name="currentPassword" id="password" onChange={handleChange} value={form.currentPassword} className="border px-3 py-1 rounded-lg text-gray-500 flex-1" placeholder="Enter password"/>
                </div>
                <div className="flex gap-3 items-center justify-between">
                    <label htmlFor="" className="text-sm font-bold">New password:</label>
                    <input type="password" name="newPassword" id="password" onChange={handleChange} value={form.newPassword} className="border px-3 py-1 rounded-lg text-gray-500 flex-1" placeholder="Enter new password"/>
                </div>
                <div className="flex gap-3 items-center justify-between">
                    <label htmlFor="" className="text-sm font-bold">Confirm password:</label>
                    <input type="password" name="confirmPassword" id="password" onChange={handleChange} value={form.confirmPassword} className="border px-3 py-1 rounded-lg text-gray-500 flex-1" placeholder="Re-enter new password"/>
                </div>
            </div>

            <div className="flex justify-end gap-4 items-center max-sm:flex max-sm:flex-col">
                <span className="text-sm">Click save and update to make your changes</span>
                <button className="text-white bg-orange-600 px-4 py-2 rounded-lg max-sm:w-full">Save & Update</button>
            </div>

            <h3 className="font-bold">Manage Notifications</h3>
            <div className="border-t-2 border-gray-300 flex flex-col gap-5">
                <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-sm">In-app notifications</span>
                    <input type="radio" name="" id="" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Email notifications</span>
                    <input type="radio" name="" id="" className=""/>
                </div>
            </div>
        </form>
    </div>
  )
}
