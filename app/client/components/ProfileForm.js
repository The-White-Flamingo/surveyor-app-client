"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import apiInstance from "../../lib/axios";
// import useAuth from "../../hooks/clientHooks/useAuth";
import { FaCamera } from "react-icons/fa";

export default function ProfileForm() {
  // const queryClient = useQueryClient();
  // const { data: authUser, isLoading } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    residentialAddress: "",
    postalAddress: "",
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState("/profile1.png");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Populate form when user data loads
  // useEffect(() => {
  //   if (authUser?.user) {
  //     const user = authUser.user;
  //     setForm({
  //       firstName: user.firstName || "",
  //       lastName: user.lastName || "",
  //       country: user.country || "",
  //       phoneNumber: user.phoneNumber || "",
  //       residentialAddress: user.residentialAddress || "",
  //       postalAddress: user.postalAddress || "",
  //     });

  //     // Set existing photo preview (adjust URL if needed)
  //     if (user.profilePhoto) {
  //       setProfilePhotoPreview(user.profilePhoto.startsWith("http") 
  //         ? user.profilePhoto 
  //         : `/uploads/${user.profilePhoto}` // adjust path as per your backend
  //       );
  //     }
  //   }
  // }, [
  //   // authUser
  // ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setProfilePhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

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

      // const res = await apiInstance.put("/client/profile", formData, {
      //   withCredentials: true,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      // await queryClient.invalidateQueries({ queryKey: ["authUser"] });

      if (!res.data.ok) {
        setErrorMsg(res.data.message || "Failed to update profile.");
        return;
      }

      setSuccessMsg("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="max-w-3xl mx-auto p-8 text-center">
  //       <p>Loading your profile...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
      <h3 className="text-2xl font-bold mb-6">Profile Settings</h3>

      {/* Profile Photo */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <Image
            src={profilePhotoPreview}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-gray-200"
          />
          <label className="absolute bottom-0 right-0 bg-orange-600 text-white p-3 rounded-full cursor-pointer hover:bg-orange-700 transition">
            <FaCamera size={18} />
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
          </label>
        </div>
        <div>
          <p className="font-semibold">Update Profile Photo</p>
          <p className="text-sm text-gray-500">JPG, PNG, GIF • Max 5MB</p>
        </div>
      </div>

      {/* Messages */}
      {successMsg && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 font-medium">
          ✓ {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 font-medium">
          ✗ {errorMsg}
        </div>
      )}

      <form 
        // onSubmit={handleSubmit} 
        className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
        </div>

        {/* Email (Read-only) */}
        <div>
          <label className="block font-bold mb-2">Email Address</label>
          <input
            type="email"
            // value={authUser.user?.email || ""}
            value={"johndoe@example.com"}
            disabled
            className="w-full bg-gray-100 text-gray-700 rounded-lg px-4 py-2 cursor-not-allowed"
          />
        </div>

        {/* Country & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold mb-2">Residential Address</label>
            <input
              type="text"
              name="residentialAddress"
              value={form.residentialAddress}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Postal Address</label>
            <input
              type="text"
              name="postalAddress"
              value={form.postalAddress}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="border-t-2 border-gray-200 pt-6 flex justify-end">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Save & Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import apiInstance from "../../lib/axios";
// import useAuth from "../../hooks/clientHooks/useAuth";

// export default function ProfileForm() {
//     const queryClient = useQueryClient();
//     const {data: authUser} = useAuth();

//     console.log("Authenticated user in profile form: ", authUser.user);
//     const [form, setForm] = useState({
//         firstName: authUser.user?.firstName || "",
//         lastName: authUser.user?.lastName || "",
//         country: authUser.user?.country || "",
//         phoneNumber: authUser.user?.phoneNumber || "",
//         residentialAddress: authUser.user?.residentialAddress || "",
//         postalAddress: authUser.user?.postalAddress || ""
//     });
//     const [profilePhoto,setProfilePhoto] = useState(authUser.user?.profilePhoto || null);
//     const [errorMsg, setErrorMsg] = useState("");
//     const [ok, setOk] = useState(false);

//     function handleChange(e) {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     }

//     function handlePhotoChange(e) {
//         console.log("Selected photo: ", e.target.files[0]);
//         setProfilePhoto(e.target.files[0]);
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         setErrorMsg("");
//         try {
//             const formData = new FormData();
//             formData.append("firstName", form.firstName);
//             formData.append("lastName", form.lastName);
//             formData.append("country", form.country);
//             formData.append("phoneNumber", form.phoneNumber);
//             formData.append("residentialAddress", form.residentialAddress);
//             formData.append("postalAddress", form.postalAddress);
//             if (profilePhoto) {
//                 formData.append("profilePhoto", profilePhoto);
//             }

//             const res = await apiInstance.put("/client/profile", formData, {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}});
//             await queryClient.invalidateQueries({ queryKey: ["authUser"] });
//             const { ok, message, user } = res.data;
//             console.log("Profile update: ", ok, message, user);

//             if(!ok) {
//                 setErrorMsg(message || "Could not update profile. Try again.");
//                 return;
//             }

//             if(!user) {
//                 setErrorMsg("User not found. Please login again.");
//                 return;
//             }

//             setOk(true);
//             setErrorMsg("Profile updated successfully.");

//         }catch (error) {
//             console.log(error);
//         }
//     }
//   return (
//     <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
//         <h3 className="font-bold">Profile Settings</h3>
//         <div className="flex gap-4 items-center">
//             <Image src={profilePhoto ? profilePhoto : "/profile1.png"} alt="profile-pic" className="" width={100} height={100}/>
//             <div className="flex flex-col">
//                 <p className="font-bold">Upload profile photo</p>
//                 <p className="text-sm text-gray-500">Profile image should be jpg,gif,png and size should not be more than 5mb</p>
//                 <input type="file" accept="image/*" name="files" className="text-white max-sm:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2" onChange={handlePhotoChange} />
//             </div>
//         </div>
//         <input type="file" accept="image/*" name="files" className="text-white lg:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2" onChange={handlePhotoChange} />

//         {ok ? (
//             <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
//         ) : (
//             <>
//                 {errorMsg && (
//                     <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
//                 )}
//             </>
//         )}

//         {/* {ok ? (
//             <div className="text-green-500 bg-green-100 p-2 mt-3 rounded-md">
//                 {errorMsg}
//             </div>
//         ) : errorMsg ? (
//             <div className="text-red-500 bg-red-100 p-2 mt-3 rounded-md">
//                 {errorMsg}
//             </div>
//         ) : null} */}

//         <form action="" className="flex flex-col gap-4 mb-5" encType="multipart/form-data" onSubmit={handleSubmit}>
//             <div className="my-4 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
//                 <div className="flex flex-col gap-2 w-full">
//                     <label htmlFor="first-name" className="font-bold">First name:</label>
//                     <input type="text" name="firstName" onChange={handleChange} value={form.firstName} className="border rounded-md px-3 border-gray-300"/>
//                 </div>
//                 <div className="flex flex-col gap-2 w-full">
//                     <label htmlFor="first-name" className="font-bold">Last name:</label>
//                     <input type="text" name="lastName" onChange={handleChange} value={form.lastName} className="border rounded-md px-3 border-gray-300"/>
//                 </div>
//             </div>

//             <label htmlFor="email" className="font-bold">Email address</label>
//             <input type="text" disabled className="bg-gray-100 text-gray-900 rounded-md py-1 px-4" placeholder={authUser.user?.email || ""}/>

//             <div className="mt-4 flex items-center justify-between gap-4  max-sm:flex max-sm:flex-col max-sm:items-start">
//                 <div className="flex flex-col w-full gap-2">
//                     <label htmlFor="first-name" className="font-bold">Country:</label>
//                     <input type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300"/>
//                 </div>
//                 <div className="flex flex-col w-full gap-2">
//                     <label htmlFor="first-name" className="font-bold">Phone number:</label>
//                     <input type="text" name="phoneNumber" onChange={handleChange} value={form.phoneNumber} className="border rounded-md px-3 border-gray-300"/>
//                 </div>
//             </div>

//             <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
//                 <div className="flex flex-col w-full gap-2">
//                     <label htmlFor="first-name" className="font-bold">Residential address:</label>
//                     <input type="text" name="residentialAddress" onChange={handleChange} value={form.residentialAddress} className="border rounded-md px-3 border-gray-300"/>
//                 </div>
//                 <div className="flex flex-col w-full gap-2">
//                     <label htmlFor="first-name" className="font-bold">Postal address:</label>
//                     <input type="text" name="postalAddress" onChange={handleChange} value={form.postalAddress} className="border rounded-md px-3 border-gray-300"/>
//                 </div>
//             </div>

//             <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
//                 <span className="text-sm">Click save and update to make your changes</span>
//                 <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
//             </div>
//         </form>
//     </div>
//   )
// }
