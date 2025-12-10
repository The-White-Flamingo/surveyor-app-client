import {useQuery} from "@tanstack/react-query";
import apiInstance from "../../lib/axios";

export default function useAuth() {
    return useQuery({
        queryKey: ["authUser"],
        queryFn: async () => {
            const response = await apiInstance.get("/client/authenticate",{withCredentials:true});
            return response.data;
        },
        retry: false,
    });
}