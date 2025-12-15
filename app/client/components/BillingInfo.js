"use client"
import { useState } from "react";
// import {useQueryClient} from "@tanstack/react-query";
// import apiInstance from "../../lib/axios";

export default function BillingInfo() {
    // const queryClient = useQueryClient();
    // console.log("Authenticated user in profile form: ", user);

    // const [form,setForm] = useState({
    //     firstName: user?.firstName || "",
    //     lastName: user?.lastName || "",
    //     country: user?.country || "",
    //     companyTitle: user?.companyTitle || "",
    //     city: user?.city || "",
    //     address: user?.address || "",
    //     postCode: user?.postCode || "",
    //     email: user?.email || "",
    //     phone: user?.phone || ""
    // });

    const [form,setForm] = useState({
        firstName: "",
        lastName: "",
        country: "",
        companyTitle: "",
        city: "",
        address: "",
        postCode: "",
        email: "",
        phone: ""
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
        try {
            // const res = await apiInstance.post("/client/billing-info", form, {withCredentials: true});
            // await queryClient.invalidateQueries({ queryKey: ["authUser"] });
            const { ok, message, billingInfo } = res.data;
            console.log("Billing info update: ", ok, message, billingInfo);
            if(!ok) {
                setErrorMsg(message || "Could not update billing info. Try again.");
                return;
            }
            if(!billingInfo) {
                setErrorMsg("User not found. Please login again.");
                return;
            }
            
            setOk(true);
            setErrorMsg("Profile updated successfully.");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
        <h3 className="font-bold">Billing Information</h3>
        
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
        <form action="" className="flex flex-col gap-4 mb-5" 
            // onSubmit={handleSubmit}
            >
            <div className="mt-4 flex items-center justify-between gap-4  max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">First name:</label>
                    <input type="text" name="firstName" onChange={handleChange} value={form.firstName} className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="last-name" className="font-bold">Last name:</label>
                    <input type="text" name="lastName" onChange={handleChange} value={form.lastName} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="country" className="font-bold">Country:</label>
                    <select type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300 p-1">
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="company-title" className="font-bold">Company title:</label>
                    <input type="text" name="companyTitle" onChange={handleChange} value={form.companyTitle} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="city" className="font-bold">City:</label>
                    <input type="text" name="city" onChange={handleChange} value={form.city} className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="address" className="font-bold">Address:</label>
                    <input type="text" name="address" onChange={handleChange} value={form.address} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="postal-code" className="font-bold">Postal Code:</label>
                    <input type="text" name="postCode" onChange={handleChange} value={form.postCode} className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input type="text" name="email" onChange={handleChange} value={form.email} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="phone-number" className="font-bold">Phone:</label>
                    <input type="text" name="phone" onChange={handleChange} value={form.phone} className="border w-1/2 rounded-md px-3 border-gray-300"/>
                </div>
                {/* <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Email:</label>
                    <input type="text" name="lastname" className="border rounded-md px-3 border-gray-300"/>
                </div> */}
            </div> 

            <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
                <span className="text-sm">Click save and update to make your changes</span>
                <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
            </div>
        </form>
    </div>
  )
}
