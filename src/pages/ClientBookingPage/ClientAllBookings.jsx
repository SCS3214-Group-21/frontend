import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import SortingButton from '../../components/ui/SortingButton';
import BookingStatusCard from '../../components/common/BookingStatusCard';

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
        { iconPath: "M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z", title: "Date", items: dateOptions },
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
