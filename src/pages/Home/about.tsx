import { Button } from "@/components/ui/button";
import img1 from "../../assets/about/1.jpg"
import img2 from "../../assets/about/women-in-creative-agency-planning-on-tablet-compu-2022-12-10-00-16-14-utc-1024x650.jpg"
const AboutUs = () => {
  return (
    <div className="container mx-auto  py-10">
      <div className="flex flex-col-reverse  lg:flex-row  gap-8">
  <div className="flex-1">
    <img src={img1} className="w-[400px] rounded-3xl mx-auto" alt="" />
    <img src={img2} className="w-96 rounded-2xl mx-auto -mt-28 ml-7" alt="" />

  </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold  mb-4">ABOUT US</h2>
          <h3 className="text-5xl font-bold  mb-6"><span className="text-primary">Introduction</span> To Best Digital Agency!</h3>
          <p className=" mb-6">
            Sint nascetur facere, delectus conubia consequuntur, nonummy
            distinctio! Non officiis, id natus non nisi provident justo.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-1  gap-4 mb-8">
            {[
              "Praesentium volupta tum dolores.",
              "Cillum nullam rem volutpat earum.",
              "Odio doloribus lacus quaerat assum.",
              "Natoque, cubilla eos ipsa, vehicula.",
              "Cillum nullam rem volutpat earum.",
              "Odio doloribus lacus quaerat assum."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-2 text-primary ">☺</span>
                <span className="">{item}</span>
              </li>
            ))}
          </ul>
          <Button className="text-white font-bold">
            MORE ABOUT US
          </Button>
        </div>
      

     
      </div>
    </div>
  );
};

export default AboutUs;