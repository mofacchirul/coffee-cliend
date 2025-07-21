import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import {  MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navar = () => {
  const linkClass =
    "font-bold hover:text-primary hover:underline hover:decoration-black hover:underline-offset-4 dark:hover:decoration-white";

  return (
    <div className=" py-3 container mx-auto md:py-5">
      {/* Mobile navbar (Dropdown) */}
      <div className="flex items-center justify-between md:hidden">
        {/* Left side (Menu icon) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 mt-2">
            <DropdownMenuItem asChild>
              <NavLink to="/">Home</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/about">About</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/service">Service</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/ourteam">Our Team</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/contact">Contact</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Center Logo */}
        <h1 className="text-primary font-bold text-xl">Impulseia.com</h1>

        {/* Right side icons */}
        <div className="flex gap-2">
          
          <ModeToggle />
        </div>
      </div>

      {/* Desktop navbar (flex row) */}
      <div className="hidden md:flex items-center justify-between">
        {/* Left side: Logo */}
        <h1 className="text-primary font-bold lg:text-4xl text-2xl">Impulseia.com</h1>

        {/* Center: Menu Links */}
        <ul className="flex gap-6">
          <NavLink to="/" className={linkClass}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <li>About</li>
          </NavLink>
          <NavLink to="/service" className={linkClass}>
            <li>Service</li>
          </NavLink>
          <NavLink to="/Ourteam" className={linkClass}>
            <li>Our Team</li>
          </NavLink>
          <NavLink to="/protfolio" className={linkClass}>
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <li>Contact</li>
          </NavLink>
        </ul>

        {/* Right side: Icons */}
        <div className="flex gap-2">
         
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navar;
