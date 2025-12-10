"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function GetSurveyorProfile(){
    return useQuery({
        queryKey: ['authSurveyor'],
        queryFn: async ()=>{
            const res = await apiInstance.get(`/surveyor/profile`,{withCredentials:true});
            if(!res.data){
                throw new Error("No surveys found");
            }
            const surveyor = res.data.surveyor;
            const profileComplete = res.data.profileComplete
            return {surveyor,profileComplete};
        }
    });
}