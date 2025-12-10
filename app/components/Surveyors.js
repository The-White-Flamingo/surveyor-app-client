"use client"
import Image from "next/image";
import {useState} from "react";

export default function Surveyors() {
    const [solution,setSolution] = useState(false);
    const [boundary,setBoundary] = useState(false);
    const [plot,setPlot] = useState(false);
    const [exhibit,setExhibit] = useState(false);

    const showSolution = ()=>{
        if(solution === true){ setSolution(false) }else setSolution(true);
    }

    const showBoundary = ()=>{
        if(boundary === true){ setBoundary(false) }else setBoundary(true);
        
    }

    const showPlot = ()=>{
        if(plot === true){ setPlot(false) }else setPlot(true);
        
    }

    const showExhibit = ()=>{
        if(exhibit === true){ setExhibit(false) }else setExhibit(true);
        
    }

  return (
    <div className="flex flex-col gap-5 items-center justify-center bg-gray-100 w-full">
        <h1 className="font-bold text-3xl text-center mt-10">Our Surveyors Offer A Range Of Services</h1>
        <div className="max-w-4xl max-sm:w-full max-sm:flex max-sm:flex-col flex items-center justify-center gap-4 mb-10">
            <div className="w-1/2 max-sm:w-full ">
                <Image src={"/serviceThumb2_1.png.png"} alt="service" width={800} height={800}/>
            </div>

            <div className="w-1/2 flex flex-col self-start p-2 max-sm:w-full ">
            
                <div className="border-b-2 border-gray-300">
                    <div onClick={showSolution} className="p-4 font-semibold text-sm">Build Wise Solution</div>
                    <div className={solution ? "p-4 text-gray-500 text-sm" : "hidden"}>
                        Land surveying measures and maps land boundary,
                        features, and elevations for construction, ownership, and
                        planning with precision tools and technology.
                    </div>
                </div>
            
                <div className="border-b-2 border-gray-300">
                    <div onClick={showBoundary} className="p-4 font-semibold text-sm">Real Estate Boundaries</div>
                    <div className={boundary ? "p-4 text-gray-500 text-sm" : "hidden"}>
                        Land surveying measures and maps land boundary,
                        features, and elevations for construction, ownership, and
                        planning with precision tools and technology.
                    </div>
                </div>
            
                <div className="border-b-2 border-gray-300">
                    <div onClick={showPlot} className="p-4 font-semibold text-sm">Land Survey Plot</div>
                    <div className={plot ? "p-4 text-gray-500 text-sm" : "hidden"}>
                        Land surveying measures and maps land boundary,
                        features, and elevations for construction, ownership, and
                        planning with precision tools and technology.
                    </div>
                </div>
            
                <div className="border-b-2 border-gray-300">
                    <div onClick={showExhibit} className="p-4 font-semibold text-sm">Topographic Exhibit</div>
                    <div className={exhibit ? "p-4 text-gray-500 text-sm" : "hidden"}>
                        Land surveying measures and maps land boundary,
                        features, and elevations for construction, ownership, and
                        planning with precision tools and technology.
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}
