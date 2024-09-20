import React from 'react';
import ServiceDescriptionCard from './ServiceDescriptionCard';
import SortingButton from '../ui/SortingButton';
import Pagination from '../common/Pagination';
import NewServiceDescriptionCard from '../common/NewServiceDescriptionCard';

const VendorCategoryFloral = ({ title, vendorData, sortingButtons }) => {
    const renderVendorCards = (currentItems) => {
        return (
            // <div className="grid grid-cols-1 gap-4 ml-4 md:ml-3 lg:ml-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            //     {currentItems.map((vendor, index) => (
            //         <ServiceDescriptionCard
            //             key={index}
            //             href={vendor.href}
            //             img={vendor.img}
            //             alt={vendor.alt}
            //             name={vendor.name}
            //             price={vendor.price}
            //             description={vendor.description}
            //             starCount={vendor.starCount}
            //         />
            //     ))}
            // </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {currentItems.map((vendor, index) => (
                    <NewServiceDescriptionCard
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
        <div className="flex flex-col bg-[#FFF8F5] p-4">
            <div className="flex flex-row items-center justify-between">
                <h1 className="pb-5 text-4xl font-bold text-custom-primary">{title}</h1>
                <div className="flex flex-row gap-1 p-4 ml-16 md:gap-3 lg:gap-4">
                    {sortingButtons.map((button, index) => (
                        <SortingButton
                            key={index}
                            iconPath={button.iconPath}
                            title={button.title}
                            items={button.items}
                        />
                    ))}
                </div>
            </div>
            <Pagination
                items={vendorData}
                itemsPerPage={12}
                renderItems={renderVendorCards}
            />
        </div>
    );
};

export default VendorCategoryFloral;
