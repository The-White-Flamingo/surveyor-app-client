"use client";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import apiInstance from '../../lib/axios';
import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";
import Image from "next/image";
import { FaTrashCan, FaPen, FaPlus } from "react-icons/fa6";

export default function ProfileForm() {
  const queryClient = useQueryClient();
  const { data: surveyor, isLoading } = SurveyorAuth();

  const [form, setForm] = useState({
    firstName: "", lastName: "", tagline: "", country: "", about: "",
    surveyorType: "", yearsOfExperience: 0, projectDetails: ""
  });

  const [ok, setOk] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState("/profile1.png");

  // Dynamic arrays
  const [languages, setLanguages] = useState([""]);
  const [fileFormats, setFileFormats] = useState([""]);
  const [softwares, setSoftwares] = useState([""]);
  const [certifications, setCertifications] = useState([""]);
  const [education, setEducation] = useState([{
    title: "", institutionName: "", dateFrom: "", dateTo: "", description: ""
  }]);

  // Load data when surveyor is available
  useEffect(() => {
    if (surveyor?.surveyor) {
      const s = surveyor.surveyor;
      setForm({
        firstName: s.firstName || "",
        lastName: s.lastName || "",
        tagline: s.tagline || "",
        country: s.country || "",
        about: s.about || "",
        surveyorType: s.surveyorType || "",
        yearsOfExperience: s.yearsOfExperience || 0,
        projectDetails: s.projectDetails || "",
      });

      setProfilePhotoPreview(s.profilePhoto || "/profile1.png");

      setLanguages(s.languages || [""]);
      setFileFormats(s.fileFormat || [""]);
      setSoftwares(s.softwares || [""]);
      setCertifications(s.professionalCertifications || [""]);
      setEducation(s.education || [{ title: "", institutionName: "", dateFrom: "", dateTo: "", description: "" }]);
    }
  }, [surveyor]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setProfilePhotoPreview(URL.createObjectURL(file));
    }
  };

  // Generic handlers for simple string arrays
  const addItem = (setter, array) => setter([...array, ""]);
  const removeItem = (setter, array, index) => setter(array.filter((_, i) => i !== index));
  const updateItem = (setter, array, index, value) => {
    const updated = [...array];
    updated[index] = value;
    setter(updated);
  };

  // Education handlers
  const addEducation = () => setEducation([...education, { title: "", institutionName: "", dateFrom: "", dateTo: "", description: "" }]);
  const removeEducation = (index) => setEducation(education.filter((_, i) => i !== index));
  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setOk(false);

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => formData.append(key, form[key]));

      // Append cleaned arrays (remove empty strings)
      formData.append("languages", JSON.stringify(languages.filter(Boolean)));
      formData.append("fileFormat", JSON.stringify(fileFormats.filter(Boolean)));
      formData.append("softwares", JSON.stringify(softwares.filter(Boolean)));
      formData.append("professionalCertifications", JSON.stringify(certifications.filter(Boolean)));
      formData.append("education", JSON.stringify(education));

      if (profilePhoto) formData.append("profilePhoto", profilePhoto);

      const res = await apiInstance.put("/surveyor/complete-profile", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      });

      await queryClient.invalidateQueries({ queryKey: ["authSurveyor"] });
      setOk(true);
      setErrorMsg("Profile updated successfully!");
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Update failed.");
    }
  };

  if (isLoading) return <div className="p-4">Loading profile...</div>;

  return (
    <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
      {/* Profile Photo & Basic Info */}
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Profile Settings</h3>

        <div className="flex gap-6 items-center mb-6">
          <Image src={profilePhotoPreview} alt="Profile" width={120} height={120} className="rounded-full object-cover" />
          <div>
            <p className="font-semibold">Upload Profile Photo</p>
            <p className="text-sm text-gray-500">JPG, PNG, GIF • Max 5MB</p>
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="mt-2 file:px-4 file:py-2 file:bg-orange-600 file:text-white file:rounded-lg" />
          </div>
        </div>

        {ok && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">✓ {errorMsg}</div>}
        {errorMsg && !ok && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">✗ {errorMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <input placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} className="border rounded-lg px-4 py-2" />
            <input placeholder="Last Name" name="lastName" value={form.lastName} onChange={handleChange} className="border rounded-lg px-4 py-2" />
          </div>

          <input placeholder="Country" name="country" value={form.country} onChange={handleChange} className="w-full border rounded-lg px-4 py-2" />
          <textarea placeholder="About me" name="about" value={form.about} onChange={handleChange} rows={4} className="w-full border rounded-lg px-4 py-2" />

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <input placeholder="Type of Surveyor" name="surveyorType" value={form.surveyorType} onChange={handleChange} className="border rounded-lg px-4 py-2" />
            <input type="number" placeholder="Years of Experience" name="yearsOfExperience" value={form.yearsOfExperience} onChange={handleChange} min="0" className="border rounded-lg px-4 py-2" />
          </div>

          {/* Dynamic Lists */}
          {[
            { title: "Languages", items: languages, setItems: setLanguages },
            { title: "File Formats", items: fileFormats, setItems: setFileFormats },
            { title: "Softwares", items: softwares, setItems: setSoftwares },
            { title: "Professional Certifications", items: certifications, setItems: setCertifications },
          ].map(({ title, items, setItems }) => (
            <div key={title}>
              <h4 className="font-semibold mb-2">{title}</h4>
              {items.map((item, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    value={item}
                    onChange={(e) => updateItem(setItems, items, i, e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2"
                    placeholder={`Add ${title.toLowerCase().slice(0, -1)}`}
                  />
                  {items.length > 1 && (
                    <button type="button" onClick={() => removeItem(setItems, items, i)} className="text-red-600">
                      <FaTrashCan />
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => addItem(setItems, items)} className="text-blue-600 text-sm flex items-center gap-1">
                <FaPlus /> Add another
              </button>
            </div>
          ))}

          {/* Education */}
          <div>
            <h4 className="font-semibold mb-2">Education</h4>
            {education.map((edu, i) => (
              <div key={i} className="border rounded-lg p-4 mb-4 relative">
                {education.length > 1 && (
                  <button type="button" onClick={() => removeEducation(i)} className="absolute top-2 right-2 text-red-600">
                    <FaTrashCan />
                  </button>
                )}
                <input placeholder="Degree/Title" value={edu.title} onChange={(e) => updateEducation(i, "title", e.target.value)} className="w-full border rounded px-3 py-2 mb-2" />
                <input placeholder="Institution" value={edu.institutionName} onChange={(e) => updateEducation(i, "institutionName", e.target.value)} className="w-full border rounded px-3 py-2 mb-2" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="From" value={edu.dateFrom} onChange={(e) => updateEducation(i, "dateFrom", e.target.value)} className="border rounded px-3 py-2" />
                  <input type="text" placeholder="To" value={edu.dateTo} onChange={(e) => updateEducation(i, "dateTo", e.target.value)} className="border rounded px-3 py-2" />
                </div>
                <textarea placeholder="Description" value={edu.description} onChange={(e) => updateEducation(i, "description", e.target.value)} rows={2} className="w-full border rounded px-3 py-2 mt-2" />
              </div>
            ))}
            <button type="button" onClick={addEducation} className="text-blue-600 text-sm flex items-center gap-1">
              <FaPlus /> Add Education
            </button>
          </div>

          <div className="pt-4 border-t">
            <button type="submit" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
              Save & Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// "use client";
// import { useState, useEffect } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import apiInstance from '../../lib/axios';
// import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";
// import Image from "next/image";
// import { FaTrashCan, FaPen } from "react-icons/fa6";

// export default function ProfileForm() {
//   const queryClient = useQueryClient();
//   const { data: surveyor, isLoading: loading } = SurveyorAuth();

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     tagline: "",
//     country: "",
//     about: "",
//     surveyorType: "",
//     yearsOfExperience: 0,
//     projectDetails: "",
//   });

//   const [ok, setOk] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [profilePhotoPreview, setProfilePhotoPreview] = useState("/profile1.png");

//   const [languages, setLanguages] = useState([{ language: "" }]);
//   const [fileFormat, setFileFormat] = useState([{ fileType: "" }]);
//   const [softwares, setSoftwares] = useState([{ name: "" }]);
//   const [professionalCertifications, setProfessionalCertifications] = useState([{ certificateName: "" }]);
//   const [education, setEducation] = useState([{
//     title: "",
//     institutionName: "",
//     dateFrom: "",
//     dateTo: "",
//     description: ""
//   }]);

//   // Populate form when surveyor data is loaded
//   useEffect(() => {
//     if (surveyor?.surveyor) {
//       const s = surveyor.surveyor;
//       setForm({
//         firstName: s.firstName || "",
//         lastName: s.lastName || "",
//         tagline: s.tagline || "",
//         country: s.country || "",
//         about: s.about || "",
//         surveyorType: s.surveyorType || "",
//         yearsOfExperience: s.yearsOfExperience || 0,
//         projectDetails: s.projectDetails || "",
//       });

//       setProfilePhotoPreview(s.profilePhoto ? `http://your-api-url/${s.profilePhoto}` : "/profile1.png"); // Adjust URL as needed

//       setLanguages(s.languages?.length ? s.languages.map(lang => ({ language: lang })) : [{ language: "" }]);
//       setFileFormat(s.fileFormat?.length ? s.fileFormat.map(f => ({ fileType: f })) : [{ fileType: "" }]);
//       setSoftwares(s.softwares?.length ? s.softwares.map(sw => ({ name: sw })) : [{ name: "" }]);
//       setProfessionalCertifications(s.professionalCertifications?.length ? s.professionalCertifications : [{ certificateName: "" }]);
//       setEducation(s.education?.length ? s.education : [{
//         title: "", institutionName: "", dateFrom: "", dateTo: "", description: ""
//       }]);
//     }
//   }, [surveyor]);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handlePhotoChange(e) {
//     const file = e.target.files[0];
//     if (file) {
//       setProfilePhoto(file);
//       setProfilePhotoPreview(URL.createObjectURL(file));
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setErrorMsg("");
//     setOk(false);

//     try {
//       const formData = new FormData();
//       formData.append("firstName", form.firstName);
//       formData.append("lastName", form.lastName);
//       formData.append("tagline", form.tagline);
//       formData.append("country", form.country);
//       formData.append("about", form.about);
//       formData.append("surveyorType", form.surveyorType);
//       formData.append("yearsOfExperience", form.yearsOfExperience);
//       formData.append("projectDetails", form.projectDetails);

//       // Append arrays as JSON strings (common pattern)
//       formData.append("languages", JSON.stringify(languages.map(l => l.language).filter(Boolean)));
//       formData.append("fileFormat", JSON.stringify(fileFormat.map(f => f.fileType).filter(Boolean)));
//       formData.append("softwares", JSON.stringify(softwares.map(s => s.name).filter(Boolean)));
//       formData.append("professionalCertifications", JSON.stringify(professionalCertifications.map(c => c.certificateName).filter(Boolean)));
//       formData.append("education", JSON.stringify(education));

//       if (profilePhoto) {
//         formData.append("profilePhoto", profilePhoto);
//       }

//       const res = await apiInstance.put("/surveyor/complete-profile", formData, {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       await queryClient.invalidateQueries({ queryKey: ["authSurveyor"] });
//       const { ok, message } = res.data;

//       if (!ok) {
//         setErrorMsg(message || "Could not update profile.");
//         return;
//       }

//       setOk(true);
//       setErrorMsg("Profile updated successfully!");

//     } catch (error) {
//       console.error(error);
//       setErrorMsg(error.response?.data?.message || "An error occurred.");
//     }
//   }

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="max-w-3xl flex flex-col gap-4 mt-5 flex-1">
//       <div className="bg-white rounded-lg px-3 py-1">
//         <h3 className="font-bold">Profile Settings</h3>

//         <div className="flex gap-4 items-center my-4">
//           <Image
//             src={profilePhotoPreview}
//             alt="profile-pic"
//             width={100}
//             height={100}
//             className="rounded-full object-cover"
//           />
//           <div>
//             <p className="font-bold">Upload profile photo</p>
//             <p className="text-sm text-gray-500">JPG, PNG, GIF &lt; 5MB</p>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoChange}
//               className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-orange-600 file:text-white"
//             />
//           </div>
//         </div>

//         {ok && <div className="text-green-500 bg-green-100 p-2 rounded font-bold my-2">{errorMsg}</div>}
//         {errorMsg && !ok && <div className="text-red-500 bg-red-100 p-2 rounded font-bold my-2">{errorMsg}</div>}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-5">
//           {/* Name fields */}
//           <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
//             <div>
//               <label className="font-bold">First name:</label>
//               <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="border rounded-md px-3 py-1 w-full" />
//             </div>
//             <div>
//               <label className="font-bold">Last name:</label>
//               <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="border rounded-md px-3 py-1 w-full" />
//             </div>
//           </div>

//           <div>
//             <label className="font-bold">Country:</label>
//             <input type="text" name="country" value={form.country} onChange={handleChange} className="border rounded-md px-3 py-1 w-full" />
//           </div>

//           <div>
//             <label className="font-bold">About:</label>
//             <textarea name="about" value={form.about} onChange={handleChange} rows={4} className="border rounded-md px-3 py-1 w-full" />
//           </div>

//           <div>
//             <label className="font-bold">Type of Surveyor:</label>
//             <input type="text" name="surveyorType" value={form.surveyorType} onChange={handleChange} className="border rounded-md px-3 py-1 w-full" />
//           </div>

//           <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
//             <div>
//               <label className="font-bold">Languages I speak:</label>
//               <input type="text" value={languages[0]?.language || ""} onChange={(e) => setLanguages([{ language: e.target.value }])} className="border rounded-md px-3 py-1 w-full" />
//               {/* Add more language inputs if needed */}
//             </div>
//             <div>
//               <label className="font-bold">Years of Experience:</label>
//               <input type="number" name="yearsOfExperience" value={form.yearsOfExperience} onChange={handleChange} min="0" className="border rounded-md px-3 py-1 w-full" />
//             </div>
//           </div>

//           <div className="border-t-2 border-gray-300 pt-4 flex justify-end">
//             <button type="submit" className="px-6 py-2 bg-orange-600 text-white rounded-lg">Save & Update</button>
//           </div>
//         </form>
//       </div>

//       {/* Education Section */}
//       <div className="bg-white rounded-lg p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-bold">Education details</h3>
//           <button type="button" className="text-blue-600">Add New</button>
//         </div>
//         {education.length > 0 ? education.map((edu, i) => (
//           <div key={i} className="border-b pb-2 mb-2">
//             <p className="font-semibold">{edu.title}</p>
//             <p className="text-sm text-gray-600">{edu.institutionName} • {edu.dateFrom} - {edu.dateTo}</p>
//             <div className="flex gap-4 mt-2">
//               <button className="text-red-600"><FaTrashCan /></button>
//               <button className="text-blue-600"><FaPen /></button>
//             </div>
//           </div>
//         )) : <p>No education details added.</p>}
//       </div>

//       {/* Professional Certifications */}
//       <div className="bg-white rounded-lg p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-bold">Professional Certification & Accreditation</h3>
//           <button type="button" className="text-blue-600">Add New</button>
//         </div>
//         {professionalCertifications.length > 0 ? professionalCertifications.map((cert, i) => (
//           <div key={i} className="flex justify-between items-center border-b pb-2 mb-2">
//             <p>{cert.certificateName}</p>
//             <div className="flex gap-4">
//               <button className="text-red-600"><FaTrashCan /></button>
//               <button className="text-blue-600"><FaPen /></button>
//             </div>
//           </div>
//         )) : <p>No certifications added.</p>}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import apiInstance from '../../lib/axios';
// import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";
// import Image from "next/image";
// import { FaTrashCan, FaPen } from "react-icons/fa6";
// import EducationForm from "./EducationForm";
// import ProfessionForm from "./ProfessionForm";

// export default function ProfileForm() {
//     const queryClient = useQueryClient();
//     const { data: surveyor, isLoading: loading } = SurveyorAuth();
    
//     const [form,setForm] = useState({
//         firstName: surveyor.surveyor?.firstName || "",
//         lastName: surveyor.surveyor?.lastName || "",
//         tagline: surveyor.surveyor?.tagline || "",
//         country: surveyor.surveyor?.country || "",
//         about: surveyor.surveyor?.about || "",
//         surveyorType: surveyor.surveyor?.surveyorType || "",
//         yearsOfExperience: surveyor.surveyor?.yearsOfExperience || 0,
//         projectDetails: surveyor.surveyor?.projectDetails || "",
//     })

//     const [ok,setOk]= useState(false);
//     const [errorMsg, setErrorMsg] = useState("");
//     const [profilePhoto,setProfilePhoto] = useState(surveyor.surveyor?.profilePhoto || null);
//     const [languages,setLanguages] = useState([{
//       language: ""
//     }])
//     const [fileFormat,setFileFormat] = useState([
//       {
//         fileType: ""
//       }
//     ])
//     const [softwares,setSoftwares] = useState([
//       {
//         name: ""
//       }
//     ])
//     const [professionalCertifications,setProfessionalCertifications] = useState([{
//       certificateName: surveyor.surveyor?.certificateName || ""
//     }])
//     const [education,setEducation] = useState([
//       {
//       title: surveyor.surveyor?.title,
//       institutionName: surveyor.surveyor?.institutionName,
//       dateFrom: surveyor.surveyor?.dateFrom,
//       dateTo: surveyor.surveyor?.dateTo,
//       description: surveyor.surveyor?.description
//     }
//   ])

//     useEffect(()=>{

//     },[education,professionalCertifications])
    
//     function handleChange(e) {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     }

//     function handleLanguageChange(e){
//       setLanguages({
//         ...languages,
//         [e.target.name]:e.target.value
//       })
//     }

//     function handlePhotoChange(e) {
//         console.log("Selected photo: ", e.target.files[0]);
//         setProfilePhoto(e.target.files[0]);
//     }

//     function handleProfessianlCertChange(e) {
//         setProfessionalCertifications({
//             ...professionalCertifications,
//             [e.target.name]: e.target.value
//         });
//     }

//     function handleEducationChange(e) {
//         setEducation({
//             ...education,
//             [e.target.name]: e.target.value
//         });
//     }

//     async function handleSubmit(e) {
//       e.preventDefault();
//       setErrorMsg("");

//       try{
//         const formData = new FormData();
//         formData.append("firstName",form.firstName);
//         formData.append("lastName",form.lastName);
//         formData.append("tagline",form.tagline);
//         formData.append("country",form.country);
//         formData.append("about",form.about);
//         formData.append("surveyorType",form.surveyorType);
//         formData.append("languages",languages);
//         formData.append("yearsOfExperience",form.yearsOfExperience);
//         formData.append("projectDetails",form.projectDetails);
//         formData.append("fileFormat",fileFormat);
//         formData.append("softwares",softwares);
//         formData.append("professionalCertifications",professionalCertifications);
//         formData.append("education",education);
//         if(profilePhoto){
//           formData.append("profilePhoto",profilePhoto);
//         }

//         const res = await apiInstance.put("/surveyor/complete-profile",formData,{withCredentials:true, headers: {"Content-Type":"multipart/form-data"}});
//         await queryClient.invalidateQueries({queryKey:["authSurveyor"]});
//         const { ok, message, user} = res.data;

//         console.log("Profile update: ", ok, message, user);
//         if(!ok) {
//           setErrorMsg(message || "Could not update profile. Try again.");
//           return;
//         }

//         if(!user) {
//             setErrorMsg("User not found. Please login again.");
//             return;
//         }

//         setOk(true);
//         setErrorMsg("Profile updated successfully.");

//       }catch(error){
//         console.log(error);
//       }
//     }

//   return (
//   <div className="max-w-3xl flex flex-col gap-4 max-sm:flex max-sm:flex-col mt-5 flex-1">
//     <div className="bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
//       <h3 className="font-bold">Profile Settings</h3>
//       <div className="flex gap-4 items-center">
//         <Image src={profilePhoto ? profilePhoto : "/profile1.png"} alt="profile-pic" className="" width={100} height={100}/>
//         <div className="flex flex-col">
//             <p className="font-bold">Upload profile photo</p>
//             <p className="text-sm text-gray-500">Profile image should be jpg,gif,png and size should not be more than 5mb</p>
//             <input type="file" accept="image/*" name="files" className="text-white max-sm:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2" onChange={handlePhotoChange} />
//         </div>
//       </div>
//       <input type="file" accept="image/*" name="files" className="text-white lg:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2" onChange={handlePhotoChange} />
//       {ok ? (
//         <div className="text-green-500 rounded-md p-2 bg-green-100 font-bold my-2">{errorMsg}</div>
//       ) : (
//         <>
//           {errorMsg && (
//               <div className="text-red-500 rounded-md p-2 bg-red-100 font-bold my-2">{errorMsg}</div>
//           )}
//         </>
//       )}

//       <form className="flex flex-col gap-4 mb-5" encType="multipart/form-data" 
//         // onSubmit={handleSubmit}
//         >
//         <div className="my-4 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
//           <div className="flex flex-col gap-2 w-full">
//               <label htmlFor="firstName" className="font-bold">First name:</label>
//               <input type="text" name="firstName" onChange={handleChange} value={form.firstName} className="border rounded-md px-3 border-gray-300"/>
//           </div>
//           <div className="flex flex-col gap-2 w-full">
//               <label htmlFor="lastName" className="font-bold">Last name:</label>
//               <input type="text" name="lastName" onChange={handleChange} value={form.lastName} className="border rounded-md px-3 border-gray-300"/>
//           </div>
//         </div>

//         <div className="flex flex-col w-full gap-2">
//           <label htmlFor="first-name" className="font-bold">Country:</label>
//           <input type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300"/>
//         </div>

//         <div className="flex flex-col w-full gap-2">
//           <label htmlFor="about" className="font-bold">About:</label>
//           <textarea type="text" name="about" onChange={handleChange} value={form.about} className="border rounded-md px-3 border-gray-300">

//           </textarea>
//         </div>


//         <div className="flex flex-col w-full gap-2">
//           <label htmlFor="typeOfSurveyor" className="font-bold">Type of Surveyor:</label>
//           <input type="text" name="surveyorType" onChange={handleChange} value={form.surveyorType} className="border rounded-md px-3 border-gray-300"/>
//         </div>

//         <div className="flex flex-col w-full gap-2">
//           <label htmlFor="country" className="font-bold">Country:</label>
//           <input type="text" name="country" onChange={handleChange} value={form.country} className="border rounded-md px-3 border-gray-300"/>
//         </div>


//         <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
//           <div className="flex flex-col w-full gap-2">
//               <label htmlFor="languages" className="font-bold">Languages I can speak:</label>
//               <input type="text" name="languages" onChange={handleLanguageChange} value={languages.language} className="border rounded-md px-3 border-gray-300"/>
//           </div>
//           <div className="flex flex-col w-full gap-2">
//               <label htmlFor="yearsOfExperience" className="font-bold">Years of Experience:</label>
//               <input type="number" name="yearsOfExperience" min={0} max={10} onChange={handleChange} value={form.yearsOfExperience} className="border rounded-md px-3 border-gray-300"/>
//           </div>
//         </div>

//         <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
//           <span className="text-sm">Click save and update to make your changes</span>
//           <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
//         </div>
//       </form>
//     </div>

//     <div className="bg-white rounded-lg p-2">
//       <div className="flex items-center justify-between">
//         <h3 className="font-bold">Education details</h3>
//         <button className="text-blue px-3 py-1">Add New</button>
//       </div>

//       {education ? education.map((edu)=>{
//         <>
//           <span className="text-sm">{edu.institutionName} - {edu.dateFrom} - {edu.dateTo}</span>
//           <div className="flex items-center justify-between">
//             <p>{edu.title}</p>
//             <div className="flex items-center gap-2">
//               <button className="text-red-600"><FaTrashCan size={17} className="inline"/></button>
//               <button className="text-blue-600"><FaPen size={17} className="inline"/></button>
//             </div>
//           </div>
//         </>
//       }):(
//         <>
//           <p>No details</p>
//         </>
//       )}
//     </div>

//     <div className="bg-white rounded-lg p-2">
//       <div className="flex items-center justify-between">
//         <h3 className="font-bold">Professional Certification &amp; Accreditation</h3>
//         <button className="text-blue px-3 py-1">Add New</button>
//       </div>

//       {professionalCertifications ? professionalCertifications.map((profCert)=>{
//         <>
//           {/* <span className="text-sm">{profCert.institutionName} - {profCert.dateFrom} - {profCert.dateTo}</span> */}
//           <div className="flex items-center justify-between">
//             <p>{profCert.certificateName}</p>
//             <div className="flex items-center gap-2">
//               <button className="text-red-600"><FaTrashCan size={17} className="inline"/></button>
//               <button className="text-blue-600"><FaPen size={17} className="inline"/></button>
//             </div>
//           </div>
//         </>
//       }):(
//         <>
//           <p>No details</p>
//         </>
//       )}
//     </div>
    
//   </div>
//   )
// }
