import Footer from "../components/Footer";
import AboutService from "../components/AboutService";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import AboutHero from "../components/AboutHero";
import AboutUs from "../components/AboutUs";

export default function About(){
    return(
        <div className="bg-gray-100 flex flex-col overflow-y-auto h-screen max-h-screen items-center">
            <Navbar />
            {<AboutHero />}
            <AboutUs />
            <AboutService />
            <JoinUs />
            <Testimonials />
            <Footer />
        </div>
    )
}