import AboutUs from "./about";
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import Service from "./Service";


const Home = () => {
    return (
        <div className="">
    <HeroSection ></HeroSection>
    <Service></Service>
    <AboutUs></AboutUs>
    <OurTeam></OurTeam>
        </div>
    );
};

export default Home;