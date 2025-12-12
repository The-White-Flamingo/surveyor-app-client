"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaUpload, FaTrash } from "react-icons/fa";
import apiInstance from "../../lib/axios";
import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";
import { useQueryClient } from "@tanstack/react-query";

export default function IdentityForm(){
    const queryClient = useQueryClient();
    const {data: surveyor} = SurveyorAuth();

    console.log("Authenticated surveyor: ", surveyor);

    const [profilePhoto,setProfilePhoto] = useState(null);
    const [idPhoto,setIdPhoto] = useState(null)
    const [certificatePDF,setCertificatePDF] = useState(null)

    const [ok,setOk]= useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    // preview uploaded files
    const [previews, setPreviews] = useState([]);
    // add preview
    // Individual previews for ID and Certificate (only these appear in lists)
    const [profilePhotoPreview, setProfilePhotoPreview] = useState("/profile1.png");
    const [idPhotoPreview, setIdPhotoPreview] = useState(null);
    const [certificatePreview, setCertificatePreview] = useState(null);

    function handlePhotoChange(e) {
        const file = e.target.files[0];
        if (file) {
            setProfilePhoto(file);
            setProfilePhotoPreview(URL.createObjectURL(file));
        }
    }

    // Id change
    function handleIdPhotoChange(e) {
        const file = e.target.files[0];
        if (file) {
            setIdPhoto(file);
            setIdPhotoPreview({
                name: file.name,
                type: file.type,
                url: URL.createObjectURL(file),
                file,
            });
        }
    }

    // certificate change
    function handleCertificateChange(e) {
        const file = e.target.files[0];
        if (file) {
            setCertificatePDF(file);
            setCertificatePreview({
                name: file.name,
                type: file.type,
                url: URL.createObjectURL(file),
                file,
            });
        }
    }

    // delete profile photo
    function deleteProfilePhoto(){
        setProfilePhoto(null);
        setProfilePhotoPreview("/profile1.png");
        document.getElementById("profile-photo-input").value = "";
    }
    
    // delete preview
    function deleteIdPhoto() {
        setIdPhoto(null);
        setIdPhotoPreview(null);
        // Clear the input
        document.getElementById("id-photo-input").value = "";
    }


    function deleteCertificate() {
        setCertificatePDF(null);
        setCertificatePreview(null);
        document.getElementById("certificate-input").value = "";
    }


    async function handleSubmit(e){
        e.preventDefault(e);
        setErrorMsg("");

        try{
            const formData = new FormData();
            // formData.append("",);
            // formData.append("",);
            // formData.append("",);
            if(profilePhoto){
                formData.append("profilePhoto",profilePhoto);
            }
            if(idPhoto){
                formData.append("IDphot",idPhoto);
            }
            if(certificatePDF){
                formData.append("proofOfCertificate",proofOfCertificate);
            }

            const res = await apiInstance.put("/surveyor/identity-profile",{withCredentials:true,headers:{
                "Content-Type":"multipart/form-data"
            }});
            await queryClient.invalidateQueries({queryKey:["authSurveyor"]});
            const { ok, message, user} = res.data;

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

            
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
            <div className="bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
                <h3 className="font-bold">Identity Verification</h3>
                <div className="flex gap-4 items-center">
                    <Image src={profilePhotoPreview} alt="profile-pic" className="rounded-full object-cover" width={100} height={100}/>
                    {profilePhoto && (
                        <button
                            type="button"
                            onClick={deleteProfilePhoto}
                            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                        >
                            <FaTrash size={14} />
                        </button>
                    )}
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

                <form className="flex flex-col gap-4 mb-5" encType="multipart/form-data">
                    <div className="flex flex-col gap-3 mt-10">
                        <div className="flex items-center justify-between rounded-lg bg-gray-200 font-semibold px-3 py-2">
                            <h3>Add media/attachment documents</h3>
                            <button
                                className="toggle-btn"
                                // onClick={() => setShowDocuments(!showDocuments)}
                            >
                                <FaPlus size={20} className="inline"/>
                            </button>
                        </div>

                        <div className="flex items-center max-sm:flex max-sm:flex-col text-sm gap-2 py-2">
                            <span className="font-semibold">
                                1. Upload photos of the back and front of your state ID -
                            </span>
                            <span className="text-gray-600">
                                You can upload your Ghana card/Voters ID/Driver's License/Passport
                            </span>
                        </div>
                        <input type="file" name="file" id="file" onChange={handleIdPhotoChange} className="w-full border-dashed border-gray-200 border rounded-lg p-3 items-center gap-1 flex justify-center"/>
                        {/* Preview for ID Photo - right below the input */}
                        {idPhotoPreview && (
                            <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
                                <div className="flex items-center gap-3">
                                    {idPhotoPreview.type.startsWith("image/") ? (
                                        <Image
                                            src={idPhotoPreview.url}
                                            alt={idPhotoPreview.name}
                                            width={56}
                                            height={56}
                                            className="object-cover rounded-md"
                                        />
                                    ) : (
                                        <div className="w-14 h-14 bg-blue-200 flex items-center justify-center rounded-md font-bold text-blue-700">
                                            IMG
                                        </div>
                                    )}
                                    <div>
                                        <span className="font-semibold">ID Photo</span>
                                        <p className="text-sm text-gray-500">{idPhotoPreview.name}</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={deleteIdPhoto}
                                    className="text-red-600 font-bold px-3 py-1 rounded hover:bg-red-100 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        )}

                        <div className="flex items-center max-sm:flex max-sm:flex-col text-sm gap-2 py-2">
                            <span className="font-semibold">
                                2. Copy of Surveyors certificate -
                            </span>
                            <span className="text-gray-600">
                                As a certified Surveyor upload your Surveyors certificate
                            </span>
                        </div>
                        <input type="file" name="file" id="file" onChange={handleCertificateChange} className="w-full border-dashed border-gray-200 border rounded-lg p-3 items-center gap-1 flex justify-center"/>

                        {/* Preview for Certificate - right below the input */}
                        {certificatePreview && (
                            <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
                                <div className="flex items-center gap-3">
                                    {certificatePreview.type.startsWith("image/") ? (
                                        <Image
                                            src={certificatePreview.url}
                                            alt={certificatePreview.name}
                                            width={56}
                                            height={56}
                                            className="object-cover rounded-md"
                                        />
                                    ) : certificatePreview.type === "application/pdf" ? (
                                        <div className="w-14 h-14 bg-red-200 flex items-center justify-center rounded-md font-bold text-red-700">
                                            PDF
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14 bg-gray-300 flex items-center justify-center rounded-md">
                                            FILE
                                        </div>
                                    )}
                                    <div>
                                        <span className="font-semibold">Surveyor Certificate</span>
                                        <p className="text-sm text-gray-500">{certificatePreview.name}</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={deleteCertificate}
                                    className="text-red-600 font-bold px-3 py-1 rounded hover:bg-red-100 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        )}

                        <span className="text-sm text-gray-500">Up to 25mb file upload is allowed</span>

                        {/* <div className="flex flex-col gap-4">
                            
                        </div> */}
                    </div>

                    <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
                        <span className="text-sm">Click save and update to make your changes</span>
                        <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
                    </div>
                </form>
            
            </div>
        </div>
    )
}