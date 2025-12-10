"use client";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import apiInstance from '../../lib/axios';
import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";
import Image from "next/image";
import { FaTrashCan, FaPen } from "react-icons/fa6";
import EducationForm from "./EducationForm";
import ProfessionForm from "./ProfessionForm";

export default function ProfileForm() {
    const queryClient = useQueryClient();
    const { data: surveyor, isLoading: loading } = SurveyorAuth();
    
    const [form,setForm] = useState({
        firstName: surveyor.surveyor?.firstName || "",
        lastName: surveyor.surveyor?.lastName || "",
        tagline: surveyor.surveyor?.tagline || "",
        country: surveyor.surveyor?.country || "",
        about: surveyor.surveyor?.about || "",
        surveyorType: surveyor.surveyor?.surveyorType || "",
        yearsOfExperience: surveyor.surveyor?.yearsOfExperience || 0,
        projectDetails: surveyor.surveyor?.projectDetails || "",
    })

    const [ok,setOk]= useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [profilePhoto,setProfilePhoto] = useState(surveyor.surveyor?.profilePhoto || null);
    const [languages,setLanguages] = useState([{
      language: ""
    }])
    const [fileFormat,setFileFormat] = useState([
      {
        fileType: ""
      }
    ])
    const [softwares,setSoftwares] = useState([
      {
        name: ""
      }
    ])
    const [professionalCertifications,setProfessionalCertifications] = useState([{
      certificateName: surveyor.surveyor?.certificateName || ""
    }])
    const [education,setEducation] = useState([
      {
      title: surveyor.surveyor?.title,
      institutionName: surveyor.surveyor?.institutionName,
      dateFrom: surveyor.surveyor?.dateFrom,
      dateTo: surveyor.surveyor?.dateTo,
      description: surveyor.surveyor?.description
    }
  ])

    useEffect(()=>{

    },[education,professionalCertifications])
    
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function handleLanguageChange(e){
      setLanguages({
        ...languages,
        [e.target.name]:e.target.value
      })
    }

    function handlePhotoChange(e) {
        console.log("Selected photo: ", e.target.files[0]);
        setProfilePhoto(e.target.files[0]);
    }

    function handleProfessianlCertChange(e) {
        setProfessionalCertifications({
            ...professionalCertifications,
            [e.target.name]: e.target.value
        });
    }

    function handleEducationChange(e) {
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
      e.preventDefault();
      setErrorMsg("");

      try{
        const formData = new FormData();
        formData.append("firstName",form.firstName);
        formData.append("lastName",form.lastName);
        formData.append("tagline",form.tagline);
        formData.append("country",form.country);
        formData.append("about",form.about);
        formData.append("surveyorType",form.surveyorType);
        formData.append("languages",languages);
        formData.append("yearsOfExperience",form.yearsOfExperience);
        formData.append("projectDetails",form.projectDetails);
        formData.append("fileFormat",fileFormat);
        formData.append("softwares",softwares);
        formData.append("professionalCertifications",professionalCertifications);
        formData.append("education",education);
        if(profilePhoto){
          formData.append("profilePhoto",profilePhoto);
        }

        const res = await apiInstance.put("/surveyor/complete-profile",formData,{withCredentials:true, headers: {"Content-Type":"multipart/form-data"}});
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

  return (
  <div className="max-w-3xl flex flex-col gap-4 max-sm:flex max-sm:flex-col mt-5 flex-1">
    <div className="bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
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

      <form className="flex flex-col gap-4 mb-5" encType="multipart/form-data" 
        // onSubmit={handleSubmit}
        >
        <div className="my-4 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
          <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName" className="font-bold">First name:</label>
              <input type="text" name="firstName" onChange={handleChange} value={form.firstName} className="border rounded-md px-3 border-gray-300"/>
          </div>
          <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName" className="font-bold">Last name:</label>
              <input type="text" name="lastName" onChange={handleChange} value={form.lastName} className="border rounded-md px-3 border-gray-300"/>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="first-name" className="font-bold">Country:</label>
          <input type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300"/>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="about" className="font-bold">About:</label>
          <textarea type="text" name="about" onChange={handleChange} value={form.about} className="border rounded-md px-3 border-gray-300">

          </textarea>
        </div>


        <div className="flex flex-col w-full gap-2">
          <label htmlFor="typeOfSurveyor" className="font-bold">Type of Surveyor:</label>
          <input type="text" name="surveyorType" onChange={handleChange} value={form.surveyorType} className="border rounded-md px-3 border-gray-300"/>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="country" className="font-bold">Country:</label>
          <input type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300"/>
        </div>


        <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
          <div className="flex flex-col w-full gap-2">
              <label htmlFor="languages" className="font-bold">Languages I can speak:</label>
              <input type="text" name="languages" onChange={handleLanguageChange} value={languages.language} className="border rounded-md px-3 border-gray-300"/>
          </div>
          <div className="flex flex-col w-full gap-2">
              <label htmlFor="yearsOfExperience" className="font-bold">Years of Experience:</label>
              <input type="number" name="yearsOfExperience" min={0} max={10} onChange={handleChange} value={form.yearsOfExperience} className="border rounded-md px-3 border-gray-300"/>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
          <span className="text-sm">Click save and update to make your changes</span>
          <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
        </div>
      </form>
    </div>

    <div className="bg-white rounded-lg p-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Education details</h3>
        <button className="text-blue px-3 py-1">Add New</button>
      </div>

      {education ? education.map((edu)=>{
        <>
          <span className="text-sm">{edu.institutionName} - {edu.dateFrom} - {edu.dateTo}</span>
          <div className="flex items-center justify-between">
            <p>{edu.title}</p>
            <div className="flex items-center gap-2">
              <button className="text-red-600"><FaTrashCan size={17} className="inline"/></button>
              <button className="text-blue-600"><FaPen size={17} className="inline"/></button>
            </div>
          </div>
        </>
      }):(
        <>
          <p>No details</p>
        </>
      )}
    </div>

    <div className="bg-white rounded-lg p-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Professional Certification &amp; Accreditation</h3>
        <button className="text-blue px-3 py-1">Add New</button>
      </div>

      {professionalCertifications ? professionalCertifications.map((profCert)=>{
        <>
          {/* <span className="text-sm">{profCert.institutionName} - {profCert.dateFrom} - {profCert.dateTo}</span> */}
          <div className="flex items-center justify-between">
            <p>{profCert.certificateName}</p>
            <div className="flex items-center gap-2">
              <button className="text-red-600"><FaTrashCan size={17} className="inline"/></button>
              <button className="text-blue-600"><FaPen size={17} className="inline"/></button>
            </div>
          </div>
        </>
      }):(
        <>
          <p>No details</p>
        </>
      )}
    </div>
    
  </div>
  )
}
