"use client";
import PendingRequest from "../components/PendingRequest";
import OngoingProjects from "../components/OngoingProjects";
import Completed from "../components/Completed";
import Cancelled from "../components/Cancelled";
import EarningHistory from "../components/EarningHistory";
import PaymentMethod from "../components/PaymentMethod";

// export const metadata = {
//     title: "Surveyor App - Client Dashboard",
//     description: "Client dashboard for Surveyor App",
// };  

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 justify-between max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
                <PendingRequest />
                <OngoingProjects />
                <Completed />
                <Cancelled />
            </div>

            <div className="flex items-center gap-3 max-sm:flex max-sm:flex-col">
                <EarningHistory />
                <PaymentMethod />
            </div>
            
        </div>
    );
}