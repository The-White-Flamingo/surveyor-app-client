"use client"
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import apiInstance from "../../lib/axios";
import { useQueryClient } from "@tanstack/react-query";

export default function LogoutButton() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    await apiInstance.post("/signout");
    queryClient.removeQueries({ queryKey: ["authUser"] });

    router.replace("/login");
  };

  return (
    <button 
      onClick={logout}
      className="flex items-center gap-4 rounded-3xl text-sm px-4 py-3 cursor-pointer font-medium hover:bg-gray-100"
    >
      <FiLogOut size={18}/>
      Logout
    </button>
  );
}
