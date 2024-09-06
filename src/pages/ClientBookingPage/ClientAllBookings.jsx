import React from 'react';
import Breadcrumb from '../../components_depr/ui/Breadcrumb';
import RegisterHeader from '../../components_depr/common/RegisterHeader';
import ClientSidebar from '../../components_depr/ClientSidebar';
import SortingButton from '../../components_depr/ui/SortingButton';
import BookingStatusCard from '../../components_depr/common/BookingStatusCard';

function ClientAllBookings() {

    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Bookings' },
    ];

    const typeOptions = [
        { label: 'All', type: 'type', value: 1 },
        { label: 'Hotels', type: 'type', value: 2 },
        { label: 'Floral', type: 'type', value: 3 },
        { label: 'Cakes', type: 'type', value: 4 },
        { label: 'Cars', type: 'type', value: 5 },
    ];

    const dateOptions = [
        { label: 'This month', type: 'date', value: 'thisMonth' },
        { label: 'Last month', type: 'date', value: 'lastMonth' },
    ];

    const sortingButtons = [
        { iconPath: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z", title: "Type", items: typeOptions },
        { iconPath: "M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z", title: "Date", items: dateOptions },
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Bookings</h1>
                    </div>
                    <div className="relative pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col gap-2 pt-12'>
                            {/* Sorting Buttons */}
                            <div className="absolute flex flex-row gap-1 mb-0 top-3 right-5">
                                {sortingButtons.map((button, index) => (
                                    <SortingButton
                                        key={index}
                                        iconPath={button.iconPath}
                                        title={button.title}
                                        items={button.items}
                                    />
                                ))}
                            </div>
                            {/* Booking Status Cards */}
                            <div className="flex flex-col gap-2 pt-4"> {/* Added pt-8 to ensure margin from sorting buttons */}
                                <BookingStatusCard vendorname="Rose Garden" date="2024/07/28" status="Accepted" expiration="24hrs" vendortype="Floral" packagename="Venetian Blue" price="50000" guestcount="100" totalamount="5000000" />
                                <BookingStatusCard vendorname="Orange Blooms Cake" date="2024/07/29" status="Pending" vendortype="Cake" packagename="Wedding Cakes" price="200" guestcount="200" totalamount="40000" />
                                <BookingStatusCard vendorname="Shangrila" date="2024/07/30" status="Pending" vendortype="Hotel" packagename="Package1" price="20000" guestcount="200" totalamount="4000000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientAllBookings;
