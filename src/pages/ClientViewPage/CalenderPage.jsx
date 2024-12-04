import React, {useEffect, useState} from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import Calendar from '../../components/common/Calender.jsx';
import ReminderCard from "../../components/common/ReminderCard.jsx";
import BookingSchedule from "../../components/common/BookingSchedule.jsx";
import {fetchMyEvents} from "../../services/eventService.js";
import {format} from "date-fns";

function CalenderPage() {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const currentDate = format(new Date(), "EEE, MMM. d")
    const currentTime = format(new Date(), "h:mm a")

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const data = await fetchMyEvents();
                const upcomingEvents = data.events.filter((event) => {
                    const now = new Date();
                    return new Date(event.event_date) >= now;
                })

                // Sort by event_date, then start_time
                upcomingEvents.sort((a, b) => {
                    const dateA = new Date(a.event_date).getTime();
                    const dateB = new Date(b.event_date).getTime();

                    if (dateA !== dateB) {
                        return dateA - dateB;
                    }

                    const timeA = new Date(`1970-01-01T${a.start_time}`).getTime();
                    const timeB = new Date(`1970-01-01T${b.start_time}`).getTime();

                    return timeA - timeB;
                })

                setEvents(upcomingEvents);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventData()
    }, [])

    const breadcrumbItems = [
        { label: 'My Wedding', href: './mywedding' },
        { label: 'Calendar' },

    ];

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>Error: {error}</p>;

    if (events.length === 0) {
        return (
            <ReminderCard
                text="No events available right now"
                start=""
                end=""
                remain=""
                link="/"
            />
        )
    }

    const nearestEvent = events[0]

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
                        <h1 className='text-4xl font-bold text-custom-primary'>Calendar</h1>
                    </div>
                    <div className='flex flex-row h-screen'>
                        <div className="flex flex-col w-[65%]">
                            <div className="p-5">
                                <div className="bg-[#FFF8F5] bg-no-repeat bg-cover flex flex-row w-full h-52 rounded-3xl p-5 items-center justify-between" style={{ backgroundImage: "url('../src/assets/images/Images/08.png')" }}>
                                    <ReminderCard
                                        text={nearestEvent.title}
                                        start={nearestEvent.start_time}
                                        end={nearestEvent.end_time}
                                        remain={`${Math.ceil((new Date(nearestEvent.event_date) - new Date()) / (1000 * 60 * 60 * 24))} days left`}
                                        link={`/events/${nearestEvent.event_id}`}
                                    />
                                    <div className="flex flex-row flex-wrap items-start justify-end w-full h-full gap-5 pt-5">
                                        <div className="flex flex-row gap-1 p-1 rounded-lg bg-custom-gray w-fit h-fit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-custom-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                            <h1 className="text-black">{currentDate}</h1>
                                        </div>
                                        <div className="flex flex-row gap-1 p-1 rounded-lg bg-custom-gray w-fit h-fit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-custom-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <h1 className="text-black">{currentTime}</h1>
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