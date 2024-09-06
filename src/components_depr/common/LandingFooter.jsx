import React from "react";

function LandingFooter() {
  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Services", link: "/couples" },
    { id: 3, label: "Blogs", link: "/vendors" },
    { id: 4, label: "Login", link: "/about" },
    { id: 5, label: "Register", link: "/reviews" },
    { id: 6, label: "About", link: "/contact" },
  ];
  return (
<div className="flex flex-col items-center justify-center gap-5 bg-[#FFB68B] bg-opacity-20 backdrop-blur-sm absolute bottom-0 w-full pt-5 pb-5 rounded-t-3xl">
    <style jsx>{`
    .group-footer {
    position: relative;
  }
  
  .hover-underline-footer::before {
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
  
  .group-footer:hover .hover-underline-footer::before {
    visibility: visible;
    transform: scaleX(1);
  }
    `}</style>
      <div className="flex flex-col items-center justify-center gap-5">
        <img
          src="../src/assets/images/Images/logo2.png"
          alt="logo"
          className="block w-36 h-36"
        />
        <img
          src="../src/assets/images/Images/logo1.png"
          alt="logo"
          className="block w-80 h-24"
        />
      </div>
      <div>
        <ul className="flex flex-row gap-10 cursor-pointer font-medium text-lg flex-wrap items-center justify-center text-black px-5">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group-footer">
              <a href={item.link} className="hover-underline-footer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="font-normal text-black">Copyright® 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default LandingFooter;
