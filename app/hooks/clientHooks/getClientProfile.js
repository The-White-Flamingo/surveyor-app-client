"use client";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function GetClientProfile() {
    return useQuery({
        queryKey: ["authUser"],
        queryFn: async () => {
            const res = await apiInstance.get("/client/profile", { withCredentials: true });
            if(!res.data){
                throw new Error("Could not fetch user profile");
            }
            return res.data.user || [];
        }
    });
}