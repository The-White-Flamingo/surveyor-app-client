export const metadata = {
    title: "Surveyor App - Client Dashboard",
    description: "Client dashboard for Surveyor App",
};  

export default function DashboardPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <p>Welcome to your dashboard! Here you can manage your surveys, view payments, and more.</p>
        </div>
    );
}