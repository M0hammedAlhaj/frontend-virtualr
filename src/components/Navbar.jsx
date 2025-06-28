import React from "react";
import Logo from "../assets/logo.png";
import MenuItem from "./MenuItem";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className="wrappwer lg:px-30 md:px-20  px-20  ">
        <div
          className="    
          flex justify-between items-center   "
        >
          <div className="  logo  flex items-center gap-2 font-bold    ">
            <img src={Logo} alt="virualR" className="min-w-15 max-w-15" />
            <h1>VirtualR</h1>
          </div>
          <ul className="hidden lg:flex gap-20 text-[1.1rem]">
            <MenuItem text="Features" />
            <MenuItem text="Workflow" />
            <MenuItem text="Pricing" />
            <MenuItem text="Testimonials" />
          </ul>

          <div className=" hidden md:flex gap-7 max-h-1 items-center  ">
            <button className="px-6 py-2 border-white border-1">Sign in</button>
            <button className="px-6 py-2 bg-amber-700 rounded-[.4rem]-">
              Create an account
            </button>
          </div>

          {/* Hamburger icon label */}
          <label
            htmlFor=" menu-toggle"
            className="md:hidden cursor-pointer  "
            onClick={() => setIsMenuOpen(isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        {isMenuOpen && (
          <div className="flex  flex-col  items-center gap-2  text-white">
            <ul className="flex flex-col gap-2 text-[1.1rem]">
              <MenuItem text="Features" />
              <MenuItem text="Workflow" />
              <MenuItem text="Pricing" />
              <MenuItem text="Testimonials" />
            </ul>
            <div className=" flex gap-5 ">
               <button className="px-6 py-2 border-white border-1">Sign in</button>
            <button className="px-6 py-2 bg-amber-700 rounded-[.4rem]-">

                Create an account</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
