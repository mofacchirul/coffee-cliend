import { Button } from "@/components/ui/button";
import imgaes from "../../assets/team/Screenshot 2025-07-21 031024.png"
import { PhoneIcon, GlobeIcon, CloudIcon, PaintbrushIcon } from "lucide-react";

const services = [
  {
    icon: <PhoneIcon className="w-8 h-8 text-blue-500" />,
    title: "App Development",
    description:
      "We build scalable mobile apps designed to evolve alongside your business, ensuring they adapt to your growing needs.",
  },
  {
    icon: <GlobeIcon className="w-8 h-8 text-green-500" />,
    title: "Web App Development",
    description:
      "We create dynamic websites and web apps that blend creativity and functionality, elevating your online presence with user-friendly experiences.",
  },
  {
    icon: <CloudIcon className="w-8 h-8 text-purple-500" />,
    title: "API Development",
    description:
      "We design secure and reliable cloud backends that effortlessly manage your data, ensuring robust protection and seamless integration with your applications.",
  },
  {
    icon: <PaintbrushIcon className="w-8 h-8 text-pink-500" />,
    title: "UI/UX Design",
    description:
      "We deliver custom UI/UX solutions that reflect your brand’s unique identity, ensuring a seamless and cohesive user experience aligned with your vision.",
  },
];

const Service = () => {
    return (
      <div className="py-10">
                  <div className=" container mx-auto lg:flex  justify-between items-center gap-2">
                      <div className=" space-y-2">
                          <h1 className="text-5xl font-bold ">
                              <span className="text-primary">Services</span>  We Can Help You With
                          </h1>
                          <p>We focus on developing high-quality mobile apps and websites. Our strength lies in combining stylish designs with powerful backend features, ensuring that your applications are both user-friendly and reliable</p>
      
                             <ul className=" ">
                              <div className="flex items-center ">
                                 <span className="text-xl mr-1  text-primary ">☺</span>   <li className="">Nobis ridiculus cupiditate egestas commodi.</li>
                              </div>

                               <div className="flex items-center">
                                <span className="text-xl mr-1  text-primary ">☺</span> <li>Ipsum dui curabitur dapibuish mollitia.</li>
                               </div>
                             </ul>

                             <div className="mt-4 lg:flex items-center gap-8">
                                <div className="flex flex-col items-center space-y-1 ">
                                    <img className="w-32 border-solid border-primary p-1 border-4 h-32 rounded-full" src={imgaes} alt="" />
                                    <h1>Armanul Haque</h1>
                                    <p className="font-bold ">CEO, Director</p>
                                </div>
                              <div>
                                <Button className="text-white font-bold">
                                    MORE SERVICES
                                </Button>
                              </div>
                             </div>
                          
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 mt-7 lg:mt-0">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 rounded-lg border transition"
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-sm mb-4">{service.description}</p>
          <Button className="text-white hover:underline">Know More →</Button>
        </div>
      ))}
    </div>
                  </div>
              </div>
    );
};

export default Service;