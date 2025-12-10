"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function useClientSurveys() {
    return useQuery({
        queryKey: ['clientSurveys'],
        queryFn: async () => {
            const res = await apiInstance.get("/client/surveys",{withCredentials:true});
            if(!res.data){
                throw new Error("No surveys found");
            }
            return res.data.surveys;
        }
    });
}