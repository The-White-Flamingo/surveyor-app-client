"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
 

export default function ProtectedRoute({children,roles}) {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(()=>{
        if(!loading && !user){
            router.replace("/login")
        }

        if(!loading && user && roles && !roles.includes(user.role)) {
            router.replace("/unauthorized");
        }
    },[user,loading,roles,router]);

    if(loading || !user) {
        return <p className="text-center mt-10">Checking authentication...</p>
    }
    return children;
}
