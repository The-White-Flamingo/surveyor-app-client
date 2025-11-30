"use client"
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch("https://an-site-solutions-backend.onrender.com/api/signout", {
      method: "POST",
      credentials: "include",
    });

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
