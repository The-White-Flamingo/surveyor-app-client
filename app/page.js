// import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Surveyors from "./components/Surveyors";
import Questions from "./components/Questions";
import Innovation from "./components/Innovation";
import Testimonials from "./components/Testimonials";
import ReachOut from "./components/ReachOut";
import Footer from "./components/Footer";
import { FaCircle } from "react-icons/fa";


export default function Home() {
  return (
    <div className="flex flex-col overflow-y-auto h-screen max-h-screen items-center">
      <Navbar />
      <Hero />
      <div className="bg-orange-600 w-full flex items-center justify-evenly text-white p-4 text-2xl max-sm:hidden">
        <span><FaCircle size={15} className="inline mr-4 mb-1"/>Best In Land Survey Services</span>
        <span><FaCircle size={15} className="inline mr-4 mb-1"/>Excellent Precision</span>
        <span><FaCircle size={15} className="inline mr-4 mb-1"/>Timely Deliveries</span>
        <span><FaCircle size={15} className="inline mr-4 mb-1"/>Industry Standard</span>
      </div>
      <Services />
      <About />
      <Projects />
      <Surveyors />
      <Questions />
      <Innovation />
      <Testimonials />
      <ReachOut />
      <Footer />
      
    </div>
  );
}
