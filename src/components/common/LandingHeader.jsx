import React, { useState } from "react";
import RegisterType from "./RegisterType"; // Adjust the import path as needed
import { Link, animateScroll as scroll } from "react-scroll";

function LandingHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const menuItems = [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "Services", link: "services-section" },
        { id: 4, label: "About", link: "/about" },
        { id: 5, label: "Register", link: "#", onClick: () => setIsPopupOpen(true) },
        { id: 6, label: "Login", link: "/login" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="fixed top-0 z-50 w-full">
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
            <div className="flex flex-row items-center justify-between w-full h-20 bg-[#FFF8F5] px-5 flex-wrap z-50">
                <div className="md:hidden">
                    <button
                        className="text-4xl text-custom-primary focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-between gap-5">
                    <img
                        src="../src/assets/images/Images/logo2.png"
                        alt="logo"
                        className="hidden w-12 h-12 md:block"
                    />
                    <img
                        src="../src/assets/images/Images/logo1.png"
                        alt="logo"
                        className="hidden w-56 md:block h-14"
                    />
                </div>

                <div className="flex flex-row flex-wrap items-center justify-between gap-5 md:hidden">
                    <img src="../src/assets/images/Images/logo1.png" alt="logo" className="w-40 sm:w-60 h-14" />
                </div>

                <div>
                    <ul className="flex-row flex-wrap hidden gap-10 text-lg cursor-pointer md:flex text-custom-primary">
                        {menuItems.map((item) => (
                            <li key={item.id} className="relative group">
                                {item.link === "#" ? (
                                    <a href={item.link} className="hover-underline" onClick={item.onClick}>
                                        {item.label}
                                    </a>
                                ) : item.link.startsWith("/") ? (
                                    <a href={item.link} className="hover-underline">
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.link}
                                        smooth={true}
                                        duration={500}
                                        className="hover-underline"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <h1 className="flex-wrap block text-lg cursor-pointer md:hidden text-custom-primary">Login</h1>
            </div>

            {/* Mobile Menu */}
            <div className="fixed z-50 w-full bg-opacity-50 bg-slate-400 top-20 backdrop-blur-sm">
                <ul
                    className={`md:hidden flex flex-col gap-10 items-center justify-center cursor-pointer text-lg flex-wrap m-5 text-custom-primary ${isMenuOpen ? "block" : "hidden"
                        }`}
                    style={{
                        transition: "top 0.5s ease-in-out",
                        top: isMenuOpen ? "60px" : "-100%",
                    }}
                >
                    {menuItems.map((item) => (
                        <li key={item.id} className="relative group">
                            {item.link === "#" ? (
                                <a
                                    href={item.link}
                                    className="hover-underline"
                                    onClick={() => { item.onClick && item.onClick(); closeMenu(); }}
                                >
                                    {item.label}
                                </a>
                            ) : item.link.startsWith("/") ? (
                                <a
                                    href={item.link}
                                    className="hover-underline"
                                    onClick={() => closeMenu()}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    to={item.link}
                                    smooth={true}
                                    duration={500}
                                    className="hover-underline"
                                    onClick={() => closeMenu()}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Popup Window */}
            {isPopupOpen && <RegisterType onClose={closePopup} />}
        </div>
    );
}

export default LandingHeader;
