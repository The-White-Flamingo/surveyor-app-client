"use client"
import Image from "next/image";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";
import useAuth from "../../hooks/clientHooks/useAuth";

export default function ProfileForm() {
    const queryClient = useQueryClient();
    const {data: authUser} = useAuth();

    console.log("Authenticated user in profile form: ", authUser.user);
    const [form, setForm] = useState({
        firstName: authUser.user?.firstName || "",
        lastName: authUser.user?.lastName || "",
        country: authUser.user?.country || "",
        phoneNumber: authUser.user?.phoneNumber || "",
        residentialAddress: authUser.user?.residentialAddress || "",
        postalAddress: authUser.user?.postalAddress || ""
    });
    const [profilePhoto,setProfilePhoto] = useState(authUser.user?.profilePhoto || null);
    const [errorMsg, setErrorMsg] = useState("");
    const [ok, setOk] = useState(false);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function handlePhotoChange(e) {
        console.log("Selected photo: ", e.target.files[0]);
        setProfilePhoto(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg("");
        try {
            const formData = new FormData();
            formData.append("firstName", form.firstName);
            formData.append("lastName", form.lastName);
            formData.append("country", form.country);
            formData.append("phoneNumber", form.phoneNumber);
            formData.append("residentialAddress", form.residentialAddress);
            formData.append("postalAddress", form.postalAddress);
            if (profilePhoto) {
                formData.append("profilePhoto", profilePhoto);
            }

            const res = await apiInstance.put("/client/profile", formData, {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}});
            await queryClient.invalidateQueries({ queryKey: ["authUser"] });
            const { ok, message, user } = res.data;
            console.log("Profile update: ", ok, message, user);

            if(!ok) {
                setErrorMsg(message || "Could not update profile. Try again.");
                return;
            }

            if(!user) {
                setErrorMsg("User not found. Please login again.");
                return;
            }

            setOk(true);
            setErrorMsg("Profile updated successfully.");

        }catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
        <h3 className="font-bold">Profile Settings</h3>
        <div className="flex gap-4 items-center">
            <Image src={profilePhoto ? profilePhoto : "/profile1.png"} alt="profile-pic" className="" width={100} height={100}/>
            <div className="flex flex-col">
                <p className="font-bold">Upload profile photo</p>
                <p className="text-sm text-gray-500">Profile image should be jpg,gif,png and size should not be more than 5mb</p>
                <input type="file" accept="image/*" name="files" className="text-white max-sm:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2" onChange={handlePhotoChange} />
            </div>
        </div>
        <input type="file" accept="image/*" name="files" className="text-white lg:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2" onChange={handlePhotoChange} />

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

        <form action="" className="flex flex-col gap-4 mb-5" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="my-4 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first-name" className="font-bold">First name:</label>
                    <input type="text" name="firstName" onChange={handleChange} value={form.firstName} className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first-name" className="font-bold">Last name:</label>
                    <input type="text" name="lastName" onChange={handleChange} value={form.lastName} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <label htmlFor="email" className="font-bold">Email address</label>
            <input type="text" disabled className="bg-gray-100 text-gray-900 rounded-md py-1 px-4" placeholder={authUser.user?.email || ""}/>

            <div className="mt-4 flex items-center justify-between gap-4  max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Country:</label>
                    <input type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Phone number:</label>
                    <input type="text" name="phoneNumber" onChange={handleChange} value={form.phoneNumber} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Residential address:</label>
                    <input type="text" name="residentialAddress" onChange={handleChange} value={form.residentialAddress} className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Postal address:</label>
                    <input type="text" name="postalAddress" onChange={handleChange} value={form.postalAddress} className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
                <span className="text-sm">Click save and update to make your changes</span>
                <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
            </div>
        </form>
    </div>
  )
}
