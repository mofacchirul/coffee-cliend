import { Button } from "@/components/ui/button";
import {   ArrowRight } from "lucide-react";
import imgae from "../../assets/Banner/entrepreneurs-hard-at-work-2023-03-08-18-47-26-utc.jpg"

const HeroSection = () => {
    return (
        <div className="py-10">
            <div className=" container mx-auto lg:flex  justify-between items-center gap-2">
                <div className="flex-1 space-y-2">
                    <h1 className="text-5xl font-bold ">
                        Best Ever in <span className="text-primary">Mobil App</span>
                    </h1>
                    <p>We turn Your ideas into impactful Mobil Apps & Webside</p>

                    <p className="lg:mt-10 mt-7">
                        Build Beautiful high performance, apps and websites with our expert team,Delivaring great result on any platforms
                    </p>
                    <Button className="font-bold flex justify-between  items-center text-white text-2xl mt-7">
                        Contact Us <span> <ArrowRight  ></ArrowRight></span>
                    </Button>
                </div>
                <div className="flex-1 mt-3 lg:mt-0">
                    <img src={imgae} alt="" className="w-[400px] h-[400px] rounded-full mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;