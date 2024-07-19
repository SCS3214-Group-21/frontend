import React from "react";
import { useState } from "react";

function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Services", link: "/couples" },
    { id: 4, label: "About", link: "/about" },
    { id: 5, label: "Register", link: "/register" },
    { id: 6, label: "Login", link: "/login" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <style jsx>{`
        .hover-underline::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: currentColor;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;
        }
        
        .group:hover .hover-underline::before {
            visibility: visible;
            transform: scaleX(1);
        } 
        `}</style>
      <div
        className="flex flex-row items-center justify-between w-full h-20 bg-[#FFF8F5]  px-5 flex-wrap z-50"
      >
        <div className="md:hidden">
          <button
            className="text-custom-primary focus:outline-none text-4xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="flex flex-row gap-5 items-center justify-between flex-wrap">
          <img
            src="../src/assets/images/Images/logo2.png"
            alt="logo"
            className="hidden md:block w-12 h-12"
          />
          <img
            src="../src/assets/images/Images/logo1.png"
            alt="logo"
            className="hidden md:block w-56 h-14"
          />
        </div>

        <div className="md:hidden flex flex-row gap-5 items-center justify-between flex-wrap">
          <img src="../src/assets/images/Images/logo1.png" alt="logo" className="w-40 sm:w-60 h-14" />
        </div>

        <div>
          <ul className="hidden md:flex flex-row gap-10 cursor-pointer text-lg flex-wrap text-custom-primary">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <a href={item.link} className="hover-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <h1 className="block md:hidden cursor-pointer text-lg flex-wrap text-custom-primary">Login</h1>
      
      </div>

      {/* Mobile Menu */}
      <div className="w-full bg-slate-400 top-20 z-50 bg-opacity-50 backdrop-blur-sm fixed">
        <ul
          className={`md:hidden flex flex-col gap-10 items-center justify-center cursor-pointer text-lg flex-wrap m-5 text-custom-primary ${
            isMenuOpen ? "block" : "hidden"
          }`}
          style={{
            transition: "top 0.5s ease-in-out",
            top: isMenuOpen ? "60px" : "-100%",
          }}
        >
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={item.link}
                className="hover-underline"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LandingHeader;
