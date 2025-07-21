import { FacebookIcon, Linkedin, Twitter } from "lucide-react";
import imgage from "../../assets/team/Screenshot 2025-07-21 031024.png"

const teammembers =[
    {
        id:1,
        name:"Anamul Hoque",
        skil:"App developer | Problem Solver",
        image:imgage,
        socialLinks: {
            facebook: "https://www.facebook.com/anamul.hoque.520",
            twitter: "https://twitter.com/AnamulHoqe",
            linkedin: "https://www.linkedin.com/in/anamul-hoque-1b0a1b1b6/"
        }

    },
    {
        id:2,
        name:"Omar Rayhan Uddin",
        skil:"Backend  developer | Python | Django",
        image:imgage,
        socialLinks: {
            facebook: "https://www.facebook.com/anamul.hoque.520",
            twitter: "https://twitter.com/AnamulHoqe",
            linkedin: "https://www.linkedin.com/in/anamul-hoque-1b0a1b1b6/"
        }

    },
    {
        id:3,
        name:"Reazul Murad",
        skil:"Project Manager | Leraval",
        image:imgage,
        socialLinks: {
            facebook: "https://www.facebook.com/anamul.hoque.520",
            twitter: "https://twitter.com/AnamulHoqe",
            linkedin: "https://www.linkedin.com/in/anamul-hoque-1b0a1b1b6/"
        }

    },
    {
        id:4,
        name:"Shamin Ahmmed",
        skil:"UI/UX Designer | Frontend Developer",
        image:imgage,
        socialLinks: {
            facebook: "https://www.facebook.com/anamul.hoque.520",
            twitter: "https://twitter.com/AnamulHoqe",
            linkedin: "https://www.linkedin.com/in/anamul-hoque-1b0a1b1b6/"
        }

    },
]








const OurTeam = () => {









    return (
        <div className="py-10 container mx-auto">
            <div className=" w-2/3 mx-auto text-center">
                <h1 className="lg:text-5xl text-4xl font-bold  mb-6"> Our <span className="text-primary"> Team </span> Members</h1>
                <p> Meet Our Exceptional Team - passionate developers , strategic thinkers and innovators dedicated your expernce</p>
            </div>
             <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6">
        {teammembers.map((member) => (
          <div
            key={member.id}
            className="bg-white  shadow-lg rounded-2xl overflow-hidden text-center p-6 hover:shadow-xl transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full p-1 mx-auto mb-4 border-4 border-primary"
            />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{member.skil}</p>
            <div className="flex justify-center gap-4">
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-black"
              >
                <FacebookIcon />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-black"
              >
                <Twitter />
              </a>
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                 className="text-primary hover:text-black"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
            
        </div>
    );
};

export default OurTeam;