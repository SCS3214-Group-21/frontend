import React from 'react'
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/client/ClientSidebar.jsx"
import LandingFooter from "../../components/common/LandingFooter.jsx";
import ServicesCategoryCard from '../../components/common/ServicesCategoryCard.jsx';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';

function ClientAllVendors() {
    const cardData = [
        { img: "../src/assets/images/services/hotel.png", alt: "hotels", type: "Hotels", href: "././vendors/hotels" },
        { img: "../src/assets/images/services/dress.png", alt: "Dressers", type: "Dressers", href: "/alldressers" },
        { img: "../src/assets/images/services/photography.jpg", alt: "Photography", type: "Photography", href: "././vendors/allphotographers" },
        { img: "../src/assets/images/services/floral.png", alt: "Floral", type: "Floral", href: "././vendors/allflorals" },
        { img: "../src/assets/images/services/jewellery.png", alt: "Jewellery", type: "Jewellery", href: "/alljewellery" },
        { img: "../src/assets/images/services/dancing.png", alt: "Dancing Groups", type: "Dancing Groups", href: "#" },
        { img: "../src/assets/images/services/ashtaka.jpg", alt: "Ashtaka", type: "Ashtaka", href: "#" },
        { img: "../src/assets/images/services/hair.jpeg", alt: "Salons", type: "Salons", href: "/allsalons" },
        { img: "../src/assets/images/services/dj.jpg", alt: "Djs", type: "Djs", href: "#" },
        { img: "../src/assets/images/services/honeymoon.jpg", alt: "Honeymoon", type: "Honeymoon", href: "#" },
        { img: "../src/assets/images/services/cake.png", alt: "Cakes", type: "Cakes", href: "/allcakes" },
        { img: "../src/assets/images/services/car.jpg", alt: "Cars", type: "Cars", href: "/allcars" },
        { img: "../src/assets/images/services/invitation.jpg", alt: "Invitation Cards", type: "Invitation Cards", href: "#" },
        { img: "../src/assets/images/services/poruwa.jpg", alt: "Poruwa", type: "Poruwa", href: "#" },
        { img: "../src/assets/images/services/catering.jpg", alt: "Catering", type: "Catering", href: "#" }
    ];
    const breadcrumbItems = [
        { label: 'My Wedding', href: '././mywedding' },

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
                    <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
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
