"use client";
import {useQuery} from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function SurveyorAuth() {
    return useQuery({
        queryKey: ["authSurveyor"],
        queryFn: async () => {
            const response = await apiInstance.get("/surveyor/authenticate",{withCredentials:true});
            if(!response.data){
                throw new Error("No surveyor found");
            }
            const surveyor = response.data.surveyor;
            const profileComplete = response.data.profileComplete
            return {surveyor,profileComplete};
        },
        retry: false,
    });
}