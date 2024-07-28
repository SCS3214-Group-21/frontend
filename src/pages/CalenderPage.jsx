import React from "react";
import RegisterHeader from "../components/common/RegisterHeader";
import ClientSidebar from "../components/ClientSidebar";
import Breadcrumb from '../components/ui/Breadcrumb';
import Calendar from '../components/common/Calender';
import ReminderCard from "../components/common/ReminderCard";
import BookingSchedule from "../components/common/BookingSchedule";

function CalenderPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
    ];

    return(
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
                        <h1 className='text-custom-primary font-bold text-4xl'>Calender</h1>
                    </div>
                    <div className='h-screen flex flex-row'>
                        <div className="flex flex-col w-[65%]">
                            <div className="p-5">
                                <div className="bg-[#FFF8F5] bg-no-repeat bg-cover flex flex-row w-full h-52 rounded-3xl p-5 items-center justify-between" style={{ backgroundImage: "url('./src/assets/images/Images/08.png')" }}>
                                    <ReminderCard 
                                        text={"Make the payment for Floral"}
                                        start={"10:00 AM"}
                                        end={"11:00 AM"}
                                        remain={"2 hours more"}
                                        link={"/"}
                                    />
                                    <div className="flex flex-row items-start justify-end w-full h-full pt-5 gap-5 flex-wrap">
                                        <div className="flex flex-row gap-1 bg-custom-gray w-fit h-fit rounded-lg p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-custom-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                            <h1 className="text-black">Wed, Feb. 15</h1>
                                        </div>
                                        <div className="flex flex-row gap-1 bg-custom-gray w-fit h-fit rounded-lg p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-custom-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <h1 className="text-black">9:32 AM</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-0">
                                <Calendar />
                            </div>
                        </div>
                        <div className="flex flex-col w-[35%] p-5">
                            <BookingSchedule />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalenderPage;