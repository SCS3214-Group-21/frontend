import React from 'react';
import RegisterHeader from './common/RegisterHeader';
import ClientSidebar from './ClientSidebar';
import LandingFooter from './common/LandingFooter';
import ServiceDescriptionCard from './common/ServiceDescriptionCard';
import Breadcrumb from './ui/Breadcrumb';
import SortingButton from './ui/SortingButton';
import Pagination from './common/Pagination';

const VendorCategory = ({ title, breadcrumbItems, vendorData, sortingButtons }) => {

    const renderVendorCards = (vendors) => {
        return (
            <div className='grid grid-cols-1 gap-6 p-4 ml-16 md:grid-cols-2 lg:grid-cols-4 md:p-8 md:ml-20 lg:ml-72'>
                {vendors.map((vendor, index) => (
                    <ServiceDescriptionCard
                        key={index}
                        href={vendor.href}
                        img={vendor.img}
                        alt={vendor.alt}
                        name={vendor.name}
                        price={vendor.price}
                        description={vendor.description}
                        starCount={vendor.starCount}
                    />
                ))}
            </div>
        );
    };

    return (
        <>

            <div className="flex flex-col bg-[#FFF8F5]">
                <div className="flex flex-col mt-4 ml-4 md:flex-row md:items-center md:ml-20 lg:ml-80">
                    <h1 className='text-3xl ml-3 font-bold text-[#A57E17]'>{title}</h1>
                    <div className='mt-1 ml-4 md:mt-0 md:ml-14'>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className='flex mt-2 ml-4 md:mt-0 md:ml-20 lg:ml-60'>
                        {sortingButtons.map((button, index) => (
                            <SortingButton
                                key={index}
                                iconPath={button.iconPath}
                                title={button.title}
                                items={button.items}
                            />
                        ))}  </div>
                </div>

                <Pagination
                    items={vendorData}
                    itemsPerPage={12}
                    renderItems={renderVendorCards}
                />

            </div>
            {/* <LandingFooter />*/}
        </>
    );
};

export default VendorCategory;
