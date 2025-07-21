
import AboutUs from "./about";
import Contact from "./Contack";
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
    <Contact></Contact>
    
        </div>
    );
};

export default Home;