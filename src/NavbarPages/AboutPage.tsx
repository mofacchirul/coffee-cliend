import Banner from '@/hooks/banner';
import AboutUs from '@/pages/Home/about';


const AboutPage = () => {
    return (
        <div>
            <Banner titel='About'></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default AboutPage;