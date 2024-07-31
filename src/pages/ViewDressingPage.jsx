import React from "react";
import RegisterHeader from "../components/common/RegisterHeader";
import ClientSidebar from "../components/ClientSidebar";
import Breadcrumb from '../components/ui/Breadcrumb';
import Pagination from '../components/common/Pagination'
import ServiceDescriptionCard from "../components/common/ServiceDescriptionCard";
import VendorDescription from "../components/VendorDescription";

const items = [
    { img: 'src/assets/Images/Images/dressing1.jpg' },
    { img: 'src/assets/Images/Images/dressing3.jpg' },
    { img: 'src/assets/Images/Images/dressing4.jpg' },
    { img: 'src/assets/Images/Images/dressing5.jpg' },
    { img: 'src/assets/Images/Images/dressing6.jpg' },
    { img: 'src/assets/Images/Images/dressing7.jpg' },
    { img: 'src/assets/Images/Images/dressing8.jpg' },
    { img: 'src/assets/Images/Images/dressing1.jpg' },
    { img: 'src/assets/Images/Images/dressing2.jpg' },
    { img: 'src/assets/Images/Images/dressing3.jpg' },

];

const renderItems = (currentItems) => (
    // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 pb-5">
        {currentItems.map((item, index) => (
            <div key={index} className='flex items-center justify-center p-2 h-80 w-80'>
                <img src={item.img} className="w-72 h-80" />
            </div>
        ))}
    </div>
    // </div>
);

function ViewDressingPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Dressing', href: '/alldressers' },
        { label: 'Nilanthi Bridal Designs' },
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Dressing</h1>
                    </div>
                    <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5 sm:p-10'>
                        <VendorDescription
                            o_name={"Nilanthi Bridal Designs"}
                            address={"Bridal Story, Galle Road, Colombo 7"}
                            email={"nilanthibridals@gmail.com"}
                            starCount={4}
                            showStars={true}
                            img={"./src/assets/Images/Images/img1.png"}
                            v_name={"Dhanushi Premarathne"}
                            text={"We offer a comprehensive range of beauty treatments designed to meet all your needs and exceed your expectations. Our expert team, is dedicated to providing you with an exceptional experience, using the latest techniques and top-quality products. Whether you're looking for a refreshing new look or a relaxing retreat, we have the perfect solution to enhance your natural beauty and boost your confidence. Experience the epitome of beauty at Liyo Salon, where your satisfaction is our top priority. Discover the finest selection of beauty products at Liyo Salon, carefully curated to ensure you achieve salon-quality results at home. Our range includes top-tier brands and exclusive items that cater to all your hair, skin, and beauty needs. Each product is chosen for its superior quality and effectiveness, helping you maintain and enhance your natural beauty between visits.."}
                            link={"/"}
                            button={"Make an appointment"}
                        />
                    </div>
                    <div className="flex items-center justify-center w-full py-5 bg-[#f9f7f5]">
                        <div className="flex-grow h-[1px] bg-custom-primary m-2"></div>
                        <span className="font-bold text-custom-primary">Recent</span>
                        <div className="flex-grow h-[1px] bg-custom-primary mx-2"></div>
                    </div>
                    <div className="pb-5">
                        <div className='flex flex-row flex-wrap items-center justify-center w-full gap-10 p-8 sm:gap-5'>
                            <Pagination items={items} itemsPerPage={6} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDressingPage;