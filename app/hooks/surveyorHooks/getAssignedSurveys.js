"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function GetAssignedSurveys(){
    return useQuery({
        queryKey: ['surveyorSurveys'],
        queryFn: async ()=>{
            const res = await apiInstance.get("/surveyor/assigned",{withCredentials:true});
            if(!res.data){
                throw new Error("No surveys found");
            }
            return res.data.surveys;
        }
    });
}