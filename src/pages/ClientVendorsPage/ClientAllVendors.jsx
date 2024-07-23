import React from 'react'
import RegisterHeader from "../../components/common/RegisterHeader";
import ClientSidebar from "../../components/ClientSidebar"
import LandingFooter from "../../components/common/LandingFooter";
import ServicesCategoryCard from '../../components/common/ServicesCategoryCard';

function ClientAllVendors() {
    const cardData = [
        { img: "../src/assets/images/Images/03.png", alt: "hotels", type: "Hotels", href: "./allhotels" },
        { img: "../src/assets/images/Images/03.png", alt: "Dressers", type: "Dressers", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Photography", type: "Photography", href: "/allphotographers" },
        { img: "../src/assets/images/Images/03.png", alt: "Floral", type: "Floral", href: "/allflorals" },
        { img: "../src/assets/images/Images/03.png", alt: "Jewellery", type: "Jewellery", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Dancing Groups", type: "Dancing Groups", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Ashtaka", type: "Ashtaka", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Salons", type: "Salons", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Djs", type: "Djs", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Honeymoon", type: "Honeymoon", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Cakes", type: "Cakes", href: "/allcakes" },
        { img: "../src/assets/images/Images/03.png", alt: "Cars", type: "Cars", href: "/allcars" },
        { img: "../src/assets/images/Images/03.png", alt: "Invitation Cards", type: "Invitation Cards", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Poruwa", type: "Poruwa", href: "#" },
        { img: "../src/assets/images/Images/03.png", alt: "Catering", type: "Catering", href: "#" }
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
