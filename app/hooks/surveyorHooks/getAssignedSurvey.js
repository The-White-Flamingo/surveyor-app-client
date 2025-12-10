"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function GetAssignedSurvey(){
    return useQuery({
        queryKey: ['survey',id],
        queryFn: async ()=>{
            const res = await apiInstance.get(`/surveyor/${id}/assigned`,{withCredentials:true});
            if(!res.data){
                throw new Error("No surveys found");
            }
            return res.data.survey;
        }
    });
}