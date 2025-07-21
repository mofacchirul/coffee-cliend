import { Facebook } from "lucide-react";
import { Button } from "../ui/button";


const Footer = () => {
    return (
        <div>
          <footer className=" py-10 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Brand Info */}
    <div>
      <div className="flex items-center gap-2 mb-4">

        <h2 className="text-2xl font-bold text-primary">Impulseia.com</h2>
      </div>
      <p className="text-sm  mb-4">
        A monthly digest of the latest news and venen is urna resources. our clinic was created to make your smile beautiful, healthy and snow-white.
      </p>
      <div className="flex gap-2">
        <Button className="bg-primary text-white px-3 py-2 rounded"><Facebook></Facebook></Button>
        <Button className="bg-primary text-white px-3 py-2 rounded">G</Button>
        <Button className="bg-primary text-white px-3 py-2 rounded">X</Button>
      </div>
    </div>

    {/* Navigation */}
    <div>
      <h3 className=" font-bold text-lg mb-3 text-primary">Navigation</h3>
      <ul className="space-y-2 text-sm ">
        <li><a href="#">Become an Affiliate</a></li>
        <li><a href="#">Community Meetups</a></li>
        <li><a href="#">Why Buy With Us?</a></li>
        <li><a href="#">Blog and News</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>

    {/* Address */}
    <div>
      <h3 className=" font-bold text-lg mb-3 text-primary">Address Us</h3>
      <ul className="space-y-3 text-sm ">
        <li>📍 378 FA Tower, William SBI 2123, IL, US</li>
        <li>📞 Telephone: (0922) 3354 2252</li>
        <li>✉️ demo@example.com</li>
        <li>⏰ Time: 9.00am–4.00pm</li>
      </ul>
    </div>

    {/* Gallery */}
    
  </div>

  {/* Bottom Footer */}
  <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
    <p>Copyright © poket all rights reserved.</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#">Service</a>
      <a href="#">Contact</a>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;