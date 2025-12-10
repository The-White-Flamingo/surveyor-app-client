"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function GetAssignedDisputes(){
    return useQuery({
        queryKey: ['surveyorDisputes'],
        queryFn: async ()=>{
            const res = await apiInstance.get(`/surveyor/disputes`,{withCredentials:true});
            if(!res.data){
                throw new Error("No surveys found");
            }
            return res.data.disputedSurveys;
        }
    });
}