
import React, { useState } from "react";

import Breadcrumb from '../../components/ui/Breadcrumb.jsx';

import BlogCard from "../../components/common/AdminBlogCard.jsx";

import Pagination from '../../components/common/Pagination.jsx'

import AdminHeader from "../../components/common/AdminHeader.jsx";

import AdminSidebar from "../../components/admin/AdminSidebar.jsx";



const items = [


    { label: 'New', img: 'src/assets/Images/Images/01.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },

    { label: 'Accepted', img: 'src/assets/Images/Images/02.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },

    { label: 'Rejected', img: 'src/assets/Images/Images/03.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },

    { label: 'Accepted', img: 'src/assets/Images/Images/04.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },

    { label: 'New', img: 'src/assets/Images/Images/05.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },

    { label: 'Rejected', img: 'src/assets/Images/Images/06.png', text: 'Love in Full Blooms - Navigating the Delicate Petals of Romance', date: '13 Nov, 2023', time: '05.00 PM', },

];


const AdminBlogAcceptPage = () => {

    const [selectedType, setSelectedType] = useState('All'); // State to store the selected filter type

    // Function to filter items based on the selected type

    const filteredItems = items.filter(item => {

        if (selectedType === 'All') return true;

        return item.label === selectedType;

    });

    // Handle change of the select input

    const handleTypeChange = (e) => {

        setSelectedType(e.target.value);

    };


    const renderItems = (currentItems) => (

    <div className="flex flex-row flex-wrap items-center justify-center gap-6">

            {currentItems.map((item, index) => (

<div key={index} className="flex items-center justify-center p-2 bg-white h-90 w-72">


                    <BlogCard

label={item.label}

img={item.img}

text={item.text}

date={item.date}

time={item.time}

acceptButtonText={item.label === 'New' ? "Accept" : undefined}

rejectButtonText={item.label === 'New' ? "Reject" : undefined}

removeButtonText={item.label !== 'New' ? "Remove" : undefined}

link={"/"}

/>

                </div>

))}

        </div>

);



const breadcrumbItems = [

    { label: 'Dashboard', href: '/admindashboard' },

    { label: 'Blogs' },

];



return (

<div>

            <AdminHeader />

            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">

                <div className="w-[5%] sm:w-[10%] md:w-[20%]">

                    <AdminSidebar />

                </div>

                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">

                    <div className="pb-5">

                        <Breadcrumb items={breadcrumbItems} />

                    </div>

                    <div className="flex justify-between pb-5">

                        <h1 className='text-4xl font-bold text-custom-primary'>Manage Blogs</h1>

                    </div>



                    <div className="pb-2">

                        <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-2 p-4 flex flex-row gap-10 sm:gap-5 flex-wrap">

                            <div className="w-1/4 ml-auto flex items-center gap-2">

                                <label className="text-lg font-semibold whitespace-nowrap">Select Type :</label>

                                <select

className="w-full border border-[#FFDBC8] rounded-lg px-2 py-1 bg-[#FFF8F5] text-black"

name="userType"

value={selectedType} // Bind select value to state

onChange={handleTypeChange} // Handle select change

>

                                    <option value="All">All</option>

                                    <option value="New">New</option>

                                    <option value="Accepted">Accepted</option>

                                    <option value="Rejected">Rejected</option>

                                </select>

                            </div>

                        </div>

                    </div>



                    <div className="pb-5">

                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>

                            <Pagination items={filteredItems} itemsPerPage={8} renderItems={renderItems} />

                        </div>

                    </div>

                </div>

            </div>

        </div>

);

};


export default AdminBlogAcceptPage;
