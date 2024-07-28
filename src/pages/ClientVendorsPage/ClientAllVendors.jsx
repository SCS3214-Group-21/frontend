import React from 'react'
import RegisterHeader from "../../components/common/RegisterHeader";
import ClientSidebar from "../../components/ClientSidebar"
import LandingFooter from "../../components/common/LandingFooter";
import ServicesCategoryCard from '../../components/common/ServicesCategoryCard';
import Breadcrumb from '../../components/ui/Breadcrumb';

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
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },

        { label: 'Vendors' },
    ];


    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Vendors</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-10">
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
            </div>
        </>
    )
}

export default ClientAllVendors
