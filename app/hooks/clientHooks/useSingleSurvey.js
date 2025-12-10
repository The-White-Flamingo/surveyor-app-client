"use client";
import { useQuery } from "@tanstack/react-query"
import apiInstance from "../../lib/axios";

export default function useSingleSurvey(id) {
  return useQuery({
    queryKey: ["survey",id],
    queryFn: async ()=>{
        const res = await apiInstance.get(`/client/${id}/survey`,{withCredentials:true});
        return res.data.survey;
    },
    enabled: !!id
  })
}
