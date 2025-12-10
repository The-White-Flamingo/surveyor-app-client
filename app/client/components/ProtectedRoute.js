"use client";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/clientHooks/useAuth";

export default function ProtectedRoute({children,allowedRoles = []}) {
    const router = useRouter();
    const { data: user, isLoading: loading } = useAuth();
    console.log("ProtectedRoute - Authenticated user: ", user);
    if(loading) {
        return <p className="text-center mt-10">Checking authentication...</p>
    }

    if(loading === false && !user) {
        router.push("/login");
        return null;
    }

    if(loading === false && user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        router.push("/unauthorized");
        return null;
    }
    
    return children;
}
