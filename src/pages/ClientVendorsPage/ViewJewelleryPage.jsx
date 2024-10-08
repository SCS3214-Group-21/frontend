import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import Pagination from '../../components/common/Pagination.jsx'
import ServiceDescriptionCard from "../../components/client/ServiceDescriptionCard.jsx";
import VendorDescription from "../../components/client/VendorDescription.jsx";

const items1 = [
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
];

const items2 = [
    { img: 'src/assets/Images/Images/01.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/02.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/03.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/04.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/05.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/06.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
    { img: 'src/assets/Images/Images/07.png', name: 'Make Up (Mac)', price: '$300', text: 'BMW super luxury racing car. High speed and maximum horsepower', },
];

const renderItems1 = (currentItems) => (
    // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 pb-5">
        {currentItems.map((item, index) => (
            <div key={index} className='flex items-center justify-center p-2 h-80 w-80'>
                <ServiceDescriptionCard
                    href="#popup"
                    img={item.img}
                    alt={"imagesaloog"}
                    name={item.name}
                    price={item.price}
                    description={item.text}
                    showStars={false}
                />
            </div>
        ))}
    </div>
    // </div>
);

const renderItems2 = (currentItems) => (
    // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 pb-5">
        {currentItems.map((item, index) => (
            <div key={index} className='flex items-center justify-center p-2 h-80 w-80'>
                <ServiceDescriptionCard
                    href="#popup"
                    img={item.img}
                    alt={"imagesaloog"}
                    name={item.name}
                    price={item.price}
                    description={item.text}
                    showStars={false}
                />
            </div>
        ))}
    </div>
    // </div>
);

function ViewJewelleryPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Jewellery', href: '/alljewellery' },
        { label: 'Vogue Jewellers' },
    ];
    return (
        <div>
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Jewellery</h1>
                    </div>
                    <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5 sm:p-10'>
                        <VendorDescription
                            o_name={"Vogue Jewellers"}
                            address={"Bridal Story, Galle Road, Colombo 7"}
                            email={"nilanthibridals@gmail.com"}
                            starCount={4}
                            showStars={true}
                            img={"./src/assets/Images/Images/img1.png"}
                            v_name={"Dhanushi Premarathne"}
                            text={"We offer a comprehensive range of beauty treatments designed to meet all your needs and exceed your expectations. Our expert team, is dedicated to providing you with an exceptional experience, using the latest techniques and top-quality products. Whether you're looking for a refreshing new look or a relaxing retreat, we have the perfect solution to enhance your natural beauty and boost your confidence. Experience the epitome of beauty at Liyo Salon, where your satisfaction is our top priority. Discover the finest selection of beauty products at Liyo Salon, carefully curated to ensure you achieve salon-quality results at home. Our range includes top-tier brands and exclusive items that cater to all your hair, skin, and beauty needs. Each product is chosen for its superior quality and effectiveness, helping you maintain and enhance your natural beauty between visits.."}
                            link={"/"}
                            button={"Book Now"}
                        />
                    </div>
                    <div className="flex items-center justify-center w-full py-5 bg-[#f9f7f5]">
                        <div className="flex-grow h-[1px] bg-custom-primary m-2"></div>
                        <span className="font-bold text-custom-primary">Services</span>
                        <div className="flex-grow h-[1px] bg-custom-primary mx-2"></div>
                    </div>
                    <div className="pb-5">
                        <div className='flex flex-row flex-wrap items-center justify-center w-full gap-10 p-8 sm:gap-5'>
                            <Pagination items={items1} itemsPerPage={3} renderItems={renderItems1} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full py-5">
                        <div className="flex-grow h-[1px] bg-custom-primary mx-2"></div>
                        <span className="font-bold text-custom-primary">Bridal Packages</span>
                        <div className="flex-grow h-[1px] bg-custom-primary mx-2"></div>
                    </div>
                    <div className="pb-5">
                        <div className='flex flex-row flex-wrap items-center justify-center w-full gap-10 p-8 sm:gap-5'>
                            <Pagination items={items2} itemsPerPage={3} renderItems={renderItems2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewJewelleryPage;