"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function useSingleDispute(id) {
  return useQuery({
    queryKey: ["dispute",id],
    queryFn: async ()=>{
        const res = await apiInstance.get(`/client/${id}/dispute`,{withCredentials:true});
        return res.data.dispute;
    },
    enabled: !!id
  });
}
