import React from "react";
import ReminderCard from "./ReminderCard";

function Schedule() {
    return(
        <div className="w-full h-full bg-custom-gray rounded-lg flex flex-col p-5 gap-3 overflow-y-auto">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-black text-xl font-semibold">Upcoming Schedule</h1>
                <div className="text-black flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <h1 className="text-black text-xl font-bold">Mon, Aug 17 2023</h1>
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">7 AM</h1>
                <ReminderCard 
                    text={"Make the payment for Floral"}
                    start={"10:00 AM"}
                    end={"11:00 AM"}
                />
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">8 AM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">9 AM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">10 AM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">11 AM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">12 PM</h1>
                <ReminderCard 
                    text={"Make the payment for Floral"}
                    start={"10:00 AM"}
                    end={"11:00 AM"}
                />
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">1 pM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">2 pM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">3 pM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">4 pM</h1>
                <ReminderCard 
                    text={"Make the payment for Floral"}
                    start={"10:00 AM"}
                    end={"11:00 AM"}
                />
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">5 pM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
            <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-black">6 pM</h1>
                {/* <ReminderCard /> */}
            </div>
            <hr className="border-black" />
        </div>
    )
}

export default Schedule;