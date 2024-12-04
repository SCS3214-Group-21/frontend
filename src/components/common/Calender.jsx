import React, { useEffect, useRef, useState } from "react";

function Calender() {
    const calendarRef = useRef(null);
    const currentMonthRef = useRef(null);

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [selectedDate, setSelectedDate] = useState(null)

    const appointments = [
        { date: '2024-07-15', title: 'Doctor Appointment', start: '10:00 AM', end: '11:00 AM' },
        { date: '2024-07-20', title: 'Meeting with Client', start: '10:00 AM', end: '11:00 AM' }
    ];

    useEffect(() => {
        function generateCalendar(year, month) {
            const calendarElement = calendarRef.current;
            const currentMonthElement = currentMonthRef.current;
            
            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            calendarElement.innerHTML = '';

            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            currentMonthElement.innerText = `${monthNames[month]} ${year}`;
            
            const firstDayOfWeek = firstDayOfMonth.getDay();
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'text-center font-semibold';
                dayElement.innerText = day;
                calendarElement.appendChild(dayElement);
            })

            for (let i = 0; i < firstDayOfWeek; i++) {
                const emptyDayElement = document.createElement('div');
                calendarElement.appendChild(emptyDayElement);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'text-center py-2 border cursor-pointer';
                dayElement.innerText = day;

                const currentDate = new Date();
                if (
                    year === currentDate.getFullYear() &&
                    month === currentDate.getMonth() &&
                    day === currentDate.getDate()
                ) {
                    dayElement.classList.add('bg-blue-400', 'text-black')
                }

        const appointmentDate = new Date(year, month, day).toISOString().split('T')[0]
        const appointment = appointments.find(app => app.date === appointmentDate);
        if (appointment) {
            dayElement.classList.add('bg-custom-secondary', 'text-white')
        }
                if (
                    selectedDate &&
                    year === selectedDate.getFullYear() &&
                    month === selectedDate.getMonth() &&
                    day === selectedDate.getDate()
                ) {
                    dayElement.classList.add("bg-green-400", "text-black");
                }

                dayElement.onclick = () => {
                    setSelectedDate(new Date(year, month, day));
                };

                calendarElement.appendChild(dayElement);
            }
        }

        generateCalendar(currentYear, currentMonth);
    }, [currentYear, currentMonth, selectedDate]);

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth - 1;
            if (newMonth < 0) {
                setCurrentYear((prevYear) => prevYear - 1);
                return 11;
            }
            return newMonth;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth + 1;
            if (newMonth > 11) {
                setCurrentYear((prevYear) => prevYear + 1);
                return 0;
            }
            return newMonth;
        });
    };

    return (
        <div className="flex items-center justify-center">
            {/* <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4"> */}
            <div className="w-full mx-auto p-4">
                <div className="bg-white h- shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-custom-primary">
                        <button onClick={handlePrevMonth} className="text-white">Previous</button>
                        <h2 id="currentMonth" className="text-white" ref={currentMonthRef}></h2>
                        <button onClick={handleNextMonth} className="text-white">Next</button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4" id="calendar" ref={calendarRef}></div>
                </div>
            </div>
        </div>
    );
}

export default Calender;
