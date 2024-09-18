import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from '../../components/vendor/VendorSidebar.jsx';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AddCard from '../../components/common/AddCard.jsx';
import BlogCard from "../../components/common/BlogCard.jsx";
import Pagination from '../../components/common/Pagination.jsx'

const items = [
    { img: 'src/assets/Images/Images/01.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
    { img: 'src/assets/Images/Images/02.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
    { img: 'src/assets/Images/Images/03.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
    { img: 'src/assets/Images/Images/04.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
    { img: 'src/assets/Images/Images/05.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
    { img: 'src/assets/Images/Images/06.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
    { img: 'src/assets/Images/Images/07.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },
];

const renderItems = (currentItems) => (
    // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
    <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        <div className="flex items-center justify-center p-2 bg-white h-72 w-60">
            <AddCard
                text={"Create Blog"}
                link={"/vendor/blog/createblog"}
            />
        </div>
        {currentItems.map((item, index) => (
            <div key={index} className='flex items-center justify-center p-2 bg-white h-72 w-60'>
                <BlogCard
                    img={item.img}
                    text={item.text}
                    date={item.date}
                    time={item.time}
                    button={"Read Blog"}
                    link={"/vendor/blog/viewmyblog"}
                />
            </div>
        ))}
    </div>
    // </div>
);

function BlogPage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Blogs' },

    ];
    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Blogs</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
                            <Pagination items={items} itemsPerPage={8} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage