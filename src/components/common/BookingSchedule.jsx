import React, { useState, useEffect } from "react";
import ReminderCard from "./ReminderCard";
import { format, addDays, subDays, parseISO, isSameDay } from "date-fns";
import { fetchMyEvents } from "../../services/eventService.js";

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetchMyEvents()
                if (!response || !response.events) throw new Error("No events found");

                // const today = new Date()
                //
                // // Filter events that match today's date
                // const todayEvents = response.events.filter((event) => {
                //     const eventDate = parseISO(event.event_date); // Convert to a Date object
                //     return isSameDay(today, eventDate); // Compare only the dates
                // });
                //
                // console.log("Today's Events:", todayEvents);
                //
                // // Sort by start_time
                // todayEvents.sort((a, b) => {
                //     const timeA = new Date(`1970-01-01T${a.start_time}`).getTime();
                //     const timeB = new Date(`1970-01-01T${b.start_time}`).getTime();
                //
                //     return timeA - timeB;
                // })

                const filteredEvents = response.events.filter((event) =>
                    isSameDay(selectedDate, parseISO(event.event_date))
                )

                setSchedule(filteredEvents);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();
    }, [selectedDate])

    const handlePreviousDay = () => {
        setSelectedDate((prevDate) => subDays(prevDate, 1))
    }

    const handleNextDay = () => {
        setSelectedDate((prevDate) => addDays(prevDate, 1))
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const formattedDate = format(selectedDate, "EEE, MMM. d")

    return (
        <div className="w-full h-full bg-custom-gray rounded-lg flex flex-col p-5 gap-3 overflow-y-auto">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-black text-xl font-semibold">Upcoming Schedule</h1>
                <div className="text-black flex flex-row gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                        onClick={handlePreviousDay} // Handle previous day
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                        onClick={handleNextDay} // Handle next day
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <h1 className="text-black text-xl font-bold">{formattedDate}</h1>

            {schedule.length > 0 ? (
                schedule.map((item, index) => (
                    <div key={index}>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <h1 className="text-black">{item.time}</h1>
                            <ReminderCard
                                text={item.title}
                                start={item.start_time}
                                end={item.end_time}
                                // remain={`${Math.ceil(
                                //     (parseISO(item.event_date) - new Date()) / (1000 * 60 * 60 * 24)
                                // )} days left`}
                                // link={`/events/${item.event_id}`}
                            />
                        </div>
                        <hr className="border-black" />
                    </div>
                ))
            ) : (
                <h1 className="text-black">No events scheduled for this day</h1>
            )}
        </div>
    );
};

export default Schedule


// import React from "react";
// import ReminderCard from "./ReminderCard";
//
// function Schedule() {
//     return(
//         <div className="w-full h-full bg-custom-gray rounded-lg flex flex-col p-5 gap-3 overflow-y-auto">
//             <div className="flex flex-row items-center justify-between">
//                 <h1 className="text-black text-xl font-semibold">Upcoming Schedule</h1>
//                 <div className="text-black flex flex-row gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
//                     </svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//                     </svg>
//                 </div>
//             </div>
//             <h1 className="text-black text-xl font-bold">Mon, Aug 17 2023</h1>
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">7 AM</h1>
//                 <ReminderCard
//                     text={"Make the payment for Floral"}
//                     start={"10:00 AM"}
//                     end={"11:00 AM"}
//                 />
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">8 AM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">9 AM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">10 AM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">11 AM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">12 PM</h1>
//                 <ReminderCard
//                     text={"Make the payment for Floral"}
//                     start={"10:00 AM"}
//                     end={"11:00 AM"}
//                 />
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">1 pM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">2 pM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">3 pM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">4 pM</h1>
//                 <ReminderCard
//                     text={"Make the payment for Floral"}
//                     start={"10:00 AM"}
//                     end={"11:00 AM"}
//                 />
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">5 pM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//             <div className="flex flex-row items-center justify-start gap-2">
//                 <h1 className="text-black">6 pM</h1>
//                 {/* <ReminderCard /> */}
//             </div>
//             <hr className="border-black" />
//         </div>
//     )
// }
//
// export default Schedule;