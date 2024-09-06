import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/VendorSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function ViewPackagePage(){
    const navigate = useNavigate();

    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
    ];

    const handleDeleteClick = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "Do you want to delete Package 1?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/vendorpackages');
          } else {
            Swal.fire({
              title: 'Cancelled',
              text: "Package 1 is safe!",
              icon: 'error',
              confirmButtonColor: '#3085d6',
            });
          }
        });
      };

    return(
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-2 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-custom-primary font-bold text-4xl'>View Package</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5 flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start gap-2 lg:gap-5'>
                            <h1 className='text-black text-2xl'>Package 01</h1>
                            <div className="flex flex-col">
                                <h1 className="text-black text-sm"><span className="italic">Time</span> : 05.00 PM&emsp;|&emsp;<span className="italic">Date</span> : 1/07/2024   </h1>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Link to={"/updatepackage"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black">
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                </svg>
                                </Link>
                                <button onClick={handleDeleteClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-700">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col items-start gap-5'>
                            <h1 className="text-black text-xl">Items :<br />
                                <ul className="list-disc italic text-sm ml-10">
                                    <li>Item 01</li>
                                    <li>Item 01</li>
                                    <li>Item 01</li>
                                </ul>
                            </h1>
                            <h1 className="text-black text-xl">Price :&ensp; <span className="italic text-sm">10,000 LKR per person</span></h1>
                            <h1 className="text-black text-xl">Description :&ensp; <br /><span className="italic text-sm">This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package. This is package more details in paragraph. I want to show how this works and this is give more better idea about the package.</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPackagePage
