import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AddCard from '../../components/common/AddCard.jsx';
import PackageCard from '../../components/common/PackageCard.jsx';
import Pagination from '../../components/common/Pagination.jsx'

const items = [
    { img: '../src/assets/images/Images/hotel.png', text: 'Budget 01', link: '/client/viewbudget', },
    { img: '../src/assets/Images/Images/hotel6.jpeg', text: 'Budget 02', link: '/viewpackage', },
    { img: '../src/assets/Images/Images/hotel7.jpeg', text: 'Budget 03', link: '/viewpackage', },
    { img: '../src/assets/Images/Images/03.png', text: 'Budget 04', link: '/viewpackage', },
    { img: '../src/assets/Images/Images/01.png', text: 'Budget 05', link: '/viewpackage', },
    { img: '../src/assets/Images/Images/hotel6.jpeg', text: 'Budget 06', link: '/viewpackage', },
    { img: '../src/assets/Images/Images/hotel7.jpeg', text: 'Budget 07', link: '/viewpackage', },
    { img: '../src/assets/Images/Images/hotel8.jpeg', text: 'Budget 08', link: '/viewpackage', },
];

const renderItems = (currentItems) => (
    // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
    <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        <div className="flex items-center justify-center p-2 bg-white h-60 w-52">
            <AddCard
                text={"Plan Budget"}
                link={"/client/planbudget"}
            />
        </div>
        {currentItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center p-2 bg-white h-60 w-52">
                <PackageCard
                    img={item.img}
                    text={item.text}
                    button={"See more"}
                    link={item.link}
                    showToggle={false}
                />
            </div>
        ))}
    </div>
    // </div>
);

function BudgetPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: './mywedding' },
        { label: 'Budget' },
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Budget</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
                            {/* <div className="flex items-center justify-center p-2 bg-white h-60 w-52">
                                <AddCard
                                    text={"Plan Budget"}
                                    link={"/client/planbudget"}
                                />
                            </div> */}
                            <Pagination items={items} itemsPerPage={5} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetPage