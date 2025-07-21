import { Locate, Phone, WorkflowIcon } from "lucide-react";

import img from "../../assets/about/agency-img28-1.png"
const Contact = () => {
  return (
    <div className="container mx-auto">
     
      <div className="min-h-screen lg:flex flex-col md:flex-row justify-center items-start gap-10 p-8 bg-white">
     
    <div className="lg:flex items-center justify-center">
          <div className=" space-y-5">
        <h2 className="text-4xl lg:5xl font-bold">

<span className="text-primary">Contact</span> & Join Together
</h2>
        <p className="text-gray-600">
        Sint nascetur facere, delectus conubia consequuntur, nonummy distinctio! Non officiis, id natus non nisl provident justo.
        </p>

        <div className="space-y-6 mt-6">
          <div className="flex items-center gap-4">
            <span className=" text-primary text-4xl"><Phone></Phone></span>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">(233) 236 23 23</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl text-primary"><WorkflowIcon></WorkflowIcon></span>
            <div>
              <p className="text-sm text-gray-500">Working hour</p>
              <p className="font-medium">08h-18h monday-friday</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl text-primary"><Locate></Locate></span>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">Example Street 123, City</p>
            </div>
          </div>
        </div>
      </div>
<div>
    <img src={img} className="h-72 mx-auto lg:h-full" alt="" />
</div>
    </div>



     
      <div className="md:w-2/3 mx-auto w-full bg-white shadow-lg p-8 mt-4 lg:mt-0 rounded-md">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b-2 outline-none py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 outline-none py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b-2 outline-none py-2"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border-b-2 outline-none py-2"
          ></textarea>

          <button
            type="submit"
            className="bg-primary font-bold text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Send message
          </button>
        </form>
      </div>

      
    </div>
    <div>
    <iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29378.513425729736!2d91.39893049999999!3d23.0122338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1746463032357!5m2!1sen!2sbd"
width={"100%"}
height="450"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>
</div>
    </div>
  );
};

export default Contact;