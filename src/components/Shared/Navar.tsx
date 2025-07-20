import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { ShoppingBagIcon, MenuIcon } from "lucide-react";
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
    <div className="flex items-center justify-between px-4 py-3 md:py-5 relative">

      <div className="md:hidden absolute left-4">
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
              <NavLink to="/menu">Menu</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/shop">Shop</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/blog">Blog</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/contact">Contact</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Center Logo */}
      <div className="mx-auto">
        <h1 className="text-primary font-bold lg:text-4xl text-xl">Poket</h1>
      </div>

      {/* Right side icons */}
      <div className="gap-2 flex absolute right-4">
        <Button variant={"outline"} className="rounded-full">
          <ShoppingBagIcon />
        </Button>
        <div className="rounded-full">
          <ModeToggle />
        </div>
      </div>

      {/* Desktop Nav - hidden on mobile */}
      <div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2 top-full mt-2">
        <ul className="flex gap-6">
          <NavLink to="/" className={linkClass}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <li>About</li>
          </NavLink>
          <NavLink to="/menu" className={linkClass}>
            <li>Menu</li>
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            <li>Shop</li>
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            <li>Blog</li>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navar;
