"use client";
import { useRouter } from "next/navigation";
import SurveyorAuth from "../../hooks/surveyorHooks/surveyorAuth";

export default function ProtectedRoute({children,allowedRoles = []}) {
    const router = useRouter();
    const { data: surveyor, isLoading: loading } = SurveyorAuth();
    console.log("Authenticated surveyor in protected route: ",surveyor)
    if(loading) {
        return <p className="text-center mt-10">Checking authentication...</p>
    }

    if(loading === false && !surveyor) {
        router.push("/surveyor-login");
        return null;
    }

    if(loading && surveyor.profileComplete === false){
        router.push("/surveyor/account")
    }

    if(loading === false && surveyor && allowedRoles.length > 0 && !allowedRoles.includes(surveyor.surveyor.role)) {
        router.push("/unauthorized");
        return null;
    }
    
    return children;
}
