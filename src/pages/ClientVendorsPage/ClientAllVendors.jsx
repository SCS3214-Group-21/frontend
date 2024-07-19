import React from 'react'
import RegisterHeader from "../../components/common/RegisterHeader";
import ClientSidebar from "../../components/ClientSidebar"
import LandingFooter from "../../components/common/LandingFooter";
import ServicesCategoryCard from '../../components/common/ServicesCategoryCard';

function ClientAllVendors() {
    const cardData = [
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Hotels", href: "./AllHotelsPage" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Dressers", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Photography", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Floral", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Jewellery", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Dancing Groups", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Ashtaka", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Salons", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Djs", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Honeymoon", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Cakes", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Cars", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Invitation Cards", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Poruwa", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Catering", href: "#" }
    ];

    return (
        <>
            <RegisterHeader />
            <ClientSidebar />
            <div className="flex flex-col bg-[#FFF8F5]">
                <h1 className='text-3xl font-bold text-[#A57E17] ml-80 mt-4'>Vendors</h1>
                <div className='grid grid-cols-4 gap-6 p-8 ml-80'>
                    {cardData.map((card, index) => (
                        <ServicesCategoryCard
                            key={index}
                            img={card.img}
                            alt={card.alt}
                            type={card.type}
                            href={card.href}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ClientAllVendors
