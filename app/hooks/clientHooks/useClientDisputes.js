"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function useClientDisputes() {
    return useQuery({
        queryKey: ['clientDisputes'],
        queryFn: async () => {
            const res = await apiInstance.get("/client/disputes",{withCredentials:true});
            if(!res.data){
                throw new Error("No disputes found");
            }
            return res.data.disputes || [];
        }
    });
}